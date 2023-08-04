import React, { useCallback } from 'react'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import dayjs from 'dayjs'
import Pagination from '@components/common/pagination'
import { useRouter } from 'next/router'
import {
  InexContainor,
  InfoBox,
  OtherInfoLine,
  PaginationBox,
  PostBox,
  ProfileItems,
  RecentInfoItems,
  TextLine,
  TitleLine,
} from './style'

interface Props {
  searchText?: string | null
  page?: number | null
  limit?: number | null
}

const DebateContentList = ({ page, limit, searchText }: Props) => {
  const router = useRouter()
  const postData = useAppSelector((state) => state.debateTopicPosts.postsData)
  const currentPage = page ?? 1
  const currentLimit = limit ?? 8
  const currentSearchText = searchText ?? ''

  const changePage = useCallback(
    (num: number) => {
      router.push({
        pathname: '/debate-topic-board',
        query: { page: num, limit: currentLimit, searchText: currentSearchText },
      })
    },
    [currentLimit, currentSearchText, router],
  )

  return (
    <InexContainor>
      {postData?.data.map((res) => (
        <Link
          href={{
            pathname: `/debate-topic-board/debate-topic-post/[pid]`,
            query: { pid: res.id },
          }}
          key={`debateTopicPosts_${res.id}`}
        >
          <PostBox>
            <NextImageBox>
              <FitNextImage
                src={res.imgUrl ?? '/img/default-thumbnail.png'}
                alt="thumnail"
                priority
              />
            </NextImageBox>
            <InfoBox>
              <TitleLine>{res.title}</TitleLine>
              <TextLine>
                <p>{res.description}</p>
              </TextLine>
              <OtherInfoLine>
                <ProfileItems>
                  <span>{`Lv ${res.User.level}`}</span>
                  <span>{res.User.userId}</span>
                </ProfileItems>

                <RecentInfoItems>
                  <p>{dayjs(res.createdAt).format('YYYY-MM-DD HH:mm:ss')}</p>
                  <span>{`추천수 ${res.Likers.length}`}</span>
                  <span>{`조회수 ${res.hits}`}</span>
                </RecentInfoItems>
              </OtherInfoLine>
            </InfoBox>
          </PostBox>
        </Link>
      ))}
      <PaginationBox>
        <Pagination
          value={currentPage - 1}
          bar={5}
          max={Math.ceil((postData?.count ?? 0) / currentLimit)}
          onChange={changePage}
        />
      </PaginationBox>
    </InexContainor>
  )
}

export default DebateContentList
