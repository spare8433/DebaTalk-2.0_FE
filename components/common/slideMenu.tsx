import { NextImageBox } from '@styles/commonStyle/imgBox'
import React, { ReactNode, useState } from 'react'
import styled from 'styled-components'
import { CssRem } from 'types/customCssType'
import FitNextImage from './fitNextImage'

const SlideMenuBox = styled.div`
  width: 100%;
`

const TitleBox = styled.div`
  display: flex;
  justify-content: space-between;
  padding: 14px 30px;
`

const MenuListBox = styled.div`
  transition: 0.3s all linear;
`

const SlideButton = styled.div`
  cursor: pointer;
`

interface PropTypes {
  title: ReactNode
  children: ReactNode
}

const SlideMenu = ({ title, children }: PropTypes) => {
  const [visible, setVisible] = useState(false)

  return (
    <SlideMenuBox>
      <TitleBox onClick={() => setVisible(!visible)}>
        {title}
        <SlideButton>
          <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
            <FitNextImage
              alt="slide-icon"
              src={visible ? '/img/slideUp_white.png' : '/img/slideDown_white.png'}
            />
          </NextImageBox>
        </SlideButton>
      </TitleBox>

      <MenuListBox>{visible ? children : ''}</MenuListBox>
    </SlideMenuBox>
  )
}

export default SlideMenu
