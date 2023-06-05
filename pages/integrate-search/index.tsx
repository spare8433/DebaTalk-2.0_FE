import React, { useState } from 'react'
import styled from 'styled-components'
import MainSearch from '@components/common/mainSearch'
import { SmallBanner } from '@components/common/smallBanner'
// import SearchedCommunityPost from './SearchedCommunityPost'
import SearchedDebatePost from '@components/integrate-search/searchedDebatePost'
import NavLinkList from '@components/NavLinkList'
import { DebateModeMenus } from '@data/staticData'

const IndexContainor = styled.div`
  width: 100%;
`
const ContentContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
`

const ContentHeader = styled.div`
  background-color: white;
  padding: 15px 50px;
  margin-bottom: 16px;
`
const SearchedTextLine = styled.div`
  margin: 24px 10px 16px;
`
const CategoryItem = styled.a<{ value:string }>`
    margin-right: 80px;
`

const ContentBox = styled.div`
  background-color: white;
  padding: 15px 20px;
`

const TotalSearchPage = () => {
  const [searchCategory, setSearchCategory] = useState('전체');
  return (
    <IndexContainor>
      <SmallBanner />
      <ContentContainor>

        <MainSearch searchText={''} />

        <SearchedTextLine>{`"" 으로 검색한 결과입니다.`}</SearchedTextLine>

        <ContentHeader>

          <NavLinkList
            setValue={setSearchCategory}
            value={searchCategory}
            category="searchCategory"
            items={
              DebateModeMenus.map((res, index) => (
                <CategoryItem key={`debateCategoryItems_${index + 1}`} value={res}>{res}</CategoryItem>
              ))
            }
          >
            {/* {14} */}
          </NavLinkList>

        </ContentHeader>

        {searchCategory === '전체'
          ? (
            <ContentBox>
              {/* <SearchedCommunityPost /> */}
              <SearchedDebatePost />
            </ContentBox>
          )
          : <ContentBox />}

      </ContentContainor>
    </IndexContainor>
  )
}
export default TotalSearchPage
