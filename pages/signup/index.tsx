import React from 'react'
import { Containor, InputBox } from '@styles/commonStyle'
import { SginUpBox, SginUpButton, SginUpContainor } from './style'
import useCheckInput from '@hooks/useCheckInput'
import { useAppDispatch } from '@store/store'
import { signUp } from '@store/slices/user'
import { useRouter } from 'next/router'


const SginUpPage = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  
  const [userId,onChangeUserId,userIdMsg,userIdCheck] = useCheckInput('', 'id')
  const [email,onChangeUserEmail,emailMsg,emailCheck] = useCheckInput('', 'email')
  const [nickname,onChangeUserNickName,nicknameMsg,nicknameCheck] = useCheckInput('', 'nickanme')
  const [password,onChangeUserPw,passwordMsg,passwordCheck] = useCheckInput('', 'password')
  const [rePassword,onChangeUserRePw,rePasswordMsg,rePasswordCheck] = useCheckInput('', 'repassword', password)

  const onSubmitForm = async (e:React.FormEvent) => {
    e.preventDefault()
    try {
      await dispatch(signUp({
        userId,
        email,
        nickname,
        password
      })).unwrap()
      alert("회원가입이 완료되었습니다.")
      return router.push('/')
    } catch (error) {
      return alert('회원가입 실패 : ' + (error as Error).message)
    }
  }

  return (
    <Containor min-width='800'>
      <SginUpContainor>
        <SginUpBox>
          <h2>회원가입</h2>

          <form onSubmit={onSubmitForm}>

            <InputBox width='350' height='40'>
              <input placeholder='아이디' value={userId} onChange={onChangeUserId}/><span>{userIdMsg}</span>
            </InputBox>

            <InputBox width='350' height='40'>
              <input placeholder='이메일' value={email} onChange={onChangeUserEmail}/><span>{emailMsg}</span>
            </InputBox>

            <InputBox width='350' height='40'>
              <input placeholder='닉네임' value={nickname} onChange={onChangeUserNickName}/><span>{nicknameMsg}</span>
            </InputBox>
            
            <InputBox width='350' height='40'>
              <input placeholder='비밀번호' type='password' value={password} onChange={onChangeUserPw}/><span>{passwordMsg}</span>
            </InputBox>

            <InputBox width='350' height='40'>
              <input placeholder='비밀번호 확인' type='password' value={rePassword} onChange={onChangeUserRePw}/><span>{rePasswordMsg}</span>
            </InputBox>
            
            <SginUpButton width='350' height='40' type='submit' fontSize='18'>회원가입</SginUpButton>
          </form>
        </SginUpBox>  
        
      </SginUpContainor>
    </Containor>  
  )
}

export default React.memo(SginUpPage)