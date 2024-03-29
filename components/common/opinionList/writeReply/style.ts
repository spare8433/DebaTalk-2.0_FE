import styled from 'styled-components'

export const IndexContainor = styled.div`
  width: 100%;
`

export const ReplyTextAreaBox = styled.div`
  display: flex;
  align-items: center;
  border-bottom: 2px solid black;
  padding: 4px 8px;
  margin-bottom: 16px;
  font-size: 1.4rem;
`
export const UserTag = styled.span`
  color: ${({ theme }) => theme.colors.softBlue};
  margin-right: 6px;
`

export const ReplyTextArea = styled.textarea`
  box-sizing: border-box;
  flex: 1;
  height: auto;
  outline: none;
  resize: none;
  border: none;
  outline: none;
  overflow: hidden;
  overflow-wrap: break-word;
  background-color: inherit;
`

export const ButtonLine = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
`
