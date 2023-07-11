import { NextImageBox } from '@styles/commonStyle/imgBox'
import styled from 'styled-components'

export const InexContainor = styled.div`
  border-radius: 8px;
  background-color: white;
  border: ${({ theme }) => theme.colors.deepGray};
  padding: 1rem 3rem 2rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0px 2px 8px 0px;
`
export const PostBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 1.6rem 0;
  border-bottom: ${({ theme }) => theme.colors.whiteGray} 1px solid;

  ${NextImageBox} {
    width: 14rem;
    height: 10rem;
    box-shadow: rgba(99, 99, 99, 0.3) 0 0.2rem 0.8rem 0;
    margin-right: 3rem;
  }
`
export const InfoBox = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
`
export const TitleLine = styled.h3`
  font-size: 1.8rem;
`
export const TextLine = styled.div`
  flex: 1;
  font-size: 1.4rem;
  margin: 0.5rem 0;
  p {
    height: 5.4rem;
    line-height: 1.8rem;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: normal;
    word-wrap: break-word;
    text-align: left;
    display: -webkit-box;
    -webkit-box-orient: vertical;
    -webkit-line-clamp: 3;
  }
`
export const OtherInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  font-size: 1.4rem;
`
export const ProfileItems = styled.div`
  display: flex;
  span {
    margin-right: 1rem;
    font-weight: 300;
  }
`
export const RecentInfoItems = styled.div`
  display: flex;
  p,
  span {
    margin-right: 20px;
  }
  p {
  }
  span {
  }
`

export const PaginationBox = styled.div`
  width: 100%;
  font-size: 1.6rem !important;
  margin: 3rem 0 1rem;
`
