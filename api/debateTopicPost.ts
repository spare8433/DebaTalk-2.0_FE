import { CreateDebateTopicOpinionParam, CreateDebateTopicReplyParam } from 'types/params'
import { axiosInstance } from '.'

// IssueDebatePost 등록
export const createDebateTopicPostAPI: AxiosAPIwithParam<FormData> = (data) =>
  axiosInstance('debate-topic-post').post('', data)

// DebateTopicDebatePost 정보 가져오기
export const getDebateTopicPostAPI: AxiosAPIwithParam<string> = (id) =>
  axiosInstance('debate-topic-post').get(`?postId=${id}`)

// DebateTopicOpinion 등록
export const createDebateTopicOpinionAPI: AxiosAPIwithParam<CreateDebateTopicOpinionParam> = (
  data,
) => axiosInstance('debate-topic-post').post('/opinion', data)

// DebateTopicReply 등록
export const createDebateTopicReplyAPI: AxiosAPIwithParam<CreateDebateTopicReplyParam> = (data) =>
  axiosInstance('debate-topic-post').post('/reply', data)
