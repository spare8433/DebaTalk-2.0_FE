import React, { useState } from 'react'
import { useRouter } from 'next/router'
import Profile from '@components/common/profile'
import { logOut } from '@store/slices/user'
import { useAppDispatch, useAppSelector } from '@store/store'
import { ReducerStates } from '@store/rootReducer'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssRem } from 'types/customCssType'
import Breadcrumb from '@components/common/breadcrumb'
import FitNextImage from '@components/common/fitNextImage'
import { LessStyleBtn } from '@styles/commonStyle/buttons'
import {
  DebateForumDropDown,
  DropDown,
  HeaderBox,
  BreadcrumbBox,
  HeaderContainor,
  IndexContainor,
  NotiDropDown,
  NotiIconImgBox,
  ProfileBox,
  MainTopMenu,
} from './style'

const Header = () => {
  const [isDropListToggleOn, setIsDropListToggleOn] = useState(false)
  const [isNotiListToggleOn, setIsNotiListToggleOn] = useState(false)
  const [isDebateForumListToggleOn, setIsDebateForumListToggleOn] = useState(false)

  const dispatch = useAppDispatch()
  const router = useRouter()

  const user = useAppSelector((state: ReducerStates) => state.user)

  const handleDropListClick = () => {
    setIsDropListToggleOn(!isDropListToggleOn)
    setIsNotiListToggleOn(false)
  }

  const handleNotiListClick = () => {
    setIsNotiListToggleOn(!isNotiListToggleOn)
    setIsDropListToggleOn(false)
  }

  const handleDebateForumListMouseOver = () => {
    setIsDebateForumListToggleOn(true)
    setIsNotiListToggleOn(false)
    setIsDropListToggleOn(false)
  }

  const logout = () => {
    dispatch(logOut()).then(() => {
      router.push('/')
    })
    setIsDropListToggleOn(!isDropListToggleOn)
  }

  return (
    <IndexContainor>
      <HeaderContainor>
        <HeaderBox>
          {/* 좌측 로고 */}
          <Link href="/">
            <NextImageBox styleOption={{ width: new CssRem(25), height: new CssRem(6) }}>
              <FitNextImage alt="logo" src="/img/logo.png" />
            </NextImageBox>
          </Link>

          {/* 중앙 메뉴바 */}
          <MainTopMenu>
            <li>홈</li>
            <li
              onMouseOver={() => handleDebateForumListMouseOver()}
              onFocus={() => handleDebateForumListMouseOver()}
              onMouseOut={() => setIsDebateForumListToggleOn(false)}
              onBlur={() => setIsDebateForumListToggleOn(false)}
              style={{ display: 'flex', position: 'relative' }}
            >
              토론장
              <NextImageBox>
                <FitNextImage src="/img/drop-down_black.png" alt="" />
              </NextImageBox>
              {isDebateForumListToggleOn && (
                <DebateForumDropDown>
                  <ul>
                    <li>
                      <Link href="/debate-forum">토론 게시판</Link>
                    </li>
                    <li>
                      <Link href="/debate-topic-board">주제 선정 게시판</Link>
                    </li>
                  </ul>
                </DebateForumDropDown>
              )}
            </li>

            <li>
              <Link href="/community">커뮤니티</Link>
            </li>
            <li>
              <Link href="/">랭킹</Link>
            </li>
          </MainTopMenu>

          {/* 우측 프로필 정보 */}
          <ProfileBox>
            {/* 로그인시 표시되는 알림 아이콘 */}
            {user.myData && (
              <NotiIconImgBox onClick={() => handleNotiListClick()} isNotification>
                <NextImageBox styleOption={{ width: new CssRem(2.6), height: new CssRem(2.6) }}>
                  <FitNextImage src="/img/bell_main-color.png" alt="menu" />
                </NextImageBox>
                <span />

                {isNotiListToggleOn && (
                  <NotiDropDown>
                    <ul>
                      <li>가짜 알림</li>
                    </ul>
                  </NotiDropDown>
                )}
              </NotiIconImgBox>
            )}

            {/* 알림 드랍 다운 리스트 */}

            {/* 로그인 or 프로필 사진 + 닉네임 */}
            <Profile link="./profile" />

            {/* 로그인시 표시되는 상세 메뉴 및 아이콘 */}
            {user.myData !== null && (
              <NextImageBox
                styleOption={{ width: new CssRem(1.8), height: new CssRem(1.8) }}
                onClick={() => handleDropListClick()}
              >
                <FitNextImage src="/img/menu-dots_light-gray.png" alt="menu" />

                {isDropListToggleOn && (
                  <DropDown>
                    <ul>
                      <li>
                        <Link href="/profile">마이 페이지</Link>
                      </li>
                      <li>
                        <LessStyleBtn onClick={() => logout()}>로그아웃</LessStyleBtn>
                      </li>
                    </ul>
                  </DropDown>
                )}
              </NextImageBox>
            )}
          </ProfileBox>
        </HeaderBox>
      </HeaderContainor>

      <BreadcrumbBox>
        <Breadcrumb />
      </BreadcrumbBox>
    </IndexContainor>
  )
}

export default Header
