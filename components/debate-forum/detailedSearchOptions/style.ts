import { NextImageBox } from '@styles/commonStyle/imgBox'
import styled, { css } from 'styled-components'

export const CategoryBox = styled.div`
  h2,
  h3 {
    margin: 24px 0 24px;
    font-weight: 500;
  }
  h2 {
    font-size: 26px;
  }
  h3 {
    font-size: 22px;
  }
`

export const DebateMethodList = styled.ul`
  display: flex;
  margin-bottom: 4rem;
`

export const ModeItem = styled.li<{ isCurrent: boolean }>`
  list-style: none;
  padding: 0 1rem;
  margin-right: 2rem;
  a {
    font-size: 1.8rem;
    color: ${({ theme }) => theme.colors.gray};
    font-weight: 500;

    ${(props) =>
      props.isCurrent &&
      css`
        color: ${({ theme }) => theme.colors.main}!important;
        font-weight: 600;
      `}
  }
`

export const CategoryItem = styled.a<{ value: string }>`
  font-size: 1.6rem;
  padding: 0 0.8rem;
  margin-right: 1.2rem;
  font-weight: 500;
  color: ${({ theme }) => theme.colors.gray};
`

export const DetailControllBox = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 30px 0 16px;
`

export const SearchBox = styled.div`
  background-color: white;
  width: 280px;
  box-sizing: border-box;
  border: ${({ theme }) => theme.colors.gray} 0.1rem solid;
  border-radius: 0.5rem;
  display: flex;
  align-items: center;
  height: 3.2rem;
  ${NextImageBox} {
    /* margin: 0 8px; */
    margin-left: 1rem;
  }
  input {
    color: ${({ theme }) => theme.colors.deepGray};
    width: 100%;
    border: 0;
    padding: 0;
    margin: 0 1.2rem;
    outline: none;
    height: 100%;
    background: none;
    font-size: 1.6rem;
    font-weight: 400;
  }
`
