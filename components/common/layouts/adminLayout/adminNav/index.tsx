import SlideMenu from '@components/common/slideMenu'
import Link from 'next/link'
import React from 'react'
import { adminListData } from '@data/staticData'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { CssRem } from 'types/customCssType'
import styled from 'styled-components'

const SlideMenuTitle = styled.div`
  text-align: center;
  display: flex;
  align-items: center;
  box-sizing: border-box;

  span {
    color: white;
  }
`

const SlideMenuList = styled.div`
  background-color: ${({ theme }) => theme.colors.deepGray};
  p {
    color: white;
    font-size: 16px;
    padding: 12px 0;
    margin: 0;
  }
`
const AdminNav = () => (
  <nav>
    {adminListData.map((menu, menuIndex) => (
      <SlideMenu
        key={`slideMenu_${menuIndex}`}
        title={
          <SlideMenuTitle>
            <NextImageBox styleOption={{ width: new CssRem(2.4), height: new CssRem(2.4) }}>
              <FitNextImage alt="user" src={menu.title.imgUrl} />
            </NextImageBox>
            <span>{menu.title.name}</span>
          </SlideMenuTitle>
        }
      >
        {menu.list.map((menuList, menuListIndex) => (
          <Link key={`slideMenuList_${menuIndex}-${menuListIndex}`} href={menuList.link}>
            <SlideMenuList>
              <p>{menuList.name}</p>
            </SlideMenuList>
          </Link>
        ))}
      </SlideMenu>
    ))}
  </nav>
)

export default AdminNav
