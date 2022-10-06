import { AppLayout, ImgBox } from '@styles/commonStyle'
import styled from 'styled-components'

export const FooterLayout = styled(AppLayout)`
  display: flex;
  justify-content: space-between;
  background-color: #2B2B2B;
  margin: 16px 0;
  padding: 32px 16px;  
`

export const FooterContentBox = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex:1;
`

export const ServiceLine = styled.div`
  margin-bottom: 30px;
  a, span{
    color: ${({theme})=>theme.colors.gray_2};
  }
  span {
    margin: 0 12px;
  }
`

export const InformationLine = styled.div`
  color: ${({theme})=>theme.colors.gray_2};
  line-height: 1.5;
  span {
    color: white;
  }
`

export const FooterImgBox = styled(ImgBox)`
  align-self:center
`