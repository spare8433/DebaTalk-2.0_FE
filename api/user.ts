import { LoginParam, SignUpParam } from 'params'
import axios from 'axios'
import { axiosInstance } from '.'


// 로그인 api
export const loginAPI:axiosAPI<LoginParam> = data => axiosInstance('user').post('login', data)

// 로그아웃 api
export const logoutAPI:axiosAPI<LoginParam> = () => axiosInstance('user').post('logout')

//회원가입 api
export const sginUpAPI:axiosAPI<SignUpParam> = data => axiosInstance('user').post('', data)

// // 유저 정보 가져오기
// export const getUserAPI = data => instanceWithAuth('users').get('')

// // 프로필 사진 업데이트
// export const uploadUserImageAPI = data => instanceWithAuth('users').patch('image', data)

// // 전체 유저 정보 가져오기
// export const getAllUsersAPI = data => instanceWithAuth('users').get('all',data)