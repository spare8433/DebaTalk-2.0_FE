import useInput from '@hooks/useInput'

import React, { useCallback } from 'react'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem } from 'types/customCssType'
import { useRouter } from 'next/router'
import { MainSearchBox } from './style'
import FitNextImage from '../fitNextImage'

interface Props {
  page?: number | null
  limit?: number | null
  searchText?: string | null
}

const MainSearch = ({ page, limit, searchText }: Props) => {
  const router = useRouter()
  const [text, changeText] = useInput(searchText ?? '')
  const currentPage = page ?? 1
  const currentLimit = limit ?? 8

  const intergrateSearch = useCallback(
    (e: React.FormEvent<HTMLFormElement>) => {
      e.preventDefault()
      router.push({
        pathname: '/integrate-search',
        query: { searchText: text, page: currentPage, limit: currentLimit },
      })
    },
    [currentLimit, currentPage, router, text],
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
