import styled from 'styled-components'

export const ContentBox = styled.div`
  border-radius: 0.8rem;
  background-color: white;
  border: ${({ theme }) => theme.colors.deepGray};
  padding: 2rem 3rem;
  box-shadow: rgba(99, 99, 99, 0.3) 0 0.2rem 0.8rem 0;
`

export const PostBox = styled.div`
  height: 18rem;
  display: flex;
  padding: 1.6rem 0;
  border-bottom: ${({ theme }) => theme.colors.whiteGray} 0.1rem solid;
`

export const TextBox = styled.div`
  width: 87rem;
  box-sizing: border-box;
  padding: 0.8rem 0 0.8rem 3rem;
  display: flex;
  flex-direction: column;
  flex: 1;
  h3,
  span {
    overflow: hidden;
    text-overflow: ellipsis;
    white-space: nowrap;
    margin: 0;
  }
  h3 {
    font-size: 2.2rem;
  }
`

export const TextContentLine = styled.div`
  margin: 1rem 0;
  flex: 1;
  height: 7rem;
  line-height: 1.4;
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
  span {
    font-size: 1.4rem;
    margin-right: 0.8rem;
  }
`

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.softBlue};
`

export const RedText = styled.span`
  color: ${({ theme }) => theme.colors.softPink};
`
