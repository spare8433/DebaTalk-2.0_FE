import { axiosInstance } from '@api/index'
import { GetProsConsDebatePostsAPI } from './type'

// prosConsDebatePosts 가져오기
export const getProsConsDebatePostsAPI: GetProsConsDebatePostsAPI = (data) =>
  axiosInstance('proscons-debate-posts').post('', data)
