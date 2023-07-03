import React from 'react'
import styled from 'styled-components'
import MainSearch from '@components/common/mainSearch'
import { SmallBanner } from '@components/common/smallBanner'
import SearchedDebatePost from '@components/integrate-search/searchedDebatePost'
import { wrapper } from '@store/store'
import { getIntegratedDebatePosts } from '@store/slices/debatePosts'
import { loadMyInfo } from '@store/slices/user'
import axios from 'axios'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'

const IndexContainor = styled.div`
  width: 100%;
`
const ContentContainor = styled.div`
  width: 1160px;
  margin: 0 auto 4rem;
`

// const ContentHeader = styled.div`
//   background-color: white;
//   padding: 15px 50px;
//   border-radius: 0.8rem;
//   margin-bottom: 16px;
//   box-shadow: rgba(99, 99, 99, 0.3) 0 0.2rem 0.8rem 0;
// `
const SearchedTextLine = styled.div`
  margin: 24px 10px 16px;
`
// const CategoryItem = styled.a<{ value: string }>`
//   font-size: 1.6rem;
//   font-weight: 500;
//   margin-right: 80px;
// `

interface Props {
  searchText: string
}

const TotalSearchPage = ({ searchText }: Props) => {
  // const [searchCategory, setSearchCategory] = useState<
  //   '밸런스토론' | '이슈토론' | '찬반토론' | '전체'
  // >('전체')

  return (
    <IndexContainor>
      <SmallBanner />
      <ContentContainor>
        <MainSearch />

        <SearchedTextLine>{`${searchText ?? ''} 으로 검색한 결과입니다.`}</SearchedTextLine>

        {/* <ContentHeader>
          <NavLinkList
            setValue={setSearchCategory}
            value={searchCategory}
            category="searchCategory"
            items={DebateModeMenus.map((res, index) => (
              <CategoryItem key={`debateCategoryItems_${index + 1}`} value={res.value}>
                {res.value}
              </CategoryItem>
            ))}
          >
            <CategoryItem value="전체">전체</CategoryItem>
          </NavLinkList>
        </ContentHeader> */}

        <SearchedDebatePost />
      </ContentContainor>
    </IndexContainor>
  )
}

TotalSearchPage.getLayout = function getLayout(page: React.ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const { searchText } = query

  if (typeof searchText === 'string') {
    const { cookie } = req.headers

    try {
      if (cookie) {
        // 서버쪽 쿠키 공유 버그
        axios.defaults.headers.Cookie = cookie
        await store.dispatch(loadMyInfo()).unwrap
      }
      await store.dispatch(getIntegratedDebatePosts({ searchText })).unwrap()
    } catch (error) {
      console.log(error)
      return { notFound: true }
    }
    return { props: { searchText } }
  }
  return { notFound: true }
})

export default TotalSearchPage
