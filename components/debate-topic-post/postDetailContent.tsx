import React, { useCallback } from 'react'

import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssPercent, CssRem, CssString } from 'types/customCssType'
import FitNextImage from '@components/common/fitNextImage'
import Comment from '@components/common/comment'
import OpinionList from '@components/common/opinionList'
import useInput from '@hooks/useInput'
import { useAppDispatch, useAppSelector } from '@store/store'
import EmptyContent from '@components/common/emptyContent'
import dayjs from 'dayjs'
import {
  CommentBox,
  ContentBox,
  ContentTitle,
  DebateRulesBox,
  DetailDebateContainor,
  HeaderButtonBox,
  HeaderCategoryLine,
  HeaderInfoBox,
  OpinionListBox,
  PostContentBox,
  PostHeaderBox,
  RelatedPostsBox,
} from '@styles/detailPost.style'
import getConfig from 'next/config'
import SharePostButtons from '@components/common/sharePostButtons'
import { useRouter } from 'next/router'
import { createDebateTopicOpinion, getDebateTopicPost } from '@store/slices/debateTopicPost'

interface Props {
  pid: string
}

const DebateTopicPostDetailContent = ({ pid }: Props) => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [comment, onChangeComment, setComment] = useInput<HTMLTextAreaElement>('')
  const postData = useAppSelector((state) => state.debateTopicPost.postData)
  const { publicRuntimeConfig } = getConfig()
  const APIServerUrl = publicRuntimeConfig.API_SERVER_URL

  const submitComment = useCallback(async () => {
    try {
      await dispatch(
        createDebateTopicOpinion({
          postId: parseInt(pid, 10),
          content: comment,
        }),
      ).unwrap()
      await dispatch(getDebateTopicPost(pid)).unwrap()
    } catch (error) {
      alert('게시물을 불러오지 못 했습니다.')
      router.push({
        pathname: '/debate-topic-board/debate-topic-post',
        query: { page: 1, limit: 8 },
      })
    }
  }, [comment, dispatch, pid, router])

  if (postData === null) return <EmptyContent />

  return (
    <DetailDebateContainor>
      {/* 타이틀 부분 박스 */}
      <PostHeaderBox>
        <h1>{postData.title}</h1>

        <HeaderCategoryLine>
          <span>
            {`[${dayjs(postData.createdAt).format('YYYY-MM-DD HH:mm:ss')} - 이슈토론 - ${
              postData.category
            }]`}
          </span>
          <HeaderButtonBox>
            <SharePostButtons title={postData.title} />
          </HeaderButtonBox>
        </HeaderCategoryLine>

        <HeaderInfoBox>
          <p>
            ※ 다양한 토론 주제를 공유하고 의견을 나눠봄으로써 좀더 흥미로운 토론으로 이어지길
            바랍니다. ※
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
          <FitNextImage
            src={
              postData.imgUrl ? `${APIServerUrl}${postData.imgUrl}` : '/img/default-thumbnail.png'
            }
            alt="thumbnail"
          />
        </NextImageBox>

        <ContentTitle>[ 설명 ]</ContentTitle>
        <ContentBox>
          <p>{postData.description}</p>
        </ContentBox>
      </PostContentBox>

      {/* 관련 포스트 추천 박스 */}
      <RelatedPostsBox />

      {/* 토론규칙 */}
      <DebateRulesBox>
        <h3>토론규칙</h3>
        <p>
          더나은 토론을 위해 다양한 이야기을 공유하며 서로 다른 생각, 관점, 의견의 차이를 인정
          합시다.
          <br />
          정확하지 않은 정보는 혼란을 야기할 수 있으니 인용하려는 정보의 출처를 남겨주십시오
          <br />
          비방 및 욕설은 삭제 조치되고 차후 사이트 이용에 제제가 있을 수 있습니다.
        </p>
      </DebateRulesBox>

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
        <OpinionList data={postData.DebateTopicOpinions} mode="issue" />
      </OpinionListBox>
    </DetailDebateContainor>
  )
}

export default DebateTopicPostDetailContent
