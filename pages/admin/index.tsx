import AdminLayout from '@components/common/layouts/adminLayout'
import { loadMyInfo } from '@store/slices/user'
import { wrapper } from '@store/store'
import axios from 'axios'
import React, { ReactElement } from 'react'

const Admin = () => {
  return <>main</>
}

export const getServerSideProps = wrapper.getServerSideProps((store) => async ({ req }) => {
  const cookie = req ? req.headers.cookie : ''
  if (req && cookie) axios.defaults.headers.Cookie = cookie

  await store.dispatch(loadMyInfo())
  return { props: {} }
})

Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Admin
