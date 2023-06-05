import React from 'react'
import styled from 'styled-components'
import { Containor, ImgBox } from '@styles/commonStyle'

const IndexContainor = styled(Containor)`
  background-color: white;
`

const SmallBannerBox = styled.div`
  width:1160px;
  height: 50px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content:space-between;
`

const MoveButtonLine = styled.div`
  display: flex;
  cursor: pointer;
  ${ImgBox}{
    margin-left: 10px;
  }
`

const KeywordLine = styled.div`
  display: flex;
  align-items: center;
  
  span{
    background-color: ${({theme})=> theme.colors.main};
    color:white;
    padding: 8px;
    margin-right: 16px;
  }
  h3{
    max-width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
  }
  p{
    margin-left: 10px;
    color: ${({theme})=> theme.colors.gray_2};
  }
`


export const SmallBanner = () => {
  
  return (
    <IndexContainor width='1160'>
      <SmallBannerBox>
        <KeywordLine>
          <span>과학 / IT</span>
          <h3>인터넷은 사회의 발전을 저해하는 도구인가</h3>
          <p>- 주제토론</p>
          {/* {'category'}
          {'title'}
          {'method'} */}
        </KeywordLine>


        <MoveButtonLine>
          <ImgBox width='20'><img src='/img/arrow-circle-left_light-gray.png' alt='prev'></img></ImgBox>
          <ImgBox width='20'><img src='/img/arrow-circle-right_light-gray.png' alt='next'></img></ImgBox>
        </MoveButtonLine>

      </SmallBannerBox>
    </IndexContainor>
    
  )
}
