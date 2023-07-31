import { useAppDispatch, useAppSelector } from '@store/store'
import React, { useCallback } from 'react'
import { getAuthCode } from '@store/slices/user'
import useInput from '@hooks/useInput'
import {
  ContentBox,
  ExplainText,
  RadioGroup,
  SubmitButton,
  TextInput,
} from '@styles/findIdPwform.style'

const SendAuthCodeForm = () => {
  const dispatch = useAppDispatch()
  const user = useAppSelector((state) => state.user)
  const [email, onChangeEmail] = useInput('')
  const [userId, onChangeUserId] = useInput('')
  const [selectedOption, changeSelectedOption] = useInput('이메일')

  const onSubmitUserInfo = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        await dispatch(getAuthCode({ email, userId })).unwrap()
      } catch (error) {
        alert('인증 코드 발급에 실패했습니다.')
      }
    },
    [dispatch, email, userId],
  )

  return (
    <ContentBox>
      {!user.getAuthCodeDone && !user.findUserData && (
        <>
          <h2>인증 코드 발송</h2>
          <ExplainText>
            인증 수단을 선택하여 등록된 계정 정보를 입력하세요.
            <br />
            등록된 이메일로 인증 코드가 발송 됩니다.
          </ExplainText>
          <form onSubmit={onSubmitUserInfo}>
            <RadioGroup>
              <label>
                <input
                  type="radio"
                  value="이메일"
                  checked={selectedOption === '이메일'}
                  onChange={changeSelectedOption}
                  name="radioGroup"
                />
                이메일
              </label>
              <label>
                <input
                  type="radio"
                  value="아이디"
                  checked={selectedOption === '아이디'}
                  onChange={changeSelectedOption}
                  name="radioGroup"
                />
                아이디
              </label>
            </RadioGroup>

            {selectedOption === '이메일' && (
              <TextInput type="text" placeholder="이메일" value={email} onChange={onChangeEmail} />
            )}

            {selectedOption === '아이디' && (
              <TextInput
                type="text"
                placeholder="아이디"
                value={userId}
                onChange={onChangeUserId}
              />
            )}

            <SubmitButton type="submit">인증코드 발송</SubmitButton>
          </form>
        </>
      )}
    </ContentBox>
  )
}

export default SendAuthCodeForm
