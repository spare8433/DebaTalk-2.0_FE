import React, { ReactElement, useEffect } from 'react'
import AdminLayout from '@components/common/layouts/adminLayout'
import styled from 'styled-components'
import WriteDebatePost from '@components/admin/write-post'
import { useAppSelector, wrapper } from '@store/store'
import axios from 'axios'
import { loadMyInfo } from '@store/slices/user'
import { useRouter } from 'next/router'
import Cookies from 'universal-cookie'

const WritePostLayout = styled.div`
  width: 100%;
  min-width: 800px;
`

const WritePost = () => {
  const user = useAppSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (user.loadMyInfoError !== null) {
      alert('사용자 정보를 정상적으로 불러오지 못했습니다. 다시 로그인 부탁드립니다.')
      router.push('/login')
    }
  }, [router, user.loadMyInfoError])

  return (
    <WritePostLayout>
      <WriteDebatePost />
    </WritePostLayout>
  )
}

WritePost.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookies = new Cookies(req.headers.cookie)
  const connectId = cookies.get('connect.sid')

  if (connectId && connectId !== '') {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = `connect.sid=${connectId}`
    await store.dispatch(loadMyInfo())

    return { props: {} }
  }

  return {
    redirect: {
      destination: `/login`,
      permanent: true,
    },
  }
})

export default WritePost
