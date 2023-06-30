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

const LIMIT = 4

const ORDER_OPTION: {
  [index: string]: string
} = {
  최신순: 'createdAt',
  조회순: 'hits',
}

interface Props {
  method: 'issue' | 'balance' | 'proscons'
}

const DetailedSerachOptions = ({ method }: Props) => {
  const dispatch = useAppDispatch()
  // const [debateMode, setDebateMode] = useState<'이슈토론' | '밸런스토론' | '찬반토론'>('이슈토론')
  const [debateCategory, setDebateCategory] = useState('자유')
  const [searchText, onChangeSearchText] = useInput('')
  const [selectOption, onChangeselectOption] = useInput<HTMLSelectElement>('최신순')
  const [page] = useState(1)

  useEffect(() => {
    const fetchData = async () => {
      const searchContent = {
        category: debateCategory,
        searchText,
        key: ORDER_OPTION[selectOption],
        limit: LIMIT,
        page,
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
  }, [method, debateCategory, searchText, selectOption, page, dispatch])

  return (
    <div>
      {' '}
      <CategoryBox>
        <h2>토론 분류</h2>

        <DebateMethodList>
          {DebateModeMenus.map((res) => (
            <ModeItem key={`debateModeItems_${res.key}`} isCurrent={res.key === method}>
              <Link href={{ pathname: '/debate-forum', query: { method: res.key } }}>
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
        />
      </CategoryBox>
      <DetailControllBox>
        <SearchBox>
          <NextImageBox styleOption={{ width: new CssRem(1.9), height: new CssRem(1.9) }}>
            <FitNextImage alt="돋보기" src="/img/search.png" />
          </NextImageBox>
          <input placeholder="검색" value={searchText} onChange={onChangeSearchText} />
        </SearchBox>

        <BasicSelect
          value={selectOption}
          onChange={onChangeselectOption}
          styleOption={{ width: new CssRem(10), height: new CssRem(3) }}
        >
          <option value="최신순">최신순</option>
          <option value="추천순">추천순</option>
          <option value="조회순">조회순</option>
        </BasicSelect>
      </DetailControllBox>
    </div>
  )
}

export default DetailedSerachOptions
