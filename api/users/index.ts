import { axiosInstance } from '@api/index'
import { GetUsersParam } from 'types/params'
import { GetUsersAPI } from './type'

// 유저 정보 가져오기
export const getUsersAPI: GetUsersAPI = (data: GetUsersParam) =>
  axiosInstance('users').post('', data)
