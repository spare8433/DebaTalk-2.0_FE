import { FitImgBox, InputBox, SelectBox } from "@styles/commonStyle"
import styled from "styled-components"

export const TopInputBox = styled.div`
  display: flex;
  flex-direction: column;
  h3 {
    color: ${({theme}) => theme.colors.gray_2}
  }
  span {
    margin: 0 8px;
  }
  ${SelectBox} {
    margin: 0;
    margin-right: 30px;
    select {
      margin: 0!important;
    }
  } 
`

export const TitleLine = styled.div`
  display: flex;
  width: 100%;  
  align-items: center;
  margin-bottom: 16px;
  ${InputBox} {
    margin: 0;
    input {
      margin: 0!important;
    }
  }
`

export const CategoryLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
`

export const ImgInputLine = styled.div`
  margin: 20px 0;
  display: flex;
  font-size: 16px;
  label{
    display: flex;
    align-items:center;
    color: ${({theme})=>theme.colors.gray_2};
    margin:0 10px;
  }
`

export const PreviewImgBox = styled(FitImgBox)`
  border: solid 0.5px ${({theme}) => theme.colors.gray_3};
`

export const ImageUploadBox = styled.div`
  display: block;
  input[type=file]{
    display: none;
  }
  label{
    cursor: pointer;
  }
`

export const ContentBox = styled.div`
  margin-bottom: 30px;
  h4 {
    width: 100%;
  }
  textarea {
    width: 100%;
    resize: none;
    height: 8em;
  }
`

export const EditBox = styled.div`
  margin: 10px 0 30px;
  .ql-editor {
    h3 {
      border-bottom: 2px ${({theme})=> theme.colors.gray_2} solid;
      margin-bottom: 10px;
      padding-bottom: 6px;
    }
    strong{
      font-weight:bold;
    }
  }
`