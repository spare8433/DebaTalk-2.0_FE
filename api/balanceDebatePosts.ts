import { GetDebatePostsParam } from 'params'
import { axiosInstance } from '.'

// balanceDebatePosts 가져오기
export const getBalanceDebatePostsAPI:axiosAPIwithParam<GetDebatePostsParam> = data => 
  axiosInstance('balance-debate-posts').post('',data)