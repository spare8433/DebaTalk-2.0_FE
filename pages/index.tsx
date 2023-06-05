import MainSearch from '@components/common/mainSearch'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { getDebateHotTopics, getDebateKeywords } from '@store/slices/debatePosts'
import { wrapper } from '@store/store'
import React, { ReactElement } from 'react'
import { ContentBox, ContentContainor } from '@styles/pages/home.style'
import { loadMyInfo } from '@store/slices/user'
import axios from 'axios'
import MainDebateContent from '../components/home/mainDebateContents'
import MainCarousel from '../components/home/mainCarousel'

const querry = {
  limit: 12,
  skip: 12,
}

const Home = () => (
  <>
    <ContentContainor className="topBanner">
      <ContentBox>

        <MainSearch searchText="" />
        <MainCarousel />
      </ContentBox>
    </ContentContainor>

    <ContentContainor className="majorContent">
      <ContentBox>
        <MainDebateContent />
      </ContentBox>
    </ContentContainor>

    <ContentContainor className="recentReaction">
      <ContentBox>
        {/* <RecentReaction></RecentReaction> */}
      </ContentBox>
    </ContentContainor>
  </>
)

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  await store.dispatch(getDebateKeywords(querry));
  await store.dispatch(getDebateHotTopics())
  const cookie = req ? req.headers.cookie : ''
  if (req && cookie) { // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = cookie
  }
  await store.dispatch(loadMyInfo())
  return { props: {} }
})

Home.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export default Home
