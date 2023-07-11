import { Line } from '@styles/commonStyle'
import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { CssRem } from 'types/customCssType'
import DebateContentList from '@components/debate-topic-board/debateContentList'
import DetailedSerachOptions from '@components/debate-topic-board/detailedSearchOptions'
import WritePostStickyButton from '@components/debate-topic-board/writePostStickyButton'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { wrapper } from '@store/store'
import axios from 'axios'
import { loadMyInfo } from '@store/slices/user'
import { getDebateTopicPosts } from '@store/slices/debateTopicPosts'

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

const IndexContainor = styled.div`
  width: 100%;
`

const DebateTopicBoardContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
  padding: 2rem 0;
`

const PrColorLine = styled(Line)`
  background-color: ${({ theme }) => theme.colors.main};
`

interface Props {
  page: string
  limit: number
}

const DebateTopicBoardPage = ({ page, limit }: Props) => (
  <IndexContainor>
    <HeaderInfoBox>
      <p>
        토론 할만한 주제들을 자유롭게 작성하고 살펴보는 <span>주제 선정 게시판</span> 입니다 또한
        좋은 주제들은 선정하여 업로드 됩니다.
        <br />
        공지사항을 참고하여 이용시 규칙과 에티켓을 숙지하고 준수해주시면 감사하겠습니다.
      </p>
      <PrColorLine styleOption={{ width: new CssRem(25) }} />
    </HeaderInfoBox>
    <DebateTopicBoardContainor>
      {/* 검색 옵션 박스 */}
      <DetailedSerachOptions page={page} limit={limit} />

      {/* 콘텐츠 리스트 */}
      <DebateContentList page={page} limit={limit} />
    </DebateTopicBoardContainor>

    <WritePostStickyButton />
  </IndexContainor>
)

DebateTopicBoardPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const { page, redirectMsg } = query
  if (typeof page === 'string') {
    const { cookie } = req.headers
    const limit = 8
    try {
      if (cookie) {
        // 서버쪽 쿠키 공유 버그
        axios.defaults.headers.Cookie = cookie
        await store.dispatch(loadMyInfo()).unwrap()
      }
      await store.dispatch(getDebateTopicPosts({ limit, page })).unwrap()
    } catch (error) {
      console.log(error)
      return {
        redirect: {
          destination: `/debate-topic-board?page=1&redirectMsg=${encodeURIComponent(
            '데이터를 불러오지 못했습니다.',
          )}`,
          permanent: true,
        },
      }
    }
    // redirected 인 경우
    if (redirectMsg && typeof redirectMsg === 'string')
      return { props: { page, limit, redirectMsg } }

    return { props: { page, limit } }
  }
  return {
    redirect: {
      destination: `/debate-topic-board?page=1`,
      permanent: true,
    },
  }
})

export default DebateTopicBoardPage
