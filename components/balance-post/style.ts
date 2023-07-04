import styled from 'styled-components'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { BlueText, RedText } from '@styles/detailPost.style'

export const BalancePostCurrentSituationBox = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
  display: flex;
  align-items: center;
  span {
    font-size: 2.4rem;
    font-weight: 500;
  }
`

export const BalanceOption = styled.div`
  position: relative;
  flex: 1;
  text-align: center;
  ${BlueText}, ${RedText} {
    font-size: 2.4rem;
    margin-bottom: 1.6rem;
    font-weight: 700;
  }
  p {
    font-size: 1.5rem;
  }
  ${NextImageBox} {
    position: absolute;
    left: 0;
    top: 0;
  }
`
