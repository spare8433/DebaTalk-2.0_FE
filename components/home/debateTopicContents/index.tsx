import React, { useCallback } from 'react'
import { useRouter } from 'next/router'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { StyledCategory } from '@styles/commonStyle'
import { LessStyleBtn } from '@styles/commonStyle/buttons'
import {
  BoradTitle,
  DebateTopicBox,
  DebateTopicItem,
  OtherInfoLine,
  ProfileItems,
  RecentInfoItems,
  TitleLine,
} from './style'

const DebateTopicContents = () => {
  const router = useRouter()
  const postData = useAppSelector((state) => state.debateTopicPosts.postsData)

  const handleMoveDebateTopicBoard = useCallback(() => {
    router.push('/debate-topic-board?page=1&limit=8')
  }, [router])

  return (
    <DebateTopicBox>
      <BoradTitle>
        <h3>주제 추천 게시판</h3>
        <LessStyleBtn onClick={handleMoveDebateTopicBoard}>더보기 {'>'}</LessStyleBtn>
      </BoradTitle>

      {postData?.data.map((res) => (
        <Link
          href={{
            pathname: `/debate-topic-board/debate-topic-post/[pid]`,
            query: { pid: res.id },
          }}
          key={`debateTopicPosts_${res.id}`}
        >
          <DebateTopicItem>
            <TitleLine>
              <StyledCategory>{res.category}</StyledCategory>
              <h5>{res.title}</h5>
            </TitleLine>

            <OtherInfoLine>
              <ProfileItems>
                <span>{`Lv ${res.User.level}`}</span>
                <span>{res.User.userId}</span>
              </ProfileItems>

              <RecentInfoItems>
                <span>{`추천수 ${res.Likers.length}`}</span>
                <span>{`조회수 ${res.hits}`}</span>
              </RecentInfoItems>
            </OtherInfoLine>
          </DebateTopicItem>
        </Link>
      ))}
    </DebateTopicBox>
  )
}

export default DebateTopicContents
