import FitNextImage from '@components/common/fitNextImage'
import FindIdForm from '@components/find-id/findIdForm'
import FindIdResult from '@components/find-id/fintIdResult'
import { clearFindIdUserData } from '@store/slices/user'
import { useAppDispatch, useAppSelector } from '@store/store'
import { NextImageBtn } from '@styles/commonStyle/buttons'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const FindIdLayout = styled.div`
  width: 100%;
  min-width: 800px;
`

const FindIdContainor = styled.div`
  width: 450px;
  background-color: white;
  display: flex;
  padding: 3rem 2rem;
  border: 0.1rem solid ${({ theme }) => theme.colors.whiteGray};
  border-radius: 1rem;
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

const FindIdPage = () => {
  const user = useAppSelector((state) => state.user)
  const dispatch = useAppDispatch()
  const router = useRouter()

  useEffect(() => {
    dispatch(clearFindIdUserData)
  }, [dispatch])

  return (
    <FindIdLayout>
      <FindIdContainor>
        <LogoBox>
          <NextImageBtn>
            <FitNextImage
              alt="logo"
              src="/img/logo.png"
              priority
              onClick={() => router.push('/')}
            />
          </NextImageBtn>
        </LogoBox>
        {/* 아이디 찾기 입력 화면 */}
        {!user.findUserIdDone && !user.findUserData && <FindIdForm />}

        {/* 검색된 계정 정보 */}
        {user.findUserIdDone && user.findUserData && <FindIdResult />}
      </FindIdContainor>
    </FindIdLayout>
  )
}

export default FindIdPage
