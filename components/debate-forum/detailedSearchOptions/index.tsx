import React, { useEffect, useState } from 'react'
import NavLinkList from '@components/common/navLinkList'
import { useAppDispatch } from '@store/store'
import useInput from '@hooks/useInput'
import { getIssueDebatePosts } from '@store/slices/issueDebatePosts'
import { getBalanceDebatePosts } from '@store/slices/balanceDebatePosts'
import { getProsConsDebatePosts } from '@store/slices/prosConsDebatePosts'
import { DebateCategoryMenus, DebateModeMenus } from '@data/staticData'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { BasicSelect } from '@styles/commonStyle/inputs'
import { CssRem } from 'types/customCssType'
import Link from 'next/link'
import {
  CategoryBox,
  CategoryItem,
  DebateMethodList,
  DetailControllBox,
  ModeItem,
  SearchBox,
} from './style'

const ORDER_OPTION: {
  [index: string]: string
} = {
  최신순: 'createdAt',
  조회순: 'hits',
}

interface Props {
  method: 'issue' | 'balance' | 'proscons' | null
  searchText?: string | null
  page?: number | null
  limit?: number | null
}

const DetailedSerachOptions = ({ method, searchText, page, limit }: Props) => {
  const dispatch = useAppDispatch()
  const [debateCategory, setDebateCategory] = useState('전체')
  const [currentSearchText, onChangeSearchText] = useInput(searchText ?? '')
  const [selectOption, onChangeselectOption] = useInput<HTMLSelectElement>('최신순')
  const currentPage = page ?? 1
  const currentLimit = limit ?? 6

  useEffect(() => {
    const fetchData = async () => {
      const searchContent = {
        category: debateCategory,
        searchText: currentSearchText,
        key: ORDER_OPTION[selectOption],
        limit: currentLimit,
        page: currentPage,
      }

      switch (method) {
        case 'issue':
          await dispatch(getIssueDebatePosts(searchContent))
          break
        case 'balance':
          await dispatch(getBalanceDebatePosts(searchContent))
          break
        case 'proscons':
          await dispatch(getProsConsDebatePosts(searchContent))
          break
        default:
          break
      }
    }
    fetchData()
  }, [method, debateCategory, currentSearchText, selectOption, dispatch, currentLimit, currentPage])

  return (
    <div>
      <CategoryBox>
        <h2>토론 분류</h2>

        <DebateMethodList>
          {DebateModeMenus.map((res) => (
            <ModeItem key={`debateModeItems_${res.key}`} isCurrent={res.key === method}>
              <Link href={{ pathname: '/debate-forum', query: { method: res.key, page: '1' } }}>
                {res.value}
              </Link>
            </ModeItem>
          ))}
        </DebateMethodList>

        {/* <NavLinkList
          setValue={setDebateMode}
          value={debateMode}
          category="debateMethod"
          items={DebateModeMenus.map((res, index) => (
            <ModeItem key={`debateModeItems_${index + 1}`} value={res}>
              {res}
            </ModeItem>
          ))}
        /> */}

        <h3>카테고리</h3>
        <NavLinkList
          setValue={setDebateCategory}
          value={debateCategory}
          category="debateCategory"
          items={DebateCategoryMenus.map((res, index) => (
            <CategoryItem key={`debateCategoryItems${index + 1}`} value={res}>
              {res}
            </CategoryItem>
          ))}
        >
          <CategoryItem value="전체">전체</CategoryItem>
        </NavLinkList>
      </CategoryBox>
      <DetailControllBox>
        <SearchBox>
          <NextImageBox styleOption={{ width: new CssRem(1.9), height: new CssRem(1.9) }}>
            <FitNextImage alt="돋보기" src="/img/search.png" />
          </NextImageBox>
          <input placeholder="검색" value={currentSearchText} onChange={onChangeSearchText} />
        </SearchBox>

        <BasicSelect
          value={selectOption}
          onChange={onChangeselectOption}
          styleOption={{ width: new CssRem(10), height: new CssRem(3) }}
        >
          <option value="최신순">최신순</option>
          <option value="조회순">조회순</option>
          {/* <option value="추천순">추천순</option> */}
        </BasicSelect>
      </DetailControllBox>
    </div>
  )
}

export default DetailedSerachOptions
