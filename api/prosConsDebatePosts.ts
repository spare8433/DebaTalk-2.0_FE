import { GetDebatePostsParam } from 'types/params'
import { axiosInstance } from '.'

// prosConsDebatePosts 가져오기
export const getProsConsDebatePostsAPI: AxiosAPIwithParam<GetDebatePostsParam> = (data) =>
  axiosInstance('proscons-debate-posts').post('', data)
