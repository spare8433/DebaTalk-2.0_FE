import styled from 'styled-components'

export const ContentBox = styled.div`
  margin-bottom: 2rem;
  border-radius: 0.8rem;
  background-color: white;
  border: ${({ theme }) => theme.colors.deepGray};
  padding: 2rem 3rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0 0.2rem 0.8rem 0;
  h3 {
    padding-bottom: 1rem;
    border-bottom: solid 0.1rem ${({ theme }) => theme.colors.mainBlack};
  }
  h6 {
    padding: 1rem 0;
  }
`

export const PostBox = styled.div`
  height: 20rem;
  display: flex;
  padding: 2rem 0;
  border-bottom: ${({ theme }) => theme.colors.whiteGray} 0.1rem solid;
`

export const TextBox = styled.div`
  width: 87rem;
  height: 16rem;
  box-sizing: border-box;
  padding: 0.4rem 0 0.4rem 2.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  flex: 1;
  h4,
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
`

export const TextContentLine = styled.div`
  font-size: 1.4rem;
  padding-left: 0.5rem;
  height: 8rem;
  line-height: 2rem;
  overflow: hidden;
  text-overflow: ellipsis;
  white-space: normal;
  word-wrap: break-word;
  text-align: left;
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 4;
`

export const OtherInfoLine = styled.div`
  display: flex;
  justify-content: space-between;
  span {
    font-size: 1.4rem;
    margin-right: 1.6rem;
  }
`

export const LeftPart = styled.div``

export const RightPart = styled.div`
  font-size: 1.2rem;
  color: ${({ theme }) => theme.colors.gray};
`

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.softBlue};
`

export const RedText = styled.span`
  color: ${({ theme }) => theme.colors.softPink};
`

export const PaginationBox = styled.div`
  width: 100%;
  font-size: 1.6rem !important;
  margin: 3rem 0 1rem;
`
