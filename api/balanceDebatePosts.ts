import { GetDebatePostsParam } from 'types/params'
import { axiosInstance } from '.'

// balanceDebatePosts 가져오기
export const getBalanceDebatePostsAPI: AxiosAPIwithParam<GetDebatePostsParam> = (data) =>
  axiosInstance('balance-debate-posts').post('', data)
