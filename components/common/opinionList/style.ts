import { LessStyleBtn } from '@styles/commonStyle/buttons'
import styled from 'styled-components'

export const IndexContainor = styled.div`
  width: 100%;
`
export const OpinionItem = styled.div`
  border: 1px solid ${({ theme }) => theme.colors.gray};
  margin-bottom: 24px;
  border-radius: 5px;
`
export const OpinionBox = styled.div`
  display: flex;
  flex-direction: column;
  margin: 10px 20px;
`
export const OpinionInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  h4 {
    font-weight: 500;
    margin: 0 16px;
  }
  span {
    font-size: 1.3rem;
    font-weight: 400;
    color: ${({ theme }) => theme.colors.gray};
    align-self: center;
  }
`

export const UserOpinion = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
  font-size: 1.4rem;
`

export const Selection = styled.span<{ selection: 'A' | 'B' | '찬성' | '반대' }>`
  color: ${({ selection, theme }) =>
    selection === 'A' || '찬성' ? theme.colors.softBlue : theme.colors.softPink};
  margin: 0 6px;
  font-weight: 700;
`

export const Score = styled.span`
  margin: 0 6px;
  font-weight: 700;
`

export const OpinionInfo = styled.div`
  display: flex;
`

export const PostContentLine = styled.p`
  font-weight: 400;
  font-size: 1.4rem;
  margin: 1.4rem 0;
  overflow: hidden;
  overflow-wrap: break-word;
  background-color: inherit;
`

export const InteractButtonLine = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid 1px ${({ theme }) => theme.colors.whiteGray};
  padding-top: 12px;
`

export const ReplyInteractButtonLine = styled(InteractButtonLine)`
  justify-content: flex-start;
`

export const ShowRepliesButton = styled(LessStyleBtn)`
  margin-left: 10px;
  font-size: 1.3rem;
  display: flex;
  align-items: center;
  span {
    color: ${({ theme }) => theme.colors.whiteGray};
    margin-right: 8px;
  }
`

export const SubButtonLine = styled.div`
  display: flex;
`

export const InteractButtonItem = styled(LessStyleBtn)`
  width: 6rem;
  box-sizing: border-box;
  color: ${({ theme }) => theme.colors.gray};
  padding: 0.2rem 1rem;
  font-size: 1.4rem;
`
export const ReplyListBox = styled.div``
export const ReplyItem = styled.div`
  padding: 20px 20px 20px 50px;
  background-color: ${({ theme }) => theme.colors.background};
  position: relative;
`
export const ReplyIcon = styled.div`
  position: absolute;
  left: 25px;
  width: 12px;
  height: 12px;
  border-left: 1px solid #c5cbd0;
  border-bottom: 1px solid #c5cbd0;
`
export const OpinionWriteReplyBox = styled.div`
  margin: 20px 20px 20px 50px;
`

export const ReplyWriteReplyBox = styled.div`
  margin: 20px 0px 0px 50px;
`
