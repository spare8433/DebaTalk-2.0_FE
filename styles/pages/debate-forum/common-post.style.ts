import { BasicSelectBox, ThumbnailImgBox } from "@styles/commonStyle"
import checkWH from "@utils/checkWH"
import styled from "styled-components"

export const IndexContainor = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  background-color: white;
`

export const DetailDevateContainor = styled.div`
  width: 1160px;
  margin: 50px auto;
`

export const PostHeaderBox = styled.div`
  h1{
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    font-size: 36px;
    padding-bottom: 8px;
    border-bottom: 2px solid ${({theme})=> theme.colors.main};
  }
`

export const HeaderCategoryLine = styled.div`
  display:flex;
  justify-content: space-between;
  margin: 10px 0;
`

export const HeaderButtonBox =styled.div`
  
`

export const HeaderInfoBox=styled.div`
  background-color: #f5f5f5;
  font-size: 18px;
  text-align: center;
  padding: 30px 0;
  margin-bottom: 20px;
  p{
    margin-bottom: 16px;
    font-weight: 300;
  }
  span{
    font-weight: 500;
    cursor: pointer;
  }
`

export const PostContentBox = styled.div`
`

export const ContentTitle = styled.div`
  font-weight: 500;
  width:100%;
  padding: 6px 0;
  margin-top: 16px;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray_2};
`

export const ContentBox = styled.div`
  margin: 16px 0 24px;
  padding: 0 8px;
`

export const ArticleItem = styled.div`
  margin-bottom: 14px;

  a {
    color: ${({theme})=>theme.colors.soft_blue};
    text-decoration: underline;
  }
` 

export const RelatedPostsBox = styled.div`
`

export const PostCurrentSituationBox = styled.div`
  width: 100%;
  padding: 10px;
  margin:10px 0;
`

export const DebateRulesBox = styled.div`
  background-color: #f5f5f5;
  padding: 20px 80px;
  margin-bottom: 30px;
  h3{
    font-size: 22px;
    font-weight:500;
  }
  p{
    padding: 20px;
    line-height: 1.6;
    font-size: 16px;
  }
`

export const OpinionSelectBox = styled(BasicSelectBox)`
  display: flex;
  align-items: center;
  margin: 0;
  span {
    font-size: 16px;
    color:black;
    font-weight: 400;
    margin: 0;
    margin-right: 12px;
  }
  p {
    font-size: 14px;
    color:${({theme})=> theme.colors.gray_3};
    margin-left: 24px;
  }
  select {
    width: auto;
  }
`

export const OpinionSelect = styled.select<{width?:any}>`
  width: ${({width})=>checkWH(width)};
  margin: 0!important;
`

export const OpinionListBox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`

export const CommentBox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`
