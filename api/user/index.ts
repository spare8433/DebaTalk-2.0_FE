import { AxiosAPI } from 'types/axiosAPI'
import { axiosInstance } from '@api/index'
import { LoginAPI, SignUpAPI } from './type'

// 로그인 api
export const loginAPI: LoginAPI = (data) => axiosInstance('user').post('login', data)

// 로그아웃 api
export const logoutAPI: AxiosAPI = () => axiosInstance('user').post('logout')

// 회원가입 api
export const signUpAPI: SignUpAPI = (data) => axiosInstance('user').post('', data)

// 유저 정보 가져오기
export const getUserAPI: AxiosAPI = () => axiosInstance('user').get('')

// // 프로필 사진 업데이트
// export const uploadUserImageAPI = data => instanceWithAuth('users').patch('image', data)

// // 전체 유저 정보 가져오기
// export const getAllUsersAPI = data => instanceWithAuth('users').get('all',data)
