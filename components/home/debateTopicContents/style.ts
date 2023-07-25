import { StyledCategory } from '@styles/commonStyle'
import { LessStyleBtn } from '@styles/commonStyle/buttons'
import styled from 'styled-components'

export const DebateTopicBox = styled.div`
  width: 100%;
`

export const BoradTitle = styled.div`
  display: flex;
  justify-content: space-between;
  border-bottom: solid 0.3rem ${({ theme }) => theme.colors.main};
  align-items: end;
  padding: 1rem 0.8rem;
  margin-bottom: 0.6rem;

  h3 {
    font-weight: 600;
  }

  ${LessStyleBtn} {
    width: auto;
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.gray};
  }
`

export const DebateTopicItem = styled.div`
  width: 100%;
  height: 6.4rem;
  display: flex;
  flex-direction: column;
  border-bottom: solid 0.1rem ${({ theme }) => theme.colors.gray};
  padding: 0.8rem 0.4rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`
export const TitleLine = styled.div`
  width: 100%;
  display: flex;
  align-items: center;

  ${StyledCategory} {
    font-size: 1.2rem;
  }

  h5 {
    flex: 1;
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
  }
`

export const OtherInfoLine = styled.div`
  width: 100%;
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
    margin-left: 1.4rem;
  }
`
