import SlideMenu from '@components/common/slideMenu';
import { ImgBox } from '@styles/commonStyle';
import Link from 'next/link';
import React from 'react'
import { SlideMenuList, SlideMenuTitle } from './style';

type WrapperProps = {
	data: {
    title: { name: string, imgUrl:string },
    list: { name: string, link:string }[],
  }[];
}

const AdminNav = ({data}:WrapperProps) => {
  
  return (
    <>
      {data.map((menu, menuIndex) => {
        return(
          <SlideMenu key={'slideMenu_' + menuIndex} title={
            <SlideMenuTitle>
              <ImgBox width='24'><img alt='user' src={menu.title.imgUrl}></img></ImgBox>
              <span>{menu.title.name}</span>
            </SlideMenuTitle>
          }>
            {menu.list.map((menuList, menuListIndex) =>
              <Link key={'slideMenuList_' + menuIndex + '-'+ menuListIndex} href={menuList.link}>
                <a><SlideMenuList><p>{menuList.name}</p></SlideMenuList></a>
              </Link>
            )}
          </SlideMenu>
        )
      })}
    </>
  )
}

export default AdminNav