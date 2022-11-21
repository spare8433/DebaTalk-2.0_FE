import { ImgBox } from "@styles/commonStyle"
import styled from "styled-components"

export const IndexContainor = styled.div`
  width:100%;
`
export const OpinionItem = styled.div`
  border: 1px solid ${({theme}) => theme.colors.gray_2};
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
  h3{
    font-weight: 500;
    margin:0 16px;
  }
  span{
    font-size: 14px;
    font-weight: 400;
    color: ${({theme})=> theme.colors.gray_2};
    align-self: center;
  }
`

export const UserOpinion = styled.div`
  display: flex;
  align-items: center;
  margin-right: 20px;
`

export const Selection = styled.div<{ selection: 'A' | 'B' }>`
  color: ${({selection,theme}) => 
    selection === 'A' ? theme.colors.soft_blue : theme.colors.soft_pink 
  };
  margin: 0 6px;
  font-weight: 600;
`

export const OpinionInfo = styled.div`
  display: flex;
`

export const PostContentLine = styled.p`
  font-weight: 400;
  margin: 14px 0;
  overflow: hidden;
  overflow-wrap: break-word;
  background-color: inherit;
`

export const InteractButtonLine = styled.div`
  display: flex;
  justify-content: space-between;
  border-top: solid 1px ${({theme}) => theme.colors.gray_3};
  padding-top: 12px;
`

export const ReplyInteractButtonLine = styled(InteractButtonLine)`
  justify-content: flex-start;
`

export const ShowRepliesButton = styled.div`
  margin-left: 10px;
  display: flex;
  cursor: pointer;
  span {
    color: ${({theme}) => theme.colors.gray_3}
  }
  ${ImgBox} {
    margin-left: 8px;
    img { align-self:center}
  }
`

export const SubButtonLine = styled.div`
  display: flex;
`

export const InteractButtonItem = styled.div`
  margin:0px 30px 0px 10px;
  cursor: pointer;
  ${ImgBox} {

  }
  span {
    color: ${({theme})=> theme.colors.gray_2};
  }
`
export const ReplyListBox = styled.div`
  
`
export const ReplyItem = styled.div`
  padding: 20px 20px 20px 50px;
  background-color: ${({theme})=> theme.colors.background};
  position:relative;
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
