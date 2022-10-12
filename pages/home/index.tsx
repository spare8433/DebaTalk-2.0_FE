import HeaderFooterLayout from '@components/layouts/headerFooterLayout'
import { MainSearch } from '@components/mainSearch'
import { getDebateHotTopics, getDebateKeywords } from '@store/slices/debatePosts'
import { wrapper } from '@store/store'
import React from 'react'
import MainCarousel from './mainCarousel'
import { MainDebateContent } from './mainDebateContents'
import { ContentBox, ContentContainor } from './style'

const querry = {
  limit:12,
  skip:12
}

const Home = () => {
  

  return (
    <HeaderFooterLayout>
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
    </HeaderFooterLayout>
  )
}


// getServerSideProps: <P extends {} = any>(callback: GetServerSidePropsCallback<S, P>) => {
//   GetServerSideProps<P, import("querystring").ParsedUrlQuery, import("next").PreviewData>
// };

export const getServerSideProps = wrapper.getServerSideProps((store)=> async () => {
  await store.dispatch(getDebateKeywords(querry));
  await store.dispatch(getDebateHotTopics())
  return {props: {}}
})

export default Home