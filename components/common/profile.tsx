import React from 'react'
import styled from 'styled-components'
import { ReducerStates } from '@store/rootReducer'
import { useAppSelector } from '@store/store'
import Link from 'next/link'
import { NextImageBox } from '@styles/commonStyle/imgBox'
import { CssPercent, CssRem, CssString } from 'types/customCssType'
import getConfig from 'next/config'
import FitNextImage from './fitNextImage'

interface ProfileTheme {
  mode: 'dark' | 'white'
}

const ProfileContainor = styled.div<ProfileTheme>`
  display: flex;
  align-items: center;
  /* justify-content: center; */
  font-size: 1.8rem;

  a {
    display: flex;
    align-items: center;
    color: ${({ mode, theme }) => (mode === 'dark' ? 'white' : theme.colors.mainBlack)};
  }
`

const ProfileLine = styled.div`
  width: 100%;

  span {
    color: inherit;
    margin-left: 2rem;
  }
`

const LoginLine = styled.div`
  width: 100%;
  a {
    color: inherit;
    justify-content: center;
  }
`

interface PropTypes {
  mode?: 'dark' | 'white'
  link: string
}

const Profile = ({ mode = 'white', link }: PropTypes) => {
  const user = useAppSelector((state: ReducerStates) => state.user)
  const { publicRuntimeConfig } = getConfig()
  const APISeverUrl = publicRuntimeConfig.API_SERVER_URL

  return (
    <ProfileContainor mode={mode}>
      {user.myData !== null ? (
        <ProfileLine>
          <Link href={link}>
            <>
              <NextImageBox
                styleOption={{
                  width: new CssRem(3.2),
                  height: new CssRem(3.2),
                  boxShadow: new CssString('rgba(99, 99, 99, 0.3) 0px 2px 8px 0px'),
                  borderRadius: new CssPercent(100),
                }}
              >
                <FitNextImage
                  alt="userImg"
                  src={
                    user.myData.imgUrl
                      ? `${APISeverUrl}${user.myData.imgUrl}`
                      : '/img/default_user.png'
                  }
                />
              </NextImageBox>
              <span>{user.myData.nickname}</span>
            </>
          </Link>
        </ProfileLine>
      ) : (
        <LoginLine>
          <Link href="/login">로그인</Link>
        </LoginLine>
      )}
    </ProfileContainor>
  )
}

export default Profile
