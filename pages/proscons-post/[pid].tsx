import React, { ReactElement } from 'react'
import { wrapper } from '@store/store'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import axios from 'axios'
import { loadMyInfo } from '@store/slices/user'
import { getProsConsDebatePost } from '@store/slices/prosConsDebatePost'
import ProsConsPostDetailContent from '@components/proscons-post/postDetailContent'
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

const ProsConsPage = ({ pid }: Props) => (
  <IndexContainor>
    <ProsConsPostDetailContent pid={pid} />
  </IndexContainor>
)

ProsConsPage.getLayout = function getLayout(page: ReactElement) {
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
      await store.dispatch(getProsConsDebatePost(pid)).unwrap()
    } catch (error) {
      console.log(error)
      return { notFound: true }
    }
    return { props: { pid } }
  }
  return { notFound: true }
})

export default ProsConsPage
