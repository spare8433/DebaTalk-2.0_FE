import useInput from '@hooks/useInput'
import { getIntegrateDebatePosts } from '@store/slices/debatePosts'
import { useAppDispatch } from '@store/store'
import { ImgBox } from '@styles/commonStyle'
import React, { useCallback } from 'react'
import { MainSearchBox } from './style'

type WrapperProps = {
	searchText: string;
}

const MainSearch = ({searchText}:WrapperProps) => {
  const dispatch = useAppDispatch()
  const [text, changeText] = useInput(searchText)

  const intergrateSearch = useCallback(() => {
    try {
      dispatch(getIntegrateDebatePosts()).unwrap()
    } catch (error) {
      console.log(error);
    }
  }, [text])

  return (
    <>
      <MainSearchBox>
        <ImgBox><img alt='돋보기' src='./img/search.png'></img></ImgBox>
        <form onSubmit={intergrateSearch}>
          <input 
            onChange={changeText} 
            placeholder='관심있는 내용을 검색해보세요'
          >
            {text}
          </input>
        </form>
         
      </MainSearchBox>
    </>
  )
}

export default MainSearch
