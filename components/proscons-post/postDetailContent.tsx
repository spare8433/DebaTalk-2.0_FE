import React from 'react'
import useInput from '@hooks/useInput'
import { useAppDispatch, useAppSelector } from '@store/store'
import { createProsConsOpinion, getProsConsDebatePost } from '@store/slices/prosConsDebatePost'
import EmptyContent from '@components/common/emptyContent'
import dayjs from 'dayjs'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssPercent, CssRem, CssString } from 'types/customCssType'
import FitNextImage from '@components/common/fitNextImage'
import Link from 'next/link'
import Comment from '@components/common/comment'
import OpinionList from '@components/common/opinionList'
import {
  ArticleItem,
  BlueText,
  CommentBox,
  ContentBox,
  ContentTitle,
  DebateRulesBox,
  DetailDevateContainor,
  HeaderButtonBox,
  HeaderCategoryLine,
  HeaderInfoBox,
  OpinionListBox,
  OpinionSelect,
  OpinionSelectBox,
  PostContentBox,
  PostHeaderBox,
  RedText,
  RelatedPostsBox,
} from '@styles/detailPost.style'
import getConfig from 'next/config'
import { ProsConsOption, ProsConsPostCurrentSituationBox } from './style'

interface Props {
  pid: string | string[] | undefined
}

const ProsConsPostDetailContent = ({ pid }: Props) => {
  const dispatch = useAppDispatch()
  const [comment, onChangeComment, setComment] = useInput<HTMLTextAreaElement>('')
  const [selection, onChangeSelection] = useInput<HTMLSelectElement>('찬성')
  const postData = useAppSelector((state) => state.prosConsDebatePost.postData)
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL

  const submitComment = async () => {
    try {
      if (typeof pid !== 'string') return
      await dispatch(
        createProsConsOpinion({
          postId: parseInt(pid, 10),
          content: comment,
          selection,
        }),
      ).unwrap()
      await dispatch(getProsConsDebatePost(pid)).unwrap()
    } catch (error) {
      console.log(error)
    }
  }

  if (postData === null) return <EmptyContent />

  return (
    <DetailDevateContainor>
      {/* 타이틀 부분 박스 */}
      <PostHeaderBox>
        <h1>{postData.title}</h1>

        <HeaderCategoryLine>
          <span>
            {`[${dayjs(postData.createdAt).format('YYYY-MM-DD HH:mm:ss')} - 이슈토론 - ${
              postData.category
            }]`}
          </span>
          <HeaderButtonBox>버튼 들어갈 자리</HeaderButtonBox>
        </HeaderCategoryLine>

        <HeaderInfoBox>
          <p>
            ※ 서로의 관점을 존중하고 서로 의견을 나누며 긍정적이고 발전적인 토론이 되길바랍니다. ※
          </p>
          <span>페이지 하단에서 의견을 남기실 수 있습니다. ↓↓</span>
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
            src={
              postData.imgUrl ? `${APISeverUrl}${postData.imgUrl}` : '/img/default-thumbnail.png'
            }
            alt="thumbnail-img"
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

        <ContentTitle>[ 주요 의견 ]</ContentTitle>
        <ContentBox>
          <p>{postData.issue1}</p>
        </ContentBox>
      </PostContentBox>

      {/* 관련 포스트 추천 박스 */}
      <RelatedPostsBox />

      {/* 토론 현황 박스 */}
      <ContentTitle>[ 현황 ]</ContentTitle>
      <ProsConsPostCurrentSituationBox>
        <ProsConsOption>
          {postData.OptionAgreeList.length > postData.OptionOpposeList.length && (
            <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
              <FitNextImage src="/img/crown.png" alt="crown" />
            </NextImageBox>
          )}

          <BlueText>찬성</BlueText>

          <p>{postData.OptionAgreeList.length} 명</p>
        </ProsConsOption>

        <span>OR</span>

        <ProsConsOption>
          {postData.OptionAgreeList.length < postData.OptionOpposeList.length && (
            <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
              <FitNextImage src="/img/crown.png" alt="crown" />
            </NextImageBox>
          )}

          <RedText>반대</RedText>

          <p>{postData.OptionOpposeList.length} 명</p>
        </ProsConsOption>
      </ProsConsPostCurrentSituationBox>

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

      {/* 찬반 선택 */}
      <OpinionSelectBox>
        <span>점수 :</span>
        <OpinionSelect onChange={onChangeSelection} value={selection}>
          <option value="찬성">찬성</option>
          <option value="반대">반대</option>
        </OpinionSelect>
        <p>* 토론 주제가 이슈화되기에 적절한지 여부를 0 ~ 5 까지의 점수로 의견을 나타내주세요.</p>
      </OpinionSelectBox>

      {/* 의견 및 댓글 (따로 컴포넌트) */}
      <ContentTitle>[ 의견작성 ]</ContentTitle>
      <CommentBox>
        <Comment
          textState={comment}
          setState={setComment}
          onChangeState={onChangeComment}
          submitFn={submitComment}
        />
      </CommentBox>

      <ContentTitle>[ 의견 ]</ContentTitle>
      <OpinionListBox>
        <OpinionList data={postData.ProsConsOpinions} mode="prosCons" />
      </OpinionListBox>
    </DetailDevateContainor>
  )
}

export default ProsConsPostDetailContent
