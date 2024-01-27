import React, { useEffect } from 'react'
import styled from 'styled-components'
import MainSearch from '@components/common/mainSearch'
// import { SmallBanner } from '@components/common/smallBanner'
import SearchedDebatePost from '@components/integrate-search/searchedDebatePost'
import { wrapper } from '@store/store'
import { getIntegratedDebatePosts } from '@store/slices/debatePosts'
import { loadMyInfo } from '@store/slices/user'
import axios from 'axios'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import Cookies from 'universal-cookie'

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
  font-size: 1.4rem;
`
// const CategoryItem = styled.a<{ value: string }>`
//   font-size: 1.6rem;
//   font-weight: 500;
//   margin-right: 80px;
// `

interface Props {
  searchText?: string | null
  page?: number | null
  limit?: number | null
  redirectMsg?: string
}

const TotalSearchPage = ({ searchText, page, limit, redirectMsg }: Props) => {
  // const [searchCategory, setSearchCategory] = useState<
  //   '밸런스토론' | '이슈토론' | '찬반토론' | '전체'
  // >('전체')
  useEffect(() => {
    if (redirectMsg) alert(redirectMsg)
  }, [redirectMsg])

  return (
    <IndexContainor>
      <ContentContainor>
        <MainSearch page={page} limit={limit} searchText={searchText} />

        <SearchedTextLine>{`"${searchText ?? ''}" 으로 검색한 결과입니다.`}</SearchedTextLine>

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

        <SearchedDebatePost page={page} limit={limit} searchText={searchText} />
      </ContentContainor>
    </IndexContainor>
  )
}

TotalSearchPage.getLayout = function getLayout(page: React.ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const { searchText, page, redirectMsg } = query
  const limit = 8
  const cookies = new Cookies(req.headers.cookie)
  const connectId = cookies.get('connect.sid')

  if (connectId && connectId !== '') {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = `connect.sid=${connectId}`
    await store.dispatch(loadMyInfo())
  }

  // redirected 인 경우
  if (typeof redirectMsg === 'string') return { props: { redirectMsg } }

  // 잘못된 쿼리 타입
  if (Array.isArray(searchText) || Array.isArray(page)) return { notFound: true }

  try {
    await store
      .dispatch(getIntegratedDebatePosts({ searchText, page: Number(page), limit }))
      .unwrap()
  } catch (error) {
    const msg = encodeURIComponent('데이터를 불러오지 못했습니다.')
    return {
      redirect: {
        destination: `/integrate-search?redirectMsg=${msg}`,
        permanent: true,
      },
    }
  }
  return { props: { searchText: searchText ?? null, page: page ?? null, limit: limit ?? null } }
})

export default TotalSearchPage
