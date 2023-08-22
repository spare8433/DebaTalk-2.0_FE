import React, { ReactElement, useEffect } from 'react'
import { useAppSelector, wrapper } from '@store/store'
import { getBalanceDebatePost } from '@store/slices/balanceDebatePost'
import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import axios from 'axios'
import { loadMyInfo } from '@store/slices/user'
import BalancePostDetailContent from '@components/balance-post/postDetailContent'
import styled from 'styled-components'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'

const IndexContainor = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 2rem 0;
  background-color: white;
`

interface Props {
  pid: string
}

const BalancePostPage = ({ pid }: Props) => {
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
      <BalancePostDetailContent pid={pid} />
    </IndexContainor>
  )
}

BalancePostPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req, query }) => {
  const { pid } = query
  if (typeof pid !== 'string') return { notFound: true }
  const cookies = new Cookies(req.headers.cookie)
  const connectId = cookies.get('connect.sid')

  if (connectId && connectId !== '') {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = `connect.sid=${connectId}`
    await store.dispatch(loadMyInfo())

    return { props: {} }
  }

  try {
    await store.dispatch(getBalanceDebatePost(pid)).unwrap()
  } catch (error) {
    return { notFound: true }
  }

  return { props: { pid } }
})

export default BalancePostPage
