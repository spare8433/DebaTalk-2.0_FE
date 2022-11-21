import styled from "styled-components"

export const ContentBox = styled.div`
  border-radius: 8px;
  background-color: white;
  border: ${({theme})=> theme.colors.gray_1};
  padding:20px 30px;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
` 

export const PostBox = styled.div`
  height: 180px;
  display: flex;
  padding:  16px 0;
  border-bottom: ${({theme})=> theme.colors.gray_3} 1px solid ;
` 

export const TextBox = styled.div`
  width: 870px;
  box-sizing: border-box;
  padding: 8px 0 8px 30px;
  display: flex;
  flex-direction: column;
  flex:1;
  h3,span{
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
  h3{font-size:22px}
` 

export const TextContentLine = styled.div`
  margin: 10px 0;
  flex: 1;
  height: 70px;
  line-height: 1.4;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`

export const OtherInfoLine = styled.div`
  span{
    font-size:14px;
    margin-right:8px
  }
`

export const BlueText = styled.span`
  color: ${({theme}) => theme.colors.soft_blue};
`

export const RedText = styled.span`
  color: ${({theme}) => theme.colors.soft_pink};
`