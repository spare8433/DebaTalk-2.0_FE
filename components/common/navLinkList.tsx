import React from 'react'
import styled, { css } from 'styled-components'

const NavContainor = styled.div`
  display: flex;
  padding: 0 10px;
  width: 100%;
  height: 100%;
`
const Itmes = styled.div<{ current: boolean }>`
  a {
    cursor: pointer;
    &:hover,
    &:visited {
      color: ${({ theme }) => theme.colors.main};
      font-weight: 500;
    }

    ${(props) =>
      props.current &&
      css`
        color: ${({ theme }) => theme.colors.main};
        font-weight: 500;
      `}
  }
`

type Props = {
  children?: React.ReactElement
  setValue: React.Dispatch<React.SetStateAction<any>>
  value: string
  category: string
  items: React.ReactElement[]
}

const NavLinkList = ({ children, setValue, value, category, items }: Props) => (
  <NavContainor>
    {children && (
      <Itmes
        current={value === children.props.value}
        onClick={() => setValue(children.props.value)}
      >
        {children}
      </Itmes>
    )}

    {items.map((res, index) => (
      <Itmes
        key={`${category}Items${index}`}
        current={value === res.props.value}
        onClick={() => setValue(res.props.value)}
      >
        {res}
      </Itmes>
    ))}
  </NavContainor>
)
export default NavLinkList
