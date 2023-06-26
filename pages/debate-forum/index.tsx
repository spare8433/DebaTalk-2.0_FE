import React, { ReactElement, useEffect, useState } from 'react'
import NavLinkList from '@components/common/navLinkList'
import { DebateCategoryMenus, DebateModeMenus } from '@data/staticData'
import {
  CategoryBox,
  CategoryItem,
  DebateForumBox,
  DebateForumContainor,
  DetailControllBox,
  ModeItem,
  PrColorLine,
} from '@styles/pages/debate-forum/index.style'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { useAppDispatch, wrapper } from '@store/store'
import DebateContentBox from '@components/debate-forum/debateContentList'
import useInput from '@hooks/useInput'
import { getBalanceDebatePosts } from '@store/slices/balanceDebatePosts'
import { loadMyInfo } from '@store/slices/user'
import axios from 'axios'
import { getIssueDebatePosts } from '@store/slices/issueDebatePosts'
import styled from 'styled-components'
import { BasicSelect } from '@styles/commonStyle/inputs'
import { CssRem } from 'types/customCssType'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { getProsConsDebatePosts } from '@store/slices/prosConsDebatePosts'

const HeaderInfoBox = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  background-color: white;
  font-size: 1.6rem;
  text-align: center;
  margin: 1rem 0;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
  p {
    font-weight: 400;
    line-height: 1.8;
    padding: 1rem 0 2rem;
    span {
      margin: 0 0.5rem;
      font-size: 2.2rem;
      color: ${({ theme }) => theme.colors.main};
      font-weight: 600;
    }
  }
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

const LIMIT = 4

const ORDER_OPTION: {
  [index: string]: string
} = {
  최신순: 'createdAt',
  조회순: 'hits',
}

const DebateForumPage = () => {
  const dispatch = useAppDispatch()
  const [debateMode, setDebateMode] = useState<'이슈토론' | '밸런스토론' | '찬반토론'>('이슈토론')
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

      switch (debateMode) {
        case '이슈토론':
          await dispatch(getIssueDebatePosts(searchContent))
          break
        case '밸런스토론':
          await dispatch(getBalanceDebatePosts(searchContent))
          break
        case '찬반토론':
          await dispatch(getProsConsDebatePosts(searchContent))
          break
        default:
          break
      }
    }
    fetchData()
  }, [debateMode, debateCategory, searchText, selectOption, page, dispatch])

  return (
    <DebateForumContainor>
      <DebateForumBox>
        <HeaderInfoBox>
          <p>
            다양한 토론주제들과 여러의견이 존재하는 <span>토론 게시판</span>
            입니다 자유로운 의견교환 및 토론을 즐기세요
            <br />
            과도한 분쟁을 유발하거나 거래글, 광고글, 음란물, 비방, 욕설, 정치관련 등등 부적절한 언행
            시 제재 대상이 될 수 있습니다.
            <br />
            {/* 자세한 내용은 공지사항을 참고하여 규칙과 에티켓을 숙지하고 준수해주시면 감사하겠습니다. ^_^ */}
          </p>
          <PrColorLine styleOption={{ width: new CssRem(25), height: new CssRem(0.2) }} />
        </HeaderInfoBox>

        <CategoryBox>
          <h2>토론 분류</h2>
          <NavLinkList
            setValue={setDebateMode}
            value={debateMode}
            category="debateMethod"
            items={DebateModeMenus.map((res, index) => (
              <ModeItem key={`debateModeItems_${index + 1}`} value={res}>
                {res}
              </ModeItem>
            ))}
          />

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

        <DebateContentBox method={debateMode} />
      </DebateForumBox>
    </DebateForumContainor>
  )
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : ''

  // 서버쪽 쿠키 공유 버그
  if (req && cookie) axios.defaults.headers.Cookie = cookie

  await store.dispatch(getIssueDebatePosts({ limit: 4 }))
  await store.dispatch(loadMyInfo())
  return { props: {} }
})

DebateForumPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export default DebateForumPage
