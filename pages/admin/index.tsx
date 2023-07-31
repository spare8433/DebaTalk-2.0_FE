import AdminLayout from '@components/common/layouts/adminLayout'
import { loadMyInfo } from '@store/slices/user'
import { useAppSelector, wrapper } from '@store/store'
import axios from 'axios'
import { useRouter } from 'next/router'
import React, { ReactElement, useEffect } from 'react'

const Admin = () => {
  const user = useAppSelector((state) => state.user)
  const router = useRouter()

  useEffect(() => {
    if (user.loadMyInfoError !== null) {
      alert('사용자 정보를 정상적으로 불러오지 못했습니다. 다시 로그인 부탁드립니다.')
      router.push('/login')
    }
  }, [router, user.loadMyInfoError])

  return <>main</>
}

Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const { cookie } = req.headers
  if (cookie) {
    // 서버쪽 쿠키 공유 버그
    axios.defaults.headers.Cookie = cookie
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

export default Admin
