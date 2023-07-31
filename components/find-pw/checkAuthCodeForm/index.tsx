import React, { useCallback } from 'react'
import { useAppDispatch, useAppSelector } from '@store/store'
import { checkAuthCode } from '@store/slices/user'
import useInput from '@hooks/useInput'
import { ContentBox, ExplainText, SubmitButton, TextInput } from '@styles/findIdPwform.style'

const CheckAuthCodeForm = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const [code, onChangeCode] = useInput('')

  const onSubmitAuthCode = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        await dispatch(checkAuthCode({ UserId: user.findUserData!.id, code })).unwrap()
      } catch (error) {
        alert('인증 코드 인증에 실패했습니다.')
      }
    },
    [code, dispatch, user.findUserData],
  )

  return (
    <ContentBox>
      {/* 인증 코드 발송 이후 인증코드 확인 폼 */}
      {user.getAuthCodeDone && user.findUserData && (
        <>
          <h2>인증 코드 확인</h2>
          <ExplainText>이메일을 통해 6자리의 코드를 확인하시고 입력해주세요.</ExplainText>
          <form onSubmit={onSubmitAuthCode}>
            <TextInput
              type="text"
              placeholder="6 자리의 코드를 입력해주세요"
              value={code}
              onChange={onChangeCode}
            />

            <SubmitButton type="submit">확인</SubmitButton>
          </form>
          <ExplainText>
            인증 코드의 유효시간은 30분 입니다. <br />
            30 분 이내에 3 회 이상 요청시 인증코드가 발송되지 않습니다.
          </ExplainText>
        </>
      )}
    </ContentBox>
  )
}

export default CheckAuthCodeForm
