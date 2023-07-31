import React from 'react'
import styled from 'styled-components'
import SignupForm from '@components/signup/signupForm'
import { NextImageBtn } from '@styles/commonStyle/buttons'
import FitNextImage from '@components/common/fitNextImage'
import { useRouter } from 'next/router'

const SignUpLayout = styled.div`
  width: 100%;
  min-width: 800px;
`

const SignUpContainor = styled.div`
  width: 450px;
  background-color: white;
  padding: 3rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.whiteGray};
  border-radius: 1rem;
  display: flex;
  flex-direction: column;
  position: absolute;
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
`

const LogoBox = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  ${NextImageBtn} {
    margin: 0 auto;
    width: 25rem;
    height: 6rem;
  }
`

const SignUpPage = () => {
  const router = useRouter()
  return (
    <SignUpLayout>
      <SignUpContainor>
        <LogoBox>
          <NextImageBtn>
            <FitNextImage alt="logo" src="/img/logo.png" onClick={() => router.push('/')} />
          </NextImageBtn>
        </LogoBox>
        <SignupForm />
      </SignUpContainor>
    </SignUpLayout>
  )
}

export default SignUpPage
