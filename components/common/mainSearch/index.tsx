import useInput from '@hooks/useInput'

import React, { useCallback } from 'react'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem } from 'types/customCssType'
import { useRouter } from 'next/router'
import { MainSearchBox } from './style'
import FitNextImage from '../fitNextImage'

const MainSearch = () => {
  const router = useRouter()
  const { searchText } = router.query
  const [text, changeText] = useInput(typeof searchText === 'string' ? searchText : '')

  const intergrateSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      router.push({ pathname: '/integrate-search', query: { searchText: text } })
    },
    [router, text],
  )

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
