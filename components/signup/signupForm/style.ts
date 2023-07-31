import { PrimaryButton, BasicButton } from '@styles/commonStyle/buttons'
import { CommonInput } from '@styles/commonStyle/inputs'
import styled, { css } from 'styled-components'

export const SignUpBox = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  flex-direction: column;
  h2 {
    width: 100%;
    font-size: 2.2rem;
    font-weight: 700;
    text-align: center;
    margin-bottom: 2rem;
  }
`

export const SignUpButton = styled(PrimaryButton)`
  margin-top: 2rem;
  height: 4rem;
`

export const SignupInputBox = styled.div`
  margin-bottom: 1.4rem;
  p {
    color: ${({ theme }) => theme.colors.whiteGray};
    margin-left: 1rem;
    font-size: 1.3rem;
    font-weight: 300;
  }
`
export const NonDuplicatedInputLine = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: start;
`

export const SignupInput = styled(CommonInput)`
  width: 36rem;
  height: 4rem;
`

export const NonDuplicatedInput = styled(CommonInput)`
  width: 28rem;
  height: 4rem;
`

export const CheckBtn = styled(BasicButton)<{ disabled: boolean }>`
  width: 7rem;
  height: 4rem;
  font-size: 1.3rem;
  border-radius: 1rem;

  ${({ theme, disabled }) => css`
    background-color: ${theme.colors.background};
    border: 1px solid ${theme.colors.whiteGray};

    ${disabled &&
    css`
      cursor: initial;
      color: ${theme.colors.whiteGray};
    `}
  `};
`
