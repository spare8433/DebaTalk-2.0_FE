import SlideMenu from '@components/common/slideMenu'
import Link from 'next/link'
import React from 'react'
import { adminListData } from '@data/staticData'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { CssRem } from 'types/customCssType'
import { SlideMenuList, SlideMenuTitle } from '../style'

const AdminNav = () => (
  <>
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
  </>
)

export default AdminNav
