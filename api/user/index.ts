import { AxiosAPI } from 'types/axiosAPI'
import { axiosInstance } from '@api/index'
import {
  LoginAPI,
  SignUpAPI,
  FindUserIdAPI,
  GetAuthCodeAPI,
  CheckAuthCodeAPI,
  UpdatePasswordAPI,
  CheckDuplicateIdApi,
  CheckDuplicateEmailApi,
} from './type'

// 로그인 api
export const loginAPI: LoginAPI = (data) => {
  console.log(axiosInstance('user').getUri())
  return axiosInstance('user').post('login', data)
}

// 로그아웃 api
export const logoutAPI: AxiosAPI = () => axiosInstance('user').get('logout')

// 회원가입 api
export const signUpAPI: SignUpAPI = (data) => axiosInstance('user').post('', data)

// 유저 정보 가져오기
export const getUserAPI: AxiosAPI = () => axiosInstance('user').get('')

// 유저 id 찾기
export const getFindUserIdAPI: FindUserIdAPI = (data) => axiosInstance('user').post('find-id', data)

// 비밀번호 재설정 인증 코드 발급
export const getAuthCodeAPI: GetAuthCodeAPI = (data) =>
  axiosInstance('user').post('send-authcode', data)

// 비밀번호 재설정 인증 코드 확인
export const checkAuthCodeAPI: CheckAuthCodeAPI = (data) =>
  axiosInstance('user').post('check-authcode', data)

// 비밀번호 재설정 인증 코드 확인
export const updatePasswordAPI: UpdatePasswordAPI = (data) =>
  axiosInstance('user').patch('update-password', data)

// 유저 정보 가져오기
export const checkDuplicateIdAPI: CheckDuplicateIdApi = ({ userId }) =>
  axiosInstance('user').get(`check-duplicate-id?userId=${userId}`)

// 유저 정보 가져오기
export const checkDuplicateEmailAPI: CheckDuplicateEmailApi = ({ email }) =>
  axiosInstance('user').get(`check-duplicate-email?email=${email}`)

// // 프로필 사진 업데이트
// export const uploadUserImageAPI = data => instanceWithAuth('users').patch('image', data)

// // 전체 유저 정보 가져오기
// export const getAllUsersAPI = data => instanceWithAuth('users').get('all',data)
