import { Line } from '@styles/commonStyle'
import { NextImageBtn, PrimaryButton, SubButton } from '@styles/commonStyle/buttons'
import { CommonInput } from '@styles/commonStyle/inputs'
import styled from 'styled-components'

export const LoginBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  /* padding: 3rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.whiteGray};
  border-radius: 1rem;
  background-color: white; */
  h2 {
    width: 350px;
    font-size: 22px;
    font-weight: 700;
    text-align: center;
    margin-bottom: 20px;
  }

  form {
    text-align: center;
  }
  ${PrimaryButton} {
    margin: 0 auto;
  }

  ${PrimaryButton}, ${SubButton} {
    width: 18rem;
    height: 4rem;
    font-size: 1.8rem;
  }

  ${Line} {
    height: 0.1rem;
  }
`

export const FindPwBox = styled.div`
  margin: 1rem 0;
  display: flex;
  a,
  span {
    color: ${({ theme }) => theme.colors.whiteGray};
    font-size: 1.4rem;
    font-weight: 500;
    padding: 0.6rem;
  }
`

export const LoginInput = styled(CommonInput)`
  width: 35rem;
  height: 4rem;
  margin-bottom: 1.5rem;
`

export const SubBox = styled.div`
  width: 350px;
  display: flex;
  justify-content: space-between;
  margin-top: 20px;

  ${SubButton} {
  }
`

export const SocialImgBtn = styled(NextImageBtn)`
  width: 4rem !important;
  height: 4rem !important;
  background-color: white;
  border-radius: 100%;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
`
