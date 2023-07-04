import { NextImageBox } from '@styles/commonStyle/imgBox'
import styled from 'styled-components'

export const MainDebate = styled.div`
  width: 100%;
  display: grid;
  margin: 3rem 0;
  grid-template-columns: repeat(3, 1fr);
  justify-items: center;
`
export const DebateContentBox = styled.div`
  width: 35rem;
  display: flex;
  flex-direction: column;

  h1 {
    width: 100%;
    margin-bottom: 1rem;
    text-align: center;
  }
`

export const SubContentBox = styled.div`
  display: flex;
  box-sizing: content-box;
  padding: 0.8rem 0;
  height: 5rem;
  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.whiteGray};
  h3 {
    font-size: 1.6rem;
  }
`

export const IssueSubContentBox = styled(SubContentBox)`
  ${NextImageBox} {
    width: 5rem;
  }
  a {
    width: 100%;
    display: flex;
  }
`
export const ContentInfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding: 0.4rem 0;
  margin-left: 1.2rem;
  h3 {
    width: 29rem;
    white-space: nowrap;
    overflow: hidden;
    text-overflow: ellipsis;
  }
  p {
    text-align: right;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.deepGray};
  }
`
export const ProsConsSubContentBox = styled(SubContentBox)`
  flex-direction: column;
  justify-content: space-between;
  p {
    text-align: right;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.deepGray};
  }
  p:nth-child(1) {
    color: #7291e6;
  }
  p:nth-child(3) {
    color: #e67292;
  }
  a {
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-between;
  }
`

export const VoteGauge = styled.div`
  position: relative;
  width: 100%;
  height: 0.4rem;
  background-color: #e67292;
  border-radius: 0.2rem;
`
export const BlueGauage = styled.div<{ width: string }>`
  width: ${({ width }) => `${width}%`};
  border-radius: 0.2rem;
  position: absolute;
  height: 0.4rem;
  left: 0;
  top: 0;
  background-color: #7291e6;
`
export const VoteInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
`
