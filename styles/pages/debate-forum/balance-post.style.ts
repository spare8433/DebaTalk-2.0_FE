import { BasicSelectBox, ImgBox } from "@styles/commonStyle"
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

export const ContentBox = styled.div`
  margin: 16px 0 24px;
  padding: 0 8px;
`

export const ContentTitle = styled.div`
  font-weight: 500;
  width:100%;
  padding: 6px 0;
  border-bottom: 1px solid ${({theme}) => theme.colors.gray_2};
`

export const PostCurrentSituationBox = styled.div`
  width: 100%;
  display: flex;
  padding: 10px;
  margin:10px 0;
  align-items: center;
  span{
    font-size: 24px;
    font-weight: 500;
  }
`

export const BalanceOption = styled.div`
  position: relative;
  flex:1;
  text-align: center;
  h4 {
    font-size: 24px;
    margin-bottom: 16px;
  }
  p{
  }
  ${ImgBox} {
    position: absolute;
    left: 0;
    top: 0;
  }
`

export const RelatedPostsBox = styled.div`
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

export const CommentBox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`

export const OpinionListBox = styled.div`
  margin-top: 20px;
  margin-bottom: 30px;
`

export const SelectBox = styled(BasicSelectBox)`
  span {
    margin-right: 16px;
  }
  margin-bottom: 12px;
`