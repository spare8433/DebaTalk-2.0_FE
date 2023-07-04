import FitNextImage from '@components/common/fitNextImage'
import { LessStyleBtn } from '@styles/commonStyle/buttons'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const EmptyContentContainor = styled.div`
  width: 100%;
  padding: 10% 3rem;
  display: flex;
  flex-direction: column;
  align-items: center;

  ${NextImageBox} {
    width: 15rem;
    height: 15rem;
    margin-bottom: 2rem;
  }

  h3 {
    margin-bottom: 1rem;
  }

  ${LessStyleBtn} {
    color: ${({ theme }) => theme.colors.main};
    font-weight: 700;
    font-size: 1.8rem;
  }
`

const EmptyContent = () => {
  const router = useRouter()
  return (
    <EmptyContentContainor>
      <NextImageBox>
        <FitNextImage src="/img/mascot.png" alt="mascot-image" />
      </NextImageBox>
      <h3>데이터가 존재하지 않습니다.</h3>
      <LessStyleBtn onClick={() => router.back()}>클릭시 이전페이지로 이동합니다.</LessStyleBtn>
    </EmptyContentContainor>
  )
}

export default EmptyContent
