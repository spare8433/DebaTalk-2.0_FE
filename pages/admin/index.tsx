import AdminLayout from '@components/common/layouts/adminLayout'
import { AppLayout } from '@styles/commonStyle'
import React, { ReactElement } from 'react'

const Admin = () => {
  return (
    <>hi</>
  )
}

Admin.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default Admin
