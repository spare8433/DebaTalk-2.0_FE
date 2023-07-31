import React, { useEffect, useState } from 'react'
import FitNextImage from '@components/common/fitNextImage'
import useInput from '@hooks/useInput'
import { BasicSelect } from '@styles/commonStyle/inputs'
import NavLinkList from '@components/common/navLinkList'
import { DebateCategoryMenus } from '@data/staticData'
import styled from 'styled-components'
import { CssRem } from 'types/customCssType'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { getDebateTopicPosts } from '@store/slices/debateTopicPosts'
import { useAppDispatch } from '@store/store'

const CategoryItem = styled.a<{ value: string }>`
  font-size: 18px;
  margin-right: 30px;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
`

const CategoryBox = styled.div`
  h2 {
    font-size: 2.6rem;
    margin: 32px 0 24px;
    font-weight: 500;
  }
`

const DetailControllBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 16px;
`

export const SearchBox = styled.div`
  background-color: white;
  width: 280px;
  box-sizing: border-box;
  border: ${({ theme }) => theme.colors.gray} 0.1rem solid;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  height: 3.2rem;
  ${NextImageBox} {
    /* margin: 0 8px; */
    margin-left: 1rem;
  }
  input {
    color: ${({ theme }) => theme.colors.deepGray};
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0 1.2rem;
    outline: none;
    height: 100%;
    background: none;
    font-size: 1.6rem;
    font-weight: 400;
  }
`

const ORDER_OPTION: {
  [index: string]: string
} = {
  최신순: 'createdAt',
  조회순: 'hits',
}

interface Props {
  searchText?: string | null
  page?: number | null
  limit?: number | null
}
const DetailedSerachOptions = ({ page, limit, searchText }: Props) => {
  const dispatch = useAppDispatch()
  const [debateCategory, setdebateCategory] = useState('전체')
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
      await dispatch(getDebateTopicPosts(searchContent))
    }
    fetchData()
  }, [debateCategory, currentSearchText, selectOption, dispatch, currentLimit, currentPage])

  return (
    <div>
      <CategoryBox>
        <h2>카테고리</h2>

        <NavLinkList
          category="debateCategory"
          value={debateCategory}
          setValue={setdebateCategory}
          items={DebateCategoryMenus.map((res, index) => (
            <CategoryItem key={`debateCategoryItems_${index}${1}`} value={res}>
              {res}
            </CategoryItem>
          ))}
        >
          <CategoryItem key="debateCategoryItems_0" value="전체">
            전체
          </CategoryItem>
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
