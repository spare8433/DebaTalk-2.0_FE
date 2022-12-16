import { FitImgBox, StyledCategory } from '@styles/commonStyle'
import styled from 'styled-components'

export const MainDebate = styled.div`
  width:100%;
  display: grid;
  padding :50px 0px;
  grid-template-columns :repeat(3, 1fr);
  justify-items: center;
`
export const DebateContentBox = styled.div`
  width: 350px;
  display: flex;
  flex-direction: column;
`

export const MainContent = styled.div`
  height: 200px;
  text-align : center;
  position:relative;
  ${FitImgBox} {
    width: 100%;
    height: 100%;
    position:absolute;
    left:0;
    top:0;
    z-index: 1;
  }
`

export const ContentLine = styled.div`
  display:flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
  position:absolute;
  left:0;
  top:0;
  background-color: rgba(0,0,0,0.6);
  z-index: 2;
  color: white;

  h2{
    width: 100%;
    flex:1;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 22px;
  }

  span{
    font-size: 14px;
    text-align: right;
    padding: 6px;
  }
`

export const Category = styled(StyledCategory)`
  width: 80px;
  font-size: 14px;
`

export const SubContentBox = styled.div`
  display: flex;
  box-sizing:content-box;
  padding: 8px 0;
  height: 50px;
  border-bottom: solid 1px ${({theme}) => theme.colors.gray_3};
  h3{
    font-size: 16px;
  }
`

export const IssueSubContentBox = styled(SubContentBox)`
  ${FitImgBox}{
    width:50px;
  }
  a {
    width: 100%;
    display: flex;
  }
`
export const ContentInfoBox = styled.div`
  flex:1; 
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 4px 0;
  margin-left: 12px;
  h3{
    width: 290px;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p{
    text-align: right;
    font-size: 14px;
    color: ${({theme})=> theme.colors.gray_1}
  }
`
export const ProsConsSubContentBox = styled(SubContentBox)`
  flex-direction: column;
  justify-content: space-between;
  p{
    text-align: right;
    font-size: 14px;
    color: ${({theme})=> theme.colors.gray_1}
  }
  p:nth-child(1){color:#7291E6}
  p:nth-child(3){color:#E67292}
  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const VoteGauge = styled.div`
  position: relative;
  width:100%;
  height: 4px;
  background-color: #E67292;
  border-radius: 2px;
`
export const BlueGauage = styled.div<{width:string}>`
  width: ${({width})=>width + '%'};
  border-radius: 2px;
  position: absolute;
  height: 4px;
  left: 0;
  top:0;
  background-color: #7291E6;
`
export const VoteInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`