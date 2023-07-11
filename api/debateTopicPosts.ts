import { GetDebatePostsParam } from 'types/params'
import { axiosInstance } from '.'

// debateTopicPosts 가져오기
export const getDebateTopicPostsAPI: AxiosAPIwithParam<GetDebatePostsParam> = (data) =>
  axiosInstance('debate-topic-posts').post('', data)
