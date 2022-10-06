import React, { memo, useEffect } from 'react'
import { CircleImgBox } from '@styles/commonStyle'
import styled from 'styled-components'
import { ReducerStates } from '@store/rootReducer'
import { useAppDispatch, useAppSelector } from '@store/store'
import { useRouter } from 'next/router'

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
	onClick():void
}

const Profile = ({mode = 'white', onClick}:propTypes) => {
	const router = useRouter()
	const user = useAppSelector((state:ReducerStates) => state.user);
	const dispatch = useAppDispatch()

	// useEffect(() => {
	// 	console.log(1);
	// 	if (user.myData !== null) return; // 포스트가 존재하면 아예 요청을 하지 않음
  //   dispatch(fetchUserProfileRequest())
	// 	console.log(2);
	// }, [])
	
	// console.log(user);

  return (
    <ProfileContainor mode={mode}>
			{user.myData !== null ? 
				<ProfileLine onClick={onClick}>
					<CircleImgBox width='32'><img alt='userImg' src={user.myData.imgUrl ? user.myData.imgUrl : './img/default_user.png'}></img></CircleImgBox>
					<span>{!!user && user.myData.nickname}</span>
				</ProfileLine> 
			: 
				<LoginLineStyle onClick={()=>{router.push('/login')}}>로그인</LoginLineStyle>}

		</ProfileContainor>
  )
}

export default memo(Profile)