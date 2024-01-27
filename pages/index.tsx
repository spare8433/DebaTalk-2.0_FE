import MainSearch from '@components/common/mainSearch'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { getDebateHotTopics, getDebateKeywords } from '@store/slices/debatePosts'
import { useAppSelector, wrapper } from '@store/store'
import React, { ReactElement, useEffect } from 'react'
import { loadMyInfo } from '@store/slices/user'
import axios from 'axios'
import { useRouter } from 'next/router'
import MainDebateContent from '@components/home/mainDebateContents'
import MainCarousel from '@components/home/mainCarousel'
import styled from 'styled-components'
import { getDebateTopicPosts } from '@store/slices/debateTopicPosts'
import DebateTopicContents from '@components/home/debateTopicContents'
import UserRankContents from '@components/home/userRankContents'
import { getUsersInfo } from '@store/slices/users'
import Cookies from 'universal-cookie'

export const ContentContainor = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  background-color: #fff;
  &.topBanner,
  &.subContent {
    background-color: #fff;
    padding: 5rem 0;
  }
  &.majorContent {
    background-color: ${({ theme }) => theme.colors.background};
  }
  &.recentReaction {
    background-color: ${({ theme }) => theme.colors.main};
  }
`

const ContentBox = styled.div`
  width: 1160px;
  margin: 0 auto;
`

const SubContentBox = styled(ContentBox)`
  display: grid;
  grid-template-columns: repeat(2, calc(50% - 2rem));
  column-gap: 4rem;
`

const Home = () => {
  const user = useAppSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (user.loadMyInfoError !== null) {
      alert('사용자 정보를 정상적으로 불러오지 못했습니다. 다시 로그인 부탁드립니다.')
      router.push('/login')
    }
  }, [router, user.loadMyInfoError])

  return (
    <>
      <ContentContainor className="topBanner">
        <ContentBox>
          <MainSearch />
          <MainCarousel />
        </ContentBox>
      </ContentContainor>

      <ContentContainor className="majorContent">
        <ContentBox>
          <MainDebateContent />
        </ContentBox>
      </ContentContainor>

      <ContentContainor className="subContent">
        <SubContentBox>
          <DebateTopicContents />
          <UserRankContents />
        </SubContentBox>
      </ContentContainor>

      {/* <ContentContainor className="recentReaction">
        <ContentBox></ContentBox>
      </ContentContainor> */}
    </>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookies = new Cookies(req.headers.cookie)
  const connectId = cookies.get('connect.sid')

  if (connectId && connectId !== '') {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = `connect.sid=${connectId}`
    await store.dispatch(loadMyInfo())
  }

  await store.dispatch(getDebateKeywords({ limit: 6 }))
  await store.dispatch(getDebateHotTopics())
  await store.dispatch(getDebateTopicPosts({ limit: 5 }))
  await store.dispatch(getUsersInfo({ limit: 10, key: 'level' })).unwrap()

  return { props: {} }
})

Home.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export default Home
