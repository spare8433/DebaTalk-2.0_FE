import useInput from '@hooks/useInput'
import { findUserId } from '@store/slices/user'
import { useAppDispatch } from '@store/store'
import React, { useCallback } from 'react'
import {
  ContentBox,
  ExplainText,
  RadioGroup,
  SubmitButton,
  TextInput,
} from '@styles/findIdPwform.style'

const FindIdForm = () => {
  const dispatch = useAppDispatch()
  const [email, onChangeEmail] = useInput('')
  const [selectedOption, changeSelectedOption] = useInput('이메일')

  const onSubmitForm = useCallback(
    async (e: React.FormEvent) => {
      e.preventDefault()
      try {
        await dispatch(findUserId({ email })).unwrap()
      } catch (error) {
        alert('계정정보를 찾지 못했습니다.')
      }
    },
    [dispatch, email],
  )
  return (
    <ContentBox>
      <h2>아이디 찾기</h2>
      <ExplainText>인증 수단을 선택하여 등록된 계정 정보를 입력하세요</ExplainText>
      <form onSubmit={onSubmitForm}>
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
        </RadioGroup>

        {selectedOption === '이메일' && (
          <TextInput type="text" placeholder="이메일" value={email} onChange={onChangeEmail} />
        )}

        <SubmitButton type="submit">아이디 찾기</SubmitButton>
      </form>
    </ContentBox>
  )
}

export default FindIdForm
