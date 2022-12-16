import React, { useState, useEffect, useRef, ReactElement, useCallback } from 'react'
import styled from 'styled-components'
import Carousel from '@components/common/carousel'
import { useAppDispatch, useAppSelector } from '@store/store'
import { ReducerStates } from '@store/rootReducer'
import { Slide } from '@styles/pages/home.style'
import Link from 'next/link'
import { debateKeywordData } from '@store/slices/debatePosts'
import { AppLayout } from '@styles/commonStyle'

const Keyword = styled.div`
  width: 100%;
  margin: 20px 0;
  a{
    font-size: 28px;
    font-weight: 600;
    color: ${({theme})=> theme.colors.gray_1};
    font-weight: 500;
    &:hover{
      font-weight: 600;
      color: #000;
    }
  }
  span{
    color: ${({theme})=> theme.colors.gray_3};
    font-size: 16px;
    align-self: center;
  }
`

const BannerImg = styled.div`
  img {
    opacity: 0.5;
  }
  position: absolute;
  right: 50px;
  bottom: 0;
  width: auto;
`
const MainCarousel = () => {
  const debateKeywordsData = useAppSelector((state:ReducerStates) => state.debatePosts.debateKeywordsData)
  const test = useRef<HTMLDivElement>(null)

  const option ={
    height: '360',
  } 
  const makeSlide = useCallback((data:debateKeywordData[],path:string) => {
    return(
      <Slide>
        {data.map((res,index)=> {
          return <Keyword key={res.id + index}>
            <Link href={{
              pathname: `/debate-forum/${path}/[pid]`,
              query: { pid: res.id }
            }}>
              <a>{res.title}<span> &nbsp;-&nbsp; {res.category}</span></a>
            </Link>
          </Keyword> 
        })}
      </Slide>
    )
  }, [])


  return (
    <AppLayout ref={test}> 
      <Carousel 
        option={option}
        banner={<BannerImg><img alt='debatePeople' src='./img/mainBannerImg.png'></img></BannerImg>}
      >
        {debateKeywordsData !== null ? makeSlide(debateKeywordsData!.issueKeyword, 'issue-post') : <></>}
        {debateKeywordsData !== null ? makeSlide(debateKeywordsData!.balanceKeyword, 'balance-post') : <></>}
        {debateKeywordsData !== null ? makeSlide(debateKeywordsData!.prosConsKeyword, 'prosCons-post') : <></>}
        {/* {contents !== undefined ? contents.map(res => res) : <></>} */}
      </Carousel>
    </AppLayout>

    
  )
}

export default React.memo(MainCarousel)