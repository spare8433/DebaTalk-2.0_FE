import { useAppSelector } from '@store/store'
import { ContentBox, ExplainText, SubmitButton } from '@styles/findIdPwform.style'
import dayjs from 'dayjs'
import { useRouter } from 'next/router'
import React from 'react'
import styled from 'styled-components'

const UserInfoBox = styled.div`
  width: 100%;
  margin: 2rem 0;
  padding: 1rem 4rem;
  border-radius: 1rem;
  border: solid 0.1rem ${({ theme }) => theme.colors.deepGray};

  p {
    font-size: 1.4rem;
    margin: 2rem 0;
    span {
      font-weight: 600;
      margin-left: 1rem;
    }
  }
`

const FindIdResult = () => {
  const router = useRouter()
  const user = useAppSelector((state) => state.user)

  return (
    <ContentBox>
      <h2>아이디 찾기</h2>
      <ExplainText>이메일과 일치하는 계정 정보입니다.</ExplainText>
      <UserInfoBox>
        <p>
          아이디 :<span>{user.findUserData?.userId}</span>
        </p>
        <p>
          생성일 :<span>{dayjs(user.findUserData?.createdAt).format('YYYY-MM-DD')}</span>
        </p>
      </UserInfoBox>
      <SubmitButton onClick={() => router.push('/login')}>로그인 화면으로</SubmitButton>
    </ContentBox>
  )
}

export default FindIdResult
