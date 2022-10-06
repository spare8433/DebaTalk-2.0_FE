import React, {  useEffect, useState } from 'react'
import { useRouter } from 'next/router'
import { 
  DebateForumDropDown, DropDown, HeaderBox, HeaderBreadcrumb, HeaderContainor, IndexContainor,
  NotiDropDown, NotiIconImgBox, ProfileBox 
} from './style'
import { ImgBox } from '@styles/commonStyle'
import  Profile  from '@components/Profile'
import user, { logOut } from '@store/slices/user'
import { useAppDispatch, useAppSelector } from '@store/store'
import { ReducerStates } from '@store/rootReducer'


const Header = () => {

  const [isDropListToggleOn,setIsDropListToggleOn] = useState(false);
  const [isNotiListToggleOn,setIsNotiListToggleOn] = useState(false);
  const [isDebateForumListToggleOn,setIsDebateForumListToggleOn] = useState(false);
  const [breadcrumb,setBreadcrumb] = useState('')

  const dispatch = useAppDispatch();
  const router = useRouter()

  const user = useAppSelector((state:ReducerStates) => state.user)

  const handleDropListClick = () => {
    setIsDropListToggleOn(!isDropListToggleOn);
    setIsNotiListToggleOn(false);
  }

  const handleNotiListClick = () => {
    setIsNotiListToggleOn(!isNotiListToggleOn);
    setIsDropListToggleOn(false);
  }

  const handleDebateForumListMouseOver = () =>{
    setIsDebateForumListToggleOn(true);
    setIsNotiListToggleOn(false);
    setIsDropListToggleOn(false);
  }

  const logout = () => {
    dispatch(logOut()).then(() => {
      router.push('/')
    });
    setIsDropListToggleOn(!isDropListToggleOn);
  }

  // Breadcrumb 세팅
  useEffect(()=>{
    var result = '';
    if(router.pathname !== '/'){
      router.pathname.slice(1).split('/').map( res => {
        result += res + ' > ';
        return 0;
      })
    }else{
      result=''
    }
    
    setBreadcrumb(result)
  },[router])

  return (
    <IndexContainor>
      <HeaderContainor>
        <HeaderBox>
          {/* 좌측 로고 */}
          <div onClick={()=>router.push('/')}><img alt='logo' src='./img/logo.png'></img></div>

          {/* 중앙 navi */}
          <ul>
            <li>홈</li>
            <li onMouseOver={()=>handleDebateForumListMouseOver()} onMouseLeave={()=>setIsDebateForumListToggleOn(false)} style={{display:'flex',position:'relative'}}>
              토론장 
              <ImgBox width='22'><img src='/img/drop-down_black.png' alt=''></img></ImgBox>
              { !isDebateForumListToggleOn? '':
                <DebateForumDropDown>
                  <ul>
                    <li onClick={()=>router.push('/debate-forum')}>토론 게시판</li>
                    <li onClick={()=>router.push('/debate-topic-board')}>주제 선정 게시판</li>
                  </ul>
                </DebateForumDropDown>
              }
            </li>
            <li onClick={()=>router.push('/community')}>커뮤니티</li>
            <li>랭킹</li>
          </ul>
          
          {/* 우측 프로필 정보 */}
          <ProfileBox>
            
            {/* 로그인시 표시되는 알림 아이콘 */}
            {user.myData !== null ? '' :
              <NotiIconImgBox width='24' onClick={()=>handleNotiListClick()} isNotification={true}>
                <img src='/img/bell_main-color.png' alt='menu'></img>
                <span></span>

                {!isNotiListToggleOn ? '' : 
                <NotiDropDown>
                  <img src='/img/drop-tail.png' alt=''></img>
                  <ul>
                    <li>abcdefg</li>
                  </ul>
                </NotiDropDown>
                } 
              </NotiIconImgBox>
            }

            {/* 알림 드랍 다운 리스트 */}
            
            
            {/* 로그인 or 프로필 사진 + 닉네임 */}
            <Profile onClick={()=>router.push('/profile')} />

            {/* 로그인시 표시되는 상세 메뉴 및 아이콘 */}
            {user.myData === null ? '' :
              <ImgBox width='18' onClick={()=>handleDropListClick()}>
                <img src='/img/menu-dots_light-gray.png' alt='menu'></img>

                {!isDropListToggleOn ? '' : 
                  <DropDown>
                    <img src='/img/drop-tail.png' alt=''></img>
                    
                    <ul>
                      <li onClick={()=> router.push('/profile')}>마이 페이지</li>
                      <li onClick={()=> logout()}>로그아웃</li>
                    </ul>
                  </DropDown>
                }
              </ImgBox>
            } 
          </ProfileBox>
        </HeaderBox>
      </HeaderContainor>

      
        {(!!breadcrumb && breadcrumb !== '>') && <HeaderBreadcrumb>{breadcrumb}</HeaderBreadcrumb>}
      
      
    </IndexContainor>
  )
}

export default Header
