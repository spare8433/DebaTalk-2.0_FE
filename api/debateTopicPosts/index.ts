import { axiosInstance } from '@api/index'
import { GetDebateTopicPostsAPI } from './type'

// debateTopicPosts 가져오기
export const getDebateTopicPostsAPI: GetDebateTopicPostsAPI = (data) =>
  axiosInstance('debate-topic-posts').post('', data)
