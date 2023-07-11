import React, { useCallback } from 'react'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import dayjs from 'dayjs'
import getConfig from 'next/config'
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
  page: string
  limit: number
}

const DebateContentList = ({ page, limit }: Props) => {
  const router = useRouter()
  const postData = useAppSelector((state) => state.debateTopicPosts.postsData)
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL

  const changePage = useCallback(
    (num: number) => {
      router.push({ pathname: '/debate-topic-board', query: { page: num } })
    },
    [router],
  )

  return (
    <InexContainor>
      {postData?.rows.map((res) => (
        <Link
          href={{
            pathname: `/debate-topic-board/[pid]`,
            query: { pid: res.id },
          }}
          key={`debateTopicPosts_${res.id}`}
        >
          <PostBox>
            <NextImageBox>
              <FitNextImage
                src={res.imgUrl ? `${APISeverUrl}${res.imgUrl}` : '/img/default-thumbnail.png'}
                alt="thumnail"
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
          value={Number(page) - 1}
          bar={5}
          max={Math.ceil((postData?.count ?? 0) / limit)}
          onChange={changePage}
        />
      </PaginationBox>
    </InexContainor>
  )
}

export default DebateContentList
