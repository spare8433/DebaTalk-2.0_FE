import { LessStyleBtn } from '@styles/commonStyle/buttons'
import { useRouter } from 'next/router'
import React, { memo } from 'react'
import styled from 'styled-components'

const IndexContainor = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 10rem 0;

  h1 {
    text-align: center;
    margin-bottom: 5rem;
    font-size: 4rem;
  }
`

const BackButton = styled(LessStyleBtn)`
  font-size: 1.8rem;
`

const Custom404 = () => {
  const router = useRouter()
  return (
    <IndexContainor>
      <h1>404 - 페이지를 찾을 수 없습니다</h1>
      <BackButton onClick={() => router.back()}>{`<< 이전 페이지로 돌아가기`}</BackButton>
    </IndexContainor>
  )
}

export default memo(Custom404)
