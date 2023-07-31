import React, { ReactElement, useEffect } from 'react'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { wrapper } from '@store/store'
import DebateContentList from '@components/debate-forum/debateContentList'
import { loadMyInfo } from '@store/slices/user'
import axios from 'axios'
import { getIssueDebatePosts } from '@store/slices/issueDebatePosts'
import styled from 'styled-components'
import { CssRem } from 'types/customCssType'
import DetailedSerachOptions from '@components/debate-forum/detailedSearchOptions'
import { Line } from '@styles/commonStyle'
import { getBalanceDebatePosts } from '@store/slices/balanceDebatePosts'
import { getProsConsDebatePosts } from '@store/slices/prosConsDebatePosts'

const IndexContainor = styled.div`
  width: 100%;
`
const ContentContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
  padding: 2rem 0;
`

const HeaderInfoBox = styled.div`
  width: 100%;
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
      font-weight: 700;
    }
  }
`

const PrColorLine = styled(Line)`
  background-color: ${({ theme }) => theme.colors.main};
`

interface Props {
  method: 'issue' | 'balance' | 'proscons'
  searchText?: string | null
  page?: number | null
  limit?: number | null
  redirectMsg?: string
}

const DebateForumPage = ({ method, searchText, page, limit, redirectMsg }: Props) => {
  useEffect(() => {
    if (redirectMsg) alert(redirectMsg)
  }, [redirectMsg])
  // if (redirectMsg) alert(redirectMsg)
  return (
    <IndexContainor>
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
      <ContentContainor>
        {/* 검색 옵션 박스 */}
        <DetailedSerachOptions method={method} page={page} limit={limit} searchText={searchText} />

        {/* 콘텐츠 리스트 */}
        <DebateContentList method={method} page={page} limit={limit} searchText={searchText} />
      </ContentContainor>
    </IndexContainor>
  )
}

DebateForumPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const { method, page, redirectMsg, searchText } = query
  const { cookie } = req.headers
  const limit = 6

  if (cookie) {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = cookie
    await store.dispatch(loadMyInfo())
  }

  // redirected 인 경우
  if (redirectMsg && typeof redirectMsg === 'string') return { props: { redirectMsg } }

  // 잘못된 쿼리 타입
  if (
    Array.isArray(searchText) ||
    Array.isArray(page) ||
    Array.isArray(method) ||
    (method && !['issue', 'balance', 'proscons'].includes(method))
  )
    return { notFound: true }

  try {
    const getDebatePostsParam = { searchText, limit, page: Number(page) }

    switch (method) {
      case 'issue':
        await store.dispatch(getIssueDebatePosts(getDebatePostsParam)).unwrap()
        break
      case 'balance':
        await store.dispatch(getBalanceDebatePosts(getDebatePostsParam)).unwrap()
        break
      case 'proscons':
        await store.dispatch(getProsConsDebatePosts(getDebatePostsParam)).unwrap()
        break
      default:
        await store.dispatch(getIssueDebatePosts(getDebatePostsParam)).unwrap()
        break
    }
  } catch (error) {
    const msg = encodeURIComponent('데이터를 불러오지 못했습니다.')
    return {
      redirect: {
        destination: `/debate-forum?redirectMsg=${msg}`,
        permanent: true,
      },
    }
  }

  return {
    props: {
      method: method ?? 'issue',
      searchText: searchText ?? null,
      page: page ?? null,
      limit: limit ?? null,
    },
  }
})

export default DebateForumPage
