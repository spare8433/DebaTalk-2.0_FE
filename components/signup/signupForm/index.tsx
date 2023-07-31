import React, { useCallback, useState } from 'react'
import { useAppDispatch } from '@store/store'
import { useRouter } from 'next/router'
import useCheckInput from '@hooks/useCheckInput'
import { checkDuplicateEmail, checkDuplicateId, signUp } from '@store/slices/user'
import {
  SignUpBox,
  SignUpButton,
  SignupInputBox,
  SignupInput,
  NonDuplicatedInput,
  NonDuplicatedInputLine,
  CheckBtn,
} from './style'

const SignupForm = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const [userId, onChangeUserId, userIdMsg] = useCheckInput('', 'id')
  const [email, onChangeUserEmail, emailMsg] = useCheckInput('', 'email')
  const [nickname, onChangeUserNickName, nicknameMsg] = useCheckInput('', 'nickanme')
  const [password, onChangeUserPw, passwordMsg] = useCheckInput('', 'password')
  const [rePassword, onChangeUserRePw, rePasswordMsg] = useCheckInput('', 'repassword', password)

  const [isNotDuplcateId, setIsNotDuplcateId] = useState(false)
  const [isNotDuplcateEmail, setIsNotDuplcateEmail] = useState(false)

  const onSubmitForm = async (e: React.FormEvent) => {
    e.preventDefault()
    try {
      if (password !== rePassword) return alert('비밀번호가 동일하지 않습니다.')
      if (!isNotDuplcateId) return alert('아이디 중복 확인을 해주세요.')
      if (!isNotDuplcateEmail) return alert('이메일 중복 확인을 해주세요.')

      await dispatch(
        signUp({
          userId,
          email,
          nickname,
          password,
        }),
      ).unwrap()
      alert('회원가입이 완료되었습니다.')
      return await router.push('/')
    } catch (error) {
      return alert(`회원가입에 실패하셨습니다.`)
    }
  }

  const handleCheckDuplcateId = useCallback(async () => {
    try {
      await dispatch(checkDuplicateId({ userId })).unwrap()
      setIsNotDuplcateId(true)
      alert(`"${userId}" 는 중복되지 않은 아이디입니다.`)
    } catch (error) {
      alert(`"${userId}" 는 중복된 이메일입니다.`)
    }
  }, [dispatch, userId])

  const handleCheckDuplcateEmail = useCallback(async () => {
    try {
      await dispatch(checkDuplicateEmail({ email })).unwrap()
      setIsNotDuplcateEmail(true)
      alert(`"${email}" 는 중복되지 않은 이메일입니다.`)
    } catch (error) {
      alert(`"${email}" 는 중복된 이메일입니다.`)
    }
  }, [dispatch, email])

  return (
    <SignUpBox>
      <h2>회원가입</h2>

      <form onSubmit={onSubmitForm}>
        <SignupInputBox>
          <NonDuplicatedInputLine>
            <NonDuplicatedInput
              placeholder="아이디"
              value={userId}
              onChange={onChangeUserId}
              required
            />
            <CheckBtn onClick={handleCheckDuplcateId} disabled={userId === ''}>
              중복확인
            </CheckBtn>
          </NonDuplicatedInputLine>

          <p>{userIdMsg}</p>
        </SignupInputBox>

        <SignupInputBox>
          <NonDuplicatedInputLine>
            <NonDuplicatedInput
              placeholder="이메일"
              value={email}
              onChange={onChangeUserEmail}
              required
            />
            <CheckBtn onClick={handleCheckDuplcateEmail} disabled={email === ''}>
              중복확인
            </CheckBtn>
          </NonDuplicatedInputLine>

          <p>{emailMsg}</p>
        </SignupInputBox>

        <SignupInputBox>
          <SignupInput
            placeholder="닉네임"
            value={nickname}
            onChange={onChangeUserNickName}
            required
          />
          <p>{nicknameMsg}</p>
        </SignupInputBox>

        <SignupInputBox>
          <SignupInput
            placeholder="비밀번호"
            type="password"
            value={password}
            onChange={onChangeUserPw}
            required
          />
          <p>{passwordMsg}</p>
        </SignupInputBox>

        <SignupInputBox>
          <SignupInput
            placeholder="비밀번호 확인"
            type="password"
            value={rePassword}
            onChange={onChangeUserRePw}
            required
          />
          <p>{rePasswordMsg}</p>
        </SignupInputBox>

        <SignUpButton type="submit">회원가입</SignUpButton>
      </form>
    </SignUpBox>
  )
}

export default SignupForm
