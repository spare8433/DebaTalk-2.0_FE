import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import DebateTopicPostDetailContent from '@components/debate-topic-post/postDetailContent'
import { getDebateTopicPost } from '@store/slices/debateTopicPost'
import { loadMyInfo } from '@store/slices/user'
import { useAppSelector, wrapper } from '@store/store'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'
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

const DebateTopicPostPage = ({ pid }: Props) => {
  const user = useAppSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (user.loadMyInfoError) {
      alert('사용자 정보를 정상적으로 불러오지 못했습니다. 다시 로그인 부탁드립니다.')
      router.push('/login')
    }
  }, [router, user.loadMyInfoError])
  return (
    <IndexContainor>
      <DebateTopicPostDetailContent pid={pid} />
    </IndexContainor>
  )
}

DebateTopicPostPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const { pid } = query
  if (typeof pid !== 'string') return { notFound: true }

  const { cookie } = req.headers
  if (cookie) {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = cookie
    await store.dispatch(loadMyInfo())
  }

  try {
    await store.dispatch(getDebateTopicPost(pid)).unwrap()
  } catch (error) {
    return { notFound: true }
  }

  return { props: { pid } }
})

export default DebateTopicPostPage
