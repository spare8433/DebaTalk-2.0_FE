import { Containor } from '@styles/commonStyle'
import React, { memo } from 'react'
import styled from 'styled-components'
import { css } from 'styled-components'

const NavContainor = styled(Containor)`
  display: flex;
  padding: 0 10px;
  width: 100%;
`
const Itmes = styled.div<{current:boolean}>`
  a{
    cursor: pointer;
    &:hover,&:visited{
      color: ${({theme})=> theme.colors.main};
      font-weight: 500;
    }

    ${props => props.current ? css`
        color: ${({theme})=> theme.colors.main};
        font-weight: 500;` 
      : ''
    }
  }
  
`

type WrapperProps = {
  children: React.ReactElement,
  setValue: React.Dispatch<React.SetStateAction<any>>,
  value: string,
  category: string,
  items: React.ReactElement[]
}

const NavLinkList = ({children,setValue,value,category,items}:WrapperProps) => {
  console.log(children);
  return (
    <NavContainor>

      <Itmes current={value===children.props.value} onClick={()=>{
        setValue(children.props.value)
      }}>{children}</Itmes>

      {items.map((res,index)=>{ 
        return <Itmes key={category + 'Items' + index} current={value===res.props.value} onClick={()=>{
          setValue(res.props.value);
        }}>
          {res}
        </Itmes>
      })}
    </NavContainor>
  )
}
export default memo(NavLinkList)