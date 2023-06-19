import { GetDebatePostsParam } from 'params'
import { axiosInstance } from '.'

// prosConsDebatePosts 가져오기
export const getProsConsDebatePostsAPI: AxiosAPIwithParam<GetDebatePostsParam> = (data) =>
  axiosInstance('prosCons-debate-posts').post('', data)
