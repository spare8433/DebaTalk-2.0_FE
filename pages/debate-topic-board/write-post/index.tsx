import React, { ReactElement } from 'react'
import styled from 'styled-components'
import { wrapper } from '@store/store'
import axios from 'axios'
import { loadMyInfo } from '@store/slices/user'
import WriteDebateTopicForm from '@components/debate-topic-board/write-post'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'

const IndexContainor = styled.div`
  width: 100%;
  background-color: white;
  padding: 2rem 0 5rem;
`

const WirePostContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
`

const WriteDebateTopicPostPage = () => (
  <IndexContainor>
    <WirePostContainor>
      <WriteDebateTopicForm />
    </WirePostContainor>
  </IndexContainor>
)

WriteDebateTopicPostPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const { cookie } = req.headers

  try {
    if (cookie) {
      // 서버쪽 쿠키 공유 버그
      axios.defaults.headers.Cookie = cookie
      await store.dispatch(loadMyInfo()).unwrap
    }
  } catch (error) {
    console.log(error)
    return { notFound: true }
  }
  return { props: {} }
})

export default WriteDebateTopicPostPage
