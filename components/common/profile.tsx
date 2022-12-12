import React, { memo, useEffect } from 'react'
import { ImgBox } from '@styles/commonStyle'
import styled from 'styled-components'
import { ReducerStates } from '@store/rootReducer'
import { useAppDispatch, useAppSelector } from '@store/store'
import { useRouter } from 'next/router'
import Link from 'next/link'

interface ProfileTheme {
	mode: 'dark' | 'white'
}

const ProfileContainor = styled.div<ProfileTheme>`
	display: flex;
	align-items: center;
	/* justify-content: center; */
	font-size: 18px;
	color : ${({mode,theme})=> mode === 'dark' ? 'white' : theme.colors.gray_1};
`

const ProfileLine = styled.div`
  display: flex;
  align-items: center;
  span{
    color: ${({theme})=> theme.colors.gray_1};
    margin-left: 10px;
  }
`

const LoginLineStyle = styled.div`
	cursor: pointer;
`

interface propTypes {
	mode?: 'dark' | 'white',
	link:	string
}

const Profile = ({mode = 'white', link}:propTypes) => {
	const user = useAppSelector((state:ReducerStates) => state.user);

  return (
    <ProfileContainor mode={mode}>
			{user.myData !== null ? 
				<ProfileLine>
					<Link href={link}>
						<>
							<ImgBox width='32' shadow={true}>
								<img alt='userImg' src={user.myData.imgUrl ? user.myData.imgUrl : '/img/default_user.png'}></img>
							</ImgBox>
							<span>{!!user && user.myData.nickname}</span>
						</>
					</Link>
					
				</ProfileLine> 
			: 
				<Link href='/login'>
					<LoginLineStyle>로그인</LoginLineStyle>
				</Link>
			}
		</ProfileContainor>
  )
}

export default memo(Profile)