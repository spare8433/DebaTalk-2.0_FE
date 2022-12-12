import { Line } from '@styles/commonStyle'
import styled from 'styled-components'

export const DebateForumContainor = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
`

export const DebateForumBox = styled.div`
  width: 1160px;
  margin: 0 auto;
`

export const PrColorLine = styled(Line)`
  background-color: ${({theme})=> theme.colors.main};
`

export const CategoryBox = styled.div`
  h2, h3 {
    margin: 24px 0 24px;
    font-weight: 500;
    
  }
  h2 {font-size: 26px;}
  h3 {font-size: 22px;}
`

export const ModeItem = styled.a<{value:string}>`
  font-weight:500;
  font-size: 18px;
  margin-right: 40px;
  color:${({theme})=> theme.colors.gray_2};
`

export const CategoryItem = styled.a<{value:string}>`
  font-size: 16px;
  margin-right: 30px;
  font-weight:500;
  color:${({theme})=> theme.colors.gray_2};
`

export const DetailControllBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 16px;
`
