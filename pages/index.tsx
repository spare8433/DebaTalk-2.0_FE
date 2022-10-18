import MainSearch from '@components/common/mainSearch'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { getDebateHotTopics, getDebateKeywords } from '@store/slices/debatePosts'
import { wrapper } from '@store/store'
import React, { ReactElement } from 'react'
import MainCarousel from '../components/home/mainCarousel'
import MainDebateContent from '../components/home/mainDebateContents'
import { ContentBox, ContentContainor } from '@styles/pages/home.style'

const querry = {
  limit:12,
  skip:12
}

const Home = () => {
  return (
    <>
      <ContentContainor className='topBanner'>
        <ContentBox>
          
          <MainSearch />
          <MainCarousel></MainCarousel>        
        </ContentBox>
      </ContentContainor>

      <ContentContainor className='majorContent'>
        <ContentBox>
          <MainDebateContent></MainDebateContent>
        </ContentBox>
      </ContentContainor>

      <ContentContainor className='recentReaction'>
        <ContentBox>
          {/* <RecentReaction></RecentReaction> */}
        </ContentBox>
      </ContentContainor>
    </>
  )
}

Home.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}


export const getServerSideProps = wrapper.getServerSideProps((store)=> async () => {
  await store.dispatch(getDebateKeywords(querry));
  await store.dispatch(getDebateHotTopics())
  return {props: {}}
})

export default Home