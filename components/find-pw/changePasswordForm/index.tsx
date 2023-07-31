import React, { useCallback } from 'react'
import useInput from '@hooks/useInput'
import useCheckInput from '@hooks/useCheckInput'
import { useAppDispatch, useAppSelector } from '@store/store'
import { updatePassword } from '@store/slices/user'
import { ContentBox, ExplainText, SubmitButton, TextInput } from '@styles/findIdPwform.style'
import { useRouter } from 'next/router'

const ChangePasswordForm = () => {
  const dispatch = useAppDispatch()
  const router = useRouter()
  const user = useAppSelector((state) => state.user)
  const [password, onChangePassword] = useInput('')
  const [newPassword, onChangeNewPassword] = useCheckInput('', 'password')
  const [newRePassword, onChangeNewRePassword] = useCheckInput('', 'repassword', password)

  const onSubmitNewPassword = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        await dispatch(
          updatePassword({ UserId: user.findUserData!.id, password, newPassword }),
        ).unwrap()
        router.push('/')
      } catch (error) {
        alert('비밀번호 변경에 실패했습니다.')
      }
    },
    [dispatch, newPassword, password, router, user.findUserData],
  )

  return (
    <ContentBox>
      <h2>인증 코드 확인</h2>
      <ExplainText>이메일을 통해 6자리의 코드를 확인하시고 입력해주세요.</ExplainText>
      <form onSubmit={onSubmitNewPassword}>
        <TextInput
          type="password"
          placeholder="기존 비밀번호"
          value={password}
          onChange={onChangePassword}
        />

        <TextInput
          type="password"
          placeholder="새 비밀번호"
          value={newPassword}
          onChange={onChangeNewPassword}
        />

        <TextInput
          type="password"
          placeholder="새 비밀번호 확인"
          value={newRePassword}
          onChange={onChangeNewRePassword}
        />

        <SubmitButton type="submit">확인</SubmitButton>
      </form>
      <ExplainText>
        인증 코드의 유효시간은 30분 입니다. <br />
        30 분 이내에 3 회 이상 요청시 인증코드가 발송되지 않습니다.
      </ExplainText>
    </ContentBox>
  )
}

export default ChangePasswordForm
