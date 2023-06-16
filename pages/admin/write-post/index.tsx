import React, { ReactElement } from 'react'
import AdminLayout from '@components/common/layouts/adminLayout'
import styled from 'styled-components'
import WriteDebatePost from '@components/admin/write-post'

const WirePostLayout = styled.div`
  width: 100%;
  min-width: 800px;
`

const WritePost = () => (
  <WirePostLayout>
    <WriteDebatePost />
  </WirePostLayout>
)

WritePost.getLayout = function getLayout(page: ReactElement) {
  return <AdminLayout>{page}</AdminLayout>
}

export default WritePost
