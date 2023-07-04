import React, { useMemo } from 'react'

import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssPercent, CssRem, CssString } from 'types/customCssType'
import FitNextImage from '@components/common/fitNextImage'
import Comment from '@components/common/comment'
import OpinionList from '@components/common/opinionList'
import useInput from '@hooks/useInput'
import { useAppDispatch, useAppSelector } from '@store/store'
import { createIssueOpinion, getIssueDebatePost } from '@store/slices/issueDebatePost'
import EmptyContent from '@components/common/emptyContent'
import dayjs from 'dayjs'
import Link from 'next/link'
import {
  ArticleItem,
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
  PostCurrentSituationBox,
  PostHeaderBox,
  RelatedPostsBox,
} from '@styles/detailPost.style'
import { AvgScore, OtherInfoBox } from './style'

interface Props {
  pid: string | string[] | undefined
}

const IssuePostDetailContent = ({ pid }: Props) => {
  const dispatch = useAppDispatch()
  const [comment, onChangeComment, setComment] = useInput<HTMLTextAreaElement>('')
  const [score, onChangeScore] = useInput<HTMLSelectElement>('5')
  const postData = useAppSelector((state) => state.issueDebatePost.postData)

  // 평균 점수
  const avgScore = useMemo(() => {
    if (postData === null) return 0
    const scoreList = postData.IssueOpinions.map((res) => res.score)
    return (
      scoreList.reduce((sum, currentValue) => sum + currentValue, 0) / scoreList.length
    ).toFixed(2)
  }, [postData])

  // 실 참여 인원
  const realUserCount = useMemo(() => {
    if (postData === null) return 0
    const realUserList: number[] = []
    postData.IssueOpinions.forEach((res) => {
      if (!realUserList.find((num) => num === res.User.id)) {
        realUserList.push(res.User.id)
      }
    })
    return realUserList.length
  }, [postData])

  const submitComment = async () => {
    try {
      if (typeof pid !== 'string') return
      await dispatch(
        createIssueOpinion({
          postId: parseInt(pid, 10),
          content: comment,
          score: parseInt(score, 10),
        }),
      ).unwrap()
      await dispatch(getIssueDebatePost(pid)).unwrap()
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
            boxShadow: new CssString(''),
            objectFit: new CssString('cover'),
          }}
        >
          <FitNextImage src={postData.imgUrl ?? '/img/default-thumbnail.png'} alt="thumbnail" />
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
      <PostCurrentSituationBox>
        <AvgScore>평균 점수 : {avgScore}</AvgScore>
        <OtherInfoBox>
          총 의견 {postData.IssueOpinions.length} 참여인원 {realUserCount}
        </OtherInfoBox>
        <p>* 평균 점수가 5 점에 가까울수록 다수의 참여자들이 중요하게 생각한 주제입니다.</p>
      </PostCurrentSituationBox>

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
        <span>점수 :</span>
        <OpinionSelect onChange={onChangeScore} value={score}>
          <option value="5">5</option>
          <option value="4">4</option>
          <option value="3">3</option>
          <option value="2">2</option>
          <option value="1">1</option>
          <option value="0">0</option>
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
        <OpinionList data={postData.IssueOpinions} mode="issue" />
      </OpinionListBox>
    </DetailDevateContainor>
  )
}

export default IssuePostDetailContent