import React, { useEffect, useState } from 'react'
import Profile from '@components/common/profile';
import { ImgBox } from '@styles/commonStyle';
import { 
  AdminContainor, ContentBox, HeaderBox, LogoBox, MainBox, MenuBox, 
  Nav, ProfileBox,
} from './style';
import { useRouter } from 'next/router';
import AdminNav from './adminNav';

type WrapperProps = {
	children: React.ReactNode;
}

const AdminLayout = ({children}:WrapperProps) => {
  const router = useRouter()
  const [breadcrumb,setBreadcrumb] = useState('')

  useEffect(()=>{
    var result = '';
    router.pathname.slice(1).split('/').map(res => {
      result += res + ' 〉 ';
      return 0;
    })
    setBreadcrumb(result)
  },[router.pathname])


  const adminListData = [
    {
      title:{ name:'사용자 관리', imgUrl:'/img/edit_white.png'},
      list:[
        { name:'사용자 리스트', link:'/admin/user-list' },
      ]
    }, {
      title:{ name:'게시물 관리', imgUrl:'/img/form_white.png'},
      list:[
        { name:'글 쓰기', link:'/admin/write-post' },
        { name:'게시물 목록', link:'/admin/manage-post' },
      ]
    }, {
      title:{ name:'신고 관리', imgUrl:'/img/megaphone_white.png'},
      list:[
        { name:'신고 현황', link:'/report-list' },
      ]
    }
  ]

  return (
    <AdminContainor height='100%'>
      <Nav>
        <LogoBox>
          <ImgBox width='200'><img alt='logo' src='/img/temp_logo_white.png'></img></ImgBox>
        </LogoBox>

        <ProfileBox> <Profile mode='dark' link='/profile'/> </ProfileBox>

        <MenuBox> <AdminNav data = {adminListData} /> </MenuBox>
        
      </Nav>
      <MainBox>
        <HeaderBox> {!!breadcrumb && breadcrumb} </HeaderBox>
        <ContentBox> {children} </ContentBox>
      </MainBox>
    </AdminContainor>
  )
}

export default AdminLayout
