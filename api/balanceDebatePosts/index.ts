import { axiosInstance } from '@api/index'
import { GetBalanceDebatePostsAPI } from './type'

// balanceDebatePosts 가져오기
export const getBalanceDebatePostsAPI: GetBalanceDebatePostsAPI = (data) =>
  axiosInstance('balance-debate-posts').post('', data)
