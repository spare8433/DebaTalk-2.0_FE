import React from 'react'
import styled from 'styled-components'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem } from 'types/customCssType'
import FitNextImage from '../fitNextImage'

const IndexContainor = styled.div`
  width: 100%;
  min-width: 1160px;
  background-color: white;
`

const SmallBannerBox = styled.div`
  width: 1160px;
  height: 50px;
  margin: 10px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const MoveButtonLine = styled.div`
  display: flex;
  cursor: pointer;
  ${NextImageBox} {
    margin-left: 10px;
  }
`

const KeywordLine = styled.div`
  display: flex;
  align-items: center;

  span {
    background-color: ${({ theme }) => theme.colors.main};
    color: white;
    padding: 8px;
    margin-right: 16px;
  }
  h6 {
    max-width: 800px;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    font-weight: 500;
  }
  p {
    margin-left: 10px;
    color: ${({ theme }) => theme.colors.gray};
  }
`

export const SmallBanner = () => (
  <IndexContainor>
    <SmallBannerBox>
      <KeywordLine>
        <span>과학 / IT</span>
        <h6>인터넷은 사회의 발전을 저해하는 도구인가</h6>
        <p>- 주제토론</p>
        {/* {'category'}
          {'title'}
          {'method'} */}
      </KeywordLine>

      <MoveButtonLine>
        <NextImageBox styleOption={{ width: new CssRem(2), height: new CssRem(2) }}>
          <FitNextImage src="/img/arrow-circle-left_light-gray.png" alt="prev" />
        </NextImageBox>
        <NextImageBox styleOption={{ width: new CssRem(2), height: new CssRem(2) }}>
          <FitNextImage src="/img/arrow-circle-right_light-gray.png" alt="next" />
        </NextImageBox>
      </MoveButtonLine>
    </SmallBannerBox>
  </IndexContainor>
)
