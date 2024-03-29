import { BasicSelect, CommonInput } from '@styles/commonStyle/inputs'
import styled from 'styled-components'

export const Containor = styled.div`
  width: 100%;
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

export const CategoryLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const ContentTitle = styled.h4`
  margin-bottom: 1.6rem;
`

export const ContentBox = styled.div`
  h4 {
    width: 100%;
    font-size: 1.5rem;
  }
  textarea {
    width: 100%;
    resize: none;
    height: 8em;
    margin-bottom: 1.6rem;
    border: solid 0.1rem ${({ theme }) => theme.colors.whiteGray};
  }
`

export const EditBox = styled.div`
  margin: 1rem 0 3rem;
  .ql-editor {
    h3 {
      border-bottom: 0.2rem ${({ theme }) => theme.colors.gray} solid;
      margin-bottom: 1rem;
      padding-bottom: 0.6rem;
    }
    strong {
      font-weight: bold;
    }
  }
`

export const ButtonLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
