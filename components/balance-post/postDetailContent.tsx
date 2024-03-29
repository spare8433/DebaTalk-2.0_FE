import React, { useCallback, useRef } from 'react'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssPercent, CssRem, CssString } from 'types/customCssType'
import FitNextImage from '@components/common/fitNextImage'
import Comment from '@components/common/comment'
import OpinionList from '@components/common/opinionList'
import { useAppDispatch, useAppSelector } from '@store/store'
import EmptyContent from '@components/common/emptyContent'
import dayjs from 'dayjs'
import Link from 'next/link'
import useInput from '@hooks/useInput'
import { createBalanceOpinion, getBalanceDebatePost } from '@store/slices/balanceDebatePost'
import {
  ArticleItem,
  BlueText,
  CommentBox,
  ContentBox,
  ContentTitle,
  DebateRulesBox,
  DetailDebateContainor,
  HeaderButtonBox,
  HeaderCategoryLine,
  HeaderInfoBox,
  OpinionExplain,
  OpinionListBox,
  OpinionSelect,
  OpinionSelectBox,
  PostContentBox,
  PostHeaderBox,
  RedText,
  RelatedPostsBox,
} from '@styles/detailPost.style'
import { useRouter } from 'next/router'
import SharePostButtons from '@components/common/sharePostButtons'
import { LessStyleBtn } from '@styles/commonStyle/buttons'
import { BalanceOption, BalancePostCurrentSituationBox } from './style'

interface Props {
  pid: string
}

