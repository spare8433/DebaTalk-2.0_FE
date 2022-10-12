import styled from "styled-components";

export const ContentContainor = styled.div`
  width: 100%;
  margin: 0 auto;
  padding: 20px 0;
  background-color: #fff;
  &.topBanner{
    background-color: #fff;
  }
  &.majorContent{
    background-color: ${({theme})=> theme.colors.background};
  }
  &.recentReaction{
    background-color: ${({theme})=> theme.colors.main};
  }  
`

export const ContentBox = styled.div`
  width: 1160px;
  margin: 0 auto;
`

export const Slide = styled.div`
  padding: 0 36px;
`

