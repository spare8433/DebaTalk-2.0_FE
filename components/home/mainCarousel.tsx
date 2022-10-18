import React, { useState, useEffect, useRef, ReactElement } from 'react'
import styled from 'styled-components'
import Carousel from '@components/common/carousel'
import { useAppDispatch, useAppSelector } from '@store/store'
import { ReducerStates } from '@store/rootReducer'
import { Slide } from '@styles/pages/home.style'
import Link from 'next/link'

const Keyword = styled.div`
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
  width: 100%;
  margin: 20px 0;
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
  const [contents, setContents] = useState<JSX.Element[]>()
  const dispatch = useAppDispatch()
  const debatePosts = useAppSelector((state:ReducerStates) => state.debatePosts)

  const option ={
    height: '360',
  } 

  useEffect(()=>{
    console.log('check');
    
    const exposedKewordCount = 4;
      
    const setCarousle = async () => {
      
      if (debatePosts.debateKeywordsData === null) return
      const data = debatePosts.debateKeywordsData

      let slidePages:ReactElement[][] = []

      //  키워드 생성
      const titles = data.map((res,index)=> {
        return <Keyword key={res.id + index}>
          <Link href={{
            pathname: '/debate-forum/detail-debatepost/[pid]',
            query: { pid: res.id }
          }}>
            <a>{res.title}<span> &nbsp;-&nbsp; {res.category}</span></a>
          </Link>
        </Keyword> 
      })

      for (let pageNum = 0; pageNum <= Math.floor(data.length / exposedKewordCount) ; pageNum++) {
        slidePages.push(titles.splice(0,exposedKewordCount))
      }

      const result = slidePages.map((res, index) => {
        return <Slide key={'mainSlide_' + index}>
          {res.map((res) => res)}
        </Slide>
      })

      setContents(result)
    } 
    setCarousle()
  },[])
  

  return (
    <Carousel 
      option={option}
      banner={<BannerImg><img alt='debatePeople' src='./img/mainBannerImg.png'></img></BannerImg>}
    >
      {contents !== undefined ? contents.map(res => res) : <></>}
    </Carousel>
  )
}

export default React.memo(MainCarousel)