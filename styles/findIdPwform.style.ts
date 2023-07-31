import { NextImageBtn, PrimaryButton } from '@styles/commonStyle/buttons'
import { CommonInput } from '@styles/commonStyle/inputs'
import styled from 'styled-components'

export const LogoBox = styled.div`
  width: 100%;
  text-align: center;
  margin-bottom: 2rem;

  ${NextImageBtn} {
    margin: 0 auto;
    width: 25rem;
    height: 6rem;
  }
`

export const ContentBox = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  /* padding: 3rem 2rem;
  border: 1px solid ${({ theme }) => theme.colors.whiteGray};
  border-radius: 5px; */
  h2 {
    width: 350px;
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }

  form {
    text-align: center;
  }
`

export const SubmitButton = styled(PrimaryButton)`
  width: 18rem;
  height: 4rem;
  font-size: 1.8rem;
  margin-top: 2rem;
`

export const ExplainText = styled.p`
  font-size: 1.4rem;
  text-align: center;
`

export const RadioGroup = styled.div`
  display: flex;
  justify-content: center;
  margin: 2rem 0;
  font-size: 1.4rem;
  label {
    input[type='radio'] {
      margin-right: 0.5rem;
    }
    margin-right: 1rem;
    display: flex;
    align-items: center;
  }
`

export const TextInput = styled(CommonInput)`
  width: 35rem;
  height: 4rem;
  margin-bottom: 1.5rem;
`
