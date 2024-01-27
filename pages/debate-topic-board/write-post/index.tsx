import React, { ReactElement, useEffect } from 'react'
import styled from 'styled-components'
import { useAppSelector, wrapper } from '@store/store'
import axios from 'axios'
import { loadMyInfo } from '@store/slices/user'
import WriteDebateTopicForm from '@components/debate-topic-board/write-post'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'

const IndexContainor = styled.div`
  width: 100%;
  background-color: white;
  padding: 2rem 0 5rem;
`

const WirePostContainor = styled.div`
  width: 1160px;
  margin: 0 auto;
`

const WriteDebateTopicPostPage = () => {
  const user = useAppSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (user.loadMyInfoError !== null) {
      alert('사용자 정보를 정상적으로 불러오지 못했습니다. 다시 로그인 부탁드립니다.')
      router.push('/login')
    }
  }, [router, user.loadMyInfoError])

  return (
    <IndexContainor>
      <WirePostContainor>
        <WriteDebateTopicForm />
      </WirePostContainor>
    </IndexContainor>
  )
}

WriteDebateTopicPostPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookies = new Cookies(req.headers.cookie)
  const connectId = cookies.get('connect.sid')

  if (connectId && connectId !== '') {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = `connect.sid=${connectId}`
    await store.dispatch(loadMyInfo())
  }

  return {
    redirect: {
      destination: `/login`,
      permanent: true,
    },
  }
})

export default WriteDebateTopicPostPage
