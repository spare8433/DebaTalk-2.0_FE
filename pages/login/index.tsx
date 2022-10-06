import React from 'react'
import styled from 'styled-components';
import useInput from '@hooks/useInput';
import { Containor, ImgBox, InputBox, Line, MainButton, SubButton} from '@styles/commonStyle';
import { LoginBox, LoginContainor, LogoBox, SubBox } from './styles';
import { useAppDispatch } from '@store/store';
import { useRouter } from 'next/router';
import { logIn } from '@store/slices/user';
import { AxiosError } from 'axios';


const LoginPage = () => {
  const router = useRouter()

  const [userId, onChangeUserId] = useInput('')
  const [password, onChangePassword] = useInput('')
  
  const dispatch = useAppDispatch()
  
  const onSubmitForm = async (e:React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(logIn({userId,password})).unwrap()
      return router.push('/')
    } catch (error) {
      return alert('로그인 실패 : ' + (error as Error).message)
    }
  }

  return (
    <Containor width='800'>
      <LoginContainor>
        <LogoBox><img alt='logo' src='./img/logo.png'></img></LogoBox>
        <LoginBox>
          <h2>로그인</h2>
          <form onSubmit={onSubmitForm}>
            <InputBox width='350' height='40'><input placeholder='아이디' value={userId} onChange={onChangeUserId}/></InputBox>
            <InputBox width='350' height='40'><input type='password' placeholder='비밀번호' value={password} onChange={onChangePassword}/></InputBox>
            <MainButton width='350' height='40' type='submit' fontSize='18'>로그인</MainButton>
          </form>
          <p>아이디 / 비밀번호 찾기</p>
          <Line width='350' height='1'></Line>
          <SubBox>
            <>
              <ImgBox width='40' shadow={true}><img alt='facebook' src='./img/facebook.png'></img></ImgBox>
              <ImgBox width='40' shadow={true}><img alt='google' src='./img/google-plus.png'></img></ImgBox>
              <ImgBox width='40' shadow={true}><img alt='kakao-talk' src='./img/kakao-talk.png'></img></ImgBox>
            </>
            <SubButton width='160' height='40' fontSize='16' onClick={() => router.push('/signup')}>회원가입</SubButton>
          </SubBox>                    
        </LoginBox>
      </LoginContainor>
    </Containor>
  )
}

export default LoginPage
