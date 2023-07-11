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
  page: string
  limit: number
  redirectMsg?: string
}

const DebateForumPage = ({ method, page, limit, redirectMsg }: Props) => {
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
        <DetailedSerachOptions method={method} page={page} limit={limit} />

        {/* 콘텐츠 리스트 */}
        <DebateContentList method={method} page={page} limit={limit} />
      </ContentContainor>
    </IndexContainor>
  )
}

DebateForumPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const { method, page, redirectMsg } = query
  if (
    typeof method === 'string' &&
    typeof page === 'string' &&
    ['issue', 'balance', 'proscons'].includes(method)
  ) {
    const { cookie } = req.headers
    const limit = 4
    try {
      if (cookie) {
        // 서버쪽 쿠키 공유 버그
        axios.defaults.headers.Cookie = cookie
        await store.dispatch(loadMyInfo()).unwrap()
      }
      switch (method) {
        case 'issue':
          await store.dispatch(getIssueDebatePosts({ limit, page }))
          break
        case 'balance':
          await store.dispatch(getBalanceDebatePosts({ limit, page }))
          break
        case 'proscons':
          await store.dispatch(getProsConsDebatePosts({ limit, page }))
          break
        default:
          break
      }
      await store.dispatch(getIssueDebatePosts({ limit, page })).unwrap()
    } catch (error) {
      console.log(error)
      return {
        redirect: {
          destination: `/debate-forum?method=issue&page=1&redirectMsg=${encodeURIComponent(
            '데이터를 불러오지 못했습니다.',
          )}`,
          permanent: true,
        },
      }
    }
    // redirected 인 경우
    if (redirectMsg && typeof redirectMsg === 'string')
      return { props: { method, page, limit, redirectMsg } }

    return { props: { method, page, limit } }
  }
  return {
    redirect: {
      destination: `/debate-forum?method=issue&page=1`,
      permanent: true,
    },
  }
})

export default DebateForumPage