const BalancePostDetailContent = ({ pid }: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [comment, onChangeComment, setComment] = useInput<HTMLTextAreaElement>('')
  const [selection, onChangeSelection] = useInput<HTMLSelectElement>('A')
  const postData = useAppSelector((state) => state.balanceDebatePost.postData)
  const writeOpinionBoxRef = useRef<HTMLDivElement>(null)

  const moveWriteOpinionBox = useCallback(() => {
    writeOpinionBoxRef.current?.scrollIntoView({ behavior: 'smooth' })
  }, [])

  const submitComment = useCallback(async () => {
    // 의견 생성
    try {
      await dispatch(
        createBalanceOpinion({
          postId: parseInt(pid, 10),
          content: comment,
          selection,
        }),
      ).unwrap()
      setComment('')
    } catch (error) {
      alert('의견 작성에 실패하셨습니다.')
    }

    // 게시물 다시 불러오기
    try {
      await dispatch(getBalanceDebatePost(pid)).unwrap()
    } catch (error) {
      alert('게시물을 불러오지 못 했습니다.')
      router.push({ pathname: '/debate-forum', query: { method: 'balance', page: 1, limit: 6 } })
    }
  }, [comment, dispatch, pid, router, selection, setComment])

  if (postData === null) return <EmptyContent />

  return (
    <DetailDebateContainor>
      {/* 타이틀 부분 박스 */}
      <PostHeaderBox>
        <h1>{postData.title}</h1>

        <HeaderCategoryLine>
          <span>
            {`[${dayjs(postData.createdAt).format('YYYY-MM-DD HH:mm:ss')} - 밸런스토론 - ${
              postData.category
            }]`}
          </span>
          <HeaderButtonBox>
            <SharePostButtons title={postData.title} />
          </HeaderButtonBox>
        </HeaderCategoryLine>

        <HeaderInfoBox>
          <p>
            ※ 서로의 관점을 존중하고 서로 의견을 나누며 긍정적이고 발전적인 토론이 되길바랍니다. ※
          </p>
          <LessStyleBtn onClick={moveWriteOpinionBox}>
            페이지 하단에서 의견을 남기실 수 있습니다. ↓↓
          </LessStyleBtn>
        </HeaderInfoBox>
      </PostHeaderBox>

      {/* 내용 */}
      <PostContentBox>
        <NextImageBox
          styleOption={{
            width: new CssPercent(100),
            height: new CssRem(20),
            boxShadow: new CssString('rgba(99, 99, 99, 0.3) 0px 2px 8px 0px'),
            objectFit: new CssString('cover'),
          }}
        >
          <FitNextImage
            src={postData.imgUrl ?? '/img/default-thumbnail.png'}
            alt="thumbnail"
            priority
          />
        </NextImageBox>

        <ContentTitle>[ 설명 ]</ContentTitle>
        <ContentBox>
          <p>{postData.description}</p>
        </ContentBox>

        <ContentTitle>[ 기사 ]</ContentTitle>
        <ContentBox>
          {postData.article &&
            postData.article.split(',').map((res, index) => (
              <ArticleItem key={`articleLink_${index}`}>
                <Link href={res}>{res}</Link>
              </ArticleItem>
            ))}
        </ContentBox>

        <ContentTitle>[ 찬성 의견 ]</ContentTitle>
        <ContentBox>
          <p>{postData.issue1}</p>
        </ContentBox>

        <ContentTitle>[ 반대 의견 ]</ContentTitle>
        <ContentBox>
          <p>{postData.issue2}</p>
        </ContentBox>
      </PostContentBox>

      {/* 관련 포스트 추천 박스 */}
      <RelatedPostsBox />

      {/* 토론 현황 박스 */}
      <ContentTitle>[ 현황 ]</ContentTitle>
      <BalancePostCurrentSituationBox>
        <BalanceOption>
          {postData.optionAListCount > postData.optionBListCount && (
            <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
              <FitNextImage src="/img/crown.png" alt="crown" />
            </NextImageBox>
          )}
          <BlueText>A. {postData.optionA}</BlueText>
          <p>{postData.optionAListCount} 명</p>
        </BalanceOption>

        <span>VS</span>

        <BalanceOption>
          {postData.optionAListCount < postData.optionBListCount && (
            <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
              <FitNextImage src="/img/crown.png" alt="crown" />
            </NextImageBox>
          )}
          <RedText>B. {postData.optionB}</RedText>
          <p>{postData.optionBListCount} 명</p>
        </BalanceOption>
      </BalancePostCurrentSituationBox>

      {/* 토론규칙 */}
      <DebateRulesBox>
        <h3>토론규칙</h3>
        <p>
          한걸음 더 나아가기 위한 토론장임을 기억하고 서로 다른 생각, 관점, 의견의 차이를 인정
          합시다.
          <br />
          정확하지 않은 정보는 혼란을 야기할 수 있으니 인용하려는 정보의 출처를 남겨주십시오
          <br />
          비방 및 욕설은 삭제 조치되고 차후 사이트 이용에 제제가 있을 수 있습니다.
        </p>
      </DebateRulesBox>

      {/* 밸런스 선택 */}
      <OpinionSelectBox>
        <span>선택지 :</span>
        <OpinionSelect onChange={onChangeSelection} value={selection}>
          <option value="A">A. {postData.optionA}</option>
          <option value="B">B. {postData.optionB}</option>
        </OpinionSelect>
        <p>* 두 가지 선택지 중 한 가지를 선택해주세요.</p>
      </OpinionSelectBox>

      {/* 의견 및 댓글 (따로 컴포넌트) */}
      <ContentTitle>[ 의견작성 ]</ContentTitle>
      <OpinionExplain>
        ※ 하나의 게시물당 하나의 의견을 남기실 수 있으니 신중하게 작성 부탁드립니다.
      </OpinionExplain>
      <CommentBox ref={writeOpinionBoxRef}>
        <Comment
          textState={comment}
          setState={setComment}
          onChangeState={onChangeComment}
          submitFn={submitComment}
        />
      </CommentBox>

      <ContentTitle>[ 의견 ]</ContentTitle>
      <OpinionListBox>
        <OpinionList data={postData.BalanceOpinions} mode="balance" />
      </OpinionListBox>
    </DetailDebateContainor>
  )
}

export default BalancePostDetailContent
