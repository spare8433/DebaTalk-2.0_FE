import useInput from '@hooks/useInput'
import { useAppDispatch, useAppSelector } from '@store/store'
import { useRouter } from 'next/router'
import React from 'react'
import { logIn } from '@store/slices/user'
import { PrimaryButton, SubButton } from '@styles/commonStyle/buttons'
import { Line } from '@styles/commonStyle'
import FitNextImage from '@components/common/fitNextImage'
import Link from 'next/link'
import { FindPwBox, LoginBox, LoginInput, SocialImgBtn, SubBox } from './style'

const LoginForm = () => {
  const router = useRouter()
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const [userId, onChangeUserId] = useInput('')
  const [password, onChangePassword] = useInput('')

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(logIn({ userId, password })).unwrap()
      if (user.myData && user.myData.role > 0) router.push('/admin')
      router.push('/')
    } catch (error) {
      alert(`로그인 실패`)
    }
  }

  return (
    <LoginBox>
      <h2>로그인</h2>
      <form onSubmit={onSubmitForm}>
        <LoginInput type="text" placeholder="아이디" value={userId} onChange={onChangeUserId} />
        <LoginInput
          type="password"
          placeholder="비밀번호"
          value={password}
          onChange={onChangePassword}
        />
        <PrimaryButton type="submit">로그인</PrimaryButton>
      </form>

      <FindPwBox>
        <Link href="/find-id">아이디 찾기</Link> <span>/</span>
        <Link href="/find-id">비밀번호 찾기</Link>
      </FindPwBox>

      <Line />
      <SubBox>
        <>
          <SocialImgBtn>
            <FitNextImage alt="facebook" src="/img/facebook.png" priority />
          </SocialImgBtn>
          <SocialImgBtn>
            <FitNextImage alt="google" src="/img/google-plus.png" priority />
          </SocialImgBtn>
          <SocialImgBtn>
            <FitNextImage alt="kakao-talk" src="/img/kakao-talk.png" priority />
          </SocialImgBtn>
        </>
        <SubButton onClick={() => router.push('/signup')}>회원가입</SubButton>
      </SubBox>
    </LoginBox>
  )
}

export default LoginForm
