import useInput from '@hooks/useInput'
import { getIntegrateDebatePosts } from '@store/slices/debatePosts'
import { useAppDispatch } from '@store/store'
import React, { useCallback } from 'react'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem } from 'types/customCssType'
import { MainSearchBox } from './style'
import FitNextImage from '../fitNextImage'

type WrapperProps = {
  searchText: string
}

const MainSearch = ({ searchText }: WrapperProps) => {
  const dispatch = useAppDispatch()
  const [text, changeText] = useInput(searchText)

  const intergrateSearch = useCallback(() => {
    try {
      dispatch(getIntegrateDebatePosts()).unwrap()
    } catch (error) {
      console.log(error)
    }
  }, [dispatch])

  return (
    <MainSearchBox>
      <NextImageBox styleOption={{ width: new CssRem(1.9), height: new CssRem(1.9) }}>
        <FitNextImage alt="돋보기" src="/img/search.png" />
      </NextImageBox>
      <form onSubmit={intergrateSearch}>
        <input
          type="text"
          onChange={changeText}
          placeholder="관심있는 내용을 검색해보세요"
          value={text}
        />
      </form>
    </MainSearchBox>
  )
}

export default MainSearch
