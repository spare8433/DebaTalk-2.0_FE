import { BasicSelect, CommonInput } from '@styles/commonStyle/inputs'
import styled from 'styled-components'

export const Containor = styled.div`
  width: 100%;

  h1 {
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    padding-bottom: 0.8rem;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.main};
    margin-bottom: 4rem;
  }
`

export const TopInputBox = styled.div`
  display: flex;
  flex-direction: column;
  font-size: 1.5rem;

  h5 {
    color: ${({ theme }) => theme.colors.gray};
    margin-bottom: 1rem;
  }
  span {
    margin: 0 0.8rem;
    font-weight: 700;
  }
  ${BasicSelect} {
    height: 3rem;
    margin: 0;
    margin-right: 3rem;
    color: ${({ theme }) => theme.colors.deepGray};
    padding-right: 0.8rem;
    padding-left: 0.8rem;
  }
`

export const TitleLine = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  margin-bottom: 1.6rem;
  ${CommonInput} {
    margin: 0;
    input {
      margin: 0 !important;
    }
  }
`

export const ContentTitle = styled.h4`
  margin-bottom: 1.6rem;
`

export const CategoryLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const ContentBox = styled.div`
  h4 {
    width: 100%;
    font-size: 1.5rem;
  }
  textarea {
    width: 100%;
    resize: none;
    height: 18em;
    margin-bottom: 1.6rem;
    font-size: 1.5rem;
    line-height: 1.6;
    border: solid 0.1rem ${({ theme }) => theme.colors.whiteGray};
  }
`

export const ButtonLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
