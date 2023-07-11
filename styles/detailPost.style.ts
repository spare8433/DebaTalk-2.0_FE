import styled from 'styled-components'
import { CssValue } from 'types/customCssType'

export const DetailDevateContainor = styled.div`
  width: 1160px;
  margin: 5rem auto;
`

export const PostHeaderBox = styled.div`
  h1 {
    margin: 0 auto;
    width: fit-content;
    text-align: center;
    padding-bottom: 0.8rem;
    border-bottom: 0.2rem solid ${({ theme }) => theme.colors.main};
  }
`

export const HeaderCategoryLine = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 1rem 0;
  font-size: 1.4rem;
`

export const HeaderButtonBox = styled.div``

export const HeaderInfoBox = styled.div`
  background-color: #f5f5f5;
  font-size: 1.8rem;
  text-align: center;
  padding: 3rem 0;
  margin-bottom: 2rem;
  p {
    margin-bottom: 1.6rem;
    font-weight: 300;
  }
  span {
    font-weight: 700;
    cursor: pointer;
  }
`

export const PostContentBox = styled.div``

export const ContentTitle = styled.h5`
  font-weight: 700;
  width: 100%;
  padding: 0.6rem 0;
  margin-top: 1.6rem;
  border-bottom: 0.1rem solid ${({ theme }) => theme.colors.gray};
`

export const ContentBox = styled.div`
  font-size: 1.5rem;
  font-weight: 400;
  margin: 1.6rem 0 2.4rem;
  padding: 0 0.8rem;
`

export const ArticleItem = styled.div`
  margin-bottom: 1.4rem;

  a {
    color: ${({ theme }) => theme.colors.softBlue};
    text-decoration: underline;
  }
`

export const RelatedPostsBox = styled.div``

export const PostCurrentSituationBox = styled.div`
  width: 100%;
  padding: 1rem;
  margin: 1rem 0;
`

export const DebateRulesBox = styled.div`
  background-color: #f5f5f5;
  padding: 2rem 8rem;
  margin-bottom: 3rem;
  h3 {
    font-size: 2.2rem;
    font-weight: 700;
  }
  p {
    padding: 2rem;
    line-height: 1.6;
    font-size: 1.6rem;
  }
`

export const OpinionSelectBox = styled.div`
  display: flex;
  align-items: center;
  margin: 0;
  span {
    font-size: 1.6rem;
    color: black;
    font-weight: 400;
    margin: 0;
    margin-right: 1.2rem;
  }
  p {
    font-size: 1.4rem;
    color: ${({ theme }) => theme.colors.whiteGray};
    margin-left: 2.4rem;
  }
  select {
    width: auto;
    font-size: 1.6rem;
  }
`

export const OpinionSelect = styled.select<{ width?: CssValue }>`
  width: ${({ width }) => (width ? width?.getValue() : '100%')};
  margin: 0 !important;
`

export const OpinionListBox = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

export const CommentBox = styled.div`
  margin-top: 2rem;
  margin-bottom: 3rem;
`

export const BlueText = styled.span`
  color: ${({ theme }) => theme.colors.softBlue};
`

export const RedText = styled.span`
  color: ${({ theme }) => theme.colors.softPink};
`
