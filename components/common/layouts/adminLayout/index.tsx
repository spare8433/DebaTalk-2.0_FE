import React from 'react'
import Profile from '@components/common/profile'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import FitNextImage from '@components/common/fitNextImage'
import { CssRem } from 'types/customCssType'
import Breadcrumb from '@components/common/breadcrumb'
import AdminNav from './adminNav'
import {
  AdminContainor,
  ContentBox,
  BreadcrumbBox,
  LogoBox,
  MainBox,
  MenuBox,
  Nav,
  ProfileBox,
} from './style'

type WrapperProps = {
  children: React.ReactNode
}

const AdminLayout = ({ children }: WrapperProps) => (
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
      <BreadcrumbBox>
        <Breadcrumb />
      </BreadcrumbBox>
      <ContentBox> {children} </ContentBox>
    </MainBox>
  </AdminContainor>
)

export default React.memo(AdminLayout)
