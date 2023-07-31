import React, { useRef } from 'react'
import styled from 'styled-components'
import Carousel from '@components/common/carousel'
import { useAppSelector } from '@store/store'
import { ReducerStates } from '@store/rootReducer'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import CarouselSlide from './carouselSlide'

const MainCarouselLayout = styled.div`
  width: 100%;
`

const BannerImageBox = styled(NextImageBox)`
  width: 32rem;
  height: 24rem;
  position: absolute;
  right: 50px;
  bottom: 0;
  img {
    opacity: 0.5;
  }
`
const MainCarousel = () => {
  const debateKeywordsData = useAppSelector(
    (state: ReducerStates) => state.debatePosts.debateKeywordsData,
  )

  const test = useRef<HTMLDivElement>(null)

  const option = {
    height: '360',
    slideTime: 3000,
  }

  return (
    <MainCarouselLayout ref={test}>
      <Carousel
        option={option}
        banner={
          <BannerImageBox>
            <FitNextImage alt="debatePeople" src="/img/mainBannerImg.png" />
          </BannerImageBox>
        }
      >
        <CarouselSlide data={debateKeywordsData?.issueKeyword} method="issue" />
        <CarouselSlide data={debateKeywordsData?.balanceKeyword} method="balance" />
        <CarouselSlide data={debateKeywordsData?.prosConsKeyword} method="proscons" />
      </Carousel>
    </MainCarouselLayout>
  )
}

export default React.memo(MainCarousel)
