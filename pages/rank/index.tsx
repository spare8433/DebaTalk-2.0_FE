import HeaderFooterLayout from '@components/common/layouts/headerFooterLayout'
import RankContents from '@components/rank'
import { loadMyInfo } from '@store/slices/user'
import { getUsersInfo } from '@store/slices/users'
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

const RankingPage = () => {
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
      <RankContents />
    </IndexContainor>
  )
}

RankingPage.getLayout = function getLayout(page: ReactElement) {
  return <HeaderFooterLayout>{page}</HeaderFooterLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const { cookie } = req.headers

  if (cookie) {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = cookie
    await store.dispatch(loadMyInfo())
  }

  try {
    await store.dispatch(getUsersInfo({ limit: 10, key: 'level' })).unwrap()
  } catch (error) {
    return { notFound: true }
  }

  return { props: {} }
})

export default RankingPage
