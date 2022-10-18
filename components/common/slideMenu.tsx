import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { ImgBox } from '@styles/commonStyle'

const SlideMenuBox = styled.div`
  width: 100%;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding:14px 30px;
`

const MenuListBox = styled.div`
  transition: 0.3s all linear;
`

const SlideButton = styled.div`
  cursor: pointer;
`

interface propTypes {
	title:	ReactNode,
  children: ReactNode
}

const SlideMenu = ({title,children}:propTypes) => {

  const [visible,setVisible] = useState(false);

  return(
    <SlideMenuBox>
      <TitleBox onClick={() => setVisible(!visible)}>
        {title}
        <SlideButton>
          <ImgBox width='24'>
            <img alt='slide-icon' src={visible ? '/img/slideUp_white.png' : '/img/slideDown_white.png'}></img>
          </ImgBox>
        </SlideButton>
      </TitleBox>

      <MenuListBox>
        {visible ? children : ''}
      </MenuListBox>
      
    </SlideMenuBox>
  )
}

export default SlideMenu