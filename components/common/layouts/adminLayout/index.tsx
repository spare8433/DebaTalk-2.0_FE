import React from 'react'
import Profile from '@components/common/profile'
import { useRouter } from 'next/router'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { CssRem } from 'types/customCssType'
import AdminNav from './adminNav'
import {
  AdminContainor,
  ContentBox,
  HeaderBox,
  LogoBox,
  MainBox,
  MenuBox,
  Nav,
  ProfileBox,
} from './style'

type WrapperProps = {
  children: React.ReactNode
}

const AdminLayout = ({ children }: WrapperProps) => {
  const router = useRouter()

  return (
    <AdminContainor>
      <Nav>
        <LogoBox>
          <Link href="/admin">
            <NextImageBox styleOption={{ width: new CssRem(20), height: new CssRem(4.8) }}>
              <FitNextImage alt="logo" src="/img/temp_logo_white.png" />
            </NextImageBox>
          </Link>
        </LogoBox>

        <ProfileBox>
          <Profile mode="dark" link="/profile" />
        </ProfileBox>
        <MenuBox>
          <AdminNav />
        </MenuBox>
      </Nav>
      <MainBox>
        <HeaderBox>
          {router.pathname
            .slice(1)
            .split('/')
            .map((res, index, arr) => {
              let href = '/'
              for (let count = 0; count <= index; count += 1) {
                href += `${arr[count]}/`
              }
              return (
                <>
                  <Link href={href}>{res}</Link>
                  <span>{'>'}</span>
                </>
              )
            })}
        </HeaderBox>
        <ContentBox> {children} </ContentBox>
      </MainBox>
    </AdminContainor>
  )
}

export default AdminLayout
