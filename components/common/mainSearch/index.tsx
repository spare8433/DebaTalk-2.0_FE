import { ImgBox } from '@styles/commonStyle'
import React from 'react'
import { MainSearchBox } from './style'

const MainSearch = () => {
  return (
    <>
      <MainSearchBox>
        <ImgBox><img alt='돋보기' src='./img/search.png'></img></ImgBox>
         <input placeholder='관심있는 내용을 검색해보세요'></input>
      </MainSearchBox>
    </>
  )
}

export default MainSearch
