import FitNextImage from '@components/common/fitNextImage'
import ChangePasswordForm from '@components/find-pw/changePasswordForm'
import CheckAuthCodeForm from '@components/find-pw/checkAuthCodeForm'
import SendAuthCodeForm from '@components/find-pw/sendAuthCodeForm'
import { clearFindPwUserData } from '@store/slices/user'
import { useAppDispatch, useAppSelector } from '@store/store'
import { NextImageBtn } from '@styles/commonStyle/buttons'
import { useRouter } from 'next/router'
import React, { useEffect } from 'react'
import styled from 'styled-components'

const FindPwLayout = styled.div`
  width: 100%;
  min-width: 800px;
`

const FindPwContainor = styled.div`
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
    // const handleBeforeUnload = (e: BeforeUnloadEvent) => {
    //   e.preventDefault()
    //   alert('test')
    //   dispatch(clearFindPwUserData())
    //   e.returnValue =
    //     '페이지를 벗어나면 처음부터 다시 시도해야합니다 정말로 페이지를 벗어나시겠습니까?'
    // }
    // window.addEventListener('beforeunload', handleBeforeUnload)

    // return () => {
    //   window.removeEventListener('beforeunload', handleBeforeUnload)
    // }

    // const handleRouteChangeStart = (url) => {
    //   const msg = '페이지를 벗어나면 처음부터 다시 시도해야합니다 정말로 페이지를 벗어나시겠습니까?'
    //   if (window.confirm(msg)) {
    //     dispatch(clearFindPwUserData())
    //   } else {
    //     router.events.emit('routeChangeError') // 취소를 선택하면 페이지 전환을 취소
    //     router.
    //     throw 'routeChange aborted'
    //   }
    // }

    // router.events.on('routeChangeStart', handleRouteChangeStart)

    return () => {
      dispatch(clearFindPwUserData())
    }
  }, [dispatch])

  return (
    <FindPwLayout>
      <FindPwContainor>
        <LogoBox>
          <NextImageBtn>
            <FitNextImage
              alt="logo"
              src="/img/logo.png"
              onClick={() => router.push('/')}
              priority
            />
          </NextImageBtn>
        </LogoBox>
        {/* 사용자 정보 입력 및 인증 코드 발송 폼 */}
        {!user.getAuthCodeDone && !user.findUserData && <SendAuthCodeForm />}

        {/* 인증 코드 발송 이후 인증코드 확인 폼 */}
        {!user.checkAuthCodeDone && user.findUserData && <CheckAuthCodeForm />}

        {/* 비밀번호 변경 폼 */}
        {user.checkAuthCodeDone && user.findUserData && <ChangePasswordForm />}
      </FindPwContainor>
    </FindPwLayout>
  )
}

export default FindIdPage
