import React, { ReactElement } from 'react'
import { wrapper } from '@store/store'
import { getBalanceDebatePost } from '@store/slices/balanceDebatePost'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import axios from 'axios'
import { loadMyInfo } from '@store/slices/user'
import BalancePostDetailContent from '@components/balance-post/postDetailContent'
import styled from 'styled-components'

const IndexContainor = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  background-color: white;
`

interface Props {
  pid: string
}

const BalancePostPage = ({ pid }: Props) => (
  <IndexContainor>
    <BalancePostDetailContent pid={pid} />
  </IndexContainor>
)

BalancePostPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const { pid } = query
  if (typeof pid === 'string') {
    const { cookie } = req.headers

    try {
      if (cookie) {
        // 서버쪽 쿠키 공유 버그
        axios.defaults.headers.Cookie = cookie
        await store.dispatch(loadMyInfo()).unwrap
      }
      await store.dispatch(getBalanceDebatePost(pid)).unwrap()
    } catch (error) {
      console.log(error)
      return { notFound: true }
    }
    return { props: { pid } }
  }
  return { notFound: true }
})

export default BalancePostPage
