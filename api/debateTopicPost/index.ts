import { axiosInstance } from '@api/index'
import {
  CreateDebateTopicOpinionAPI,
  CreateDebateTopicPostAPI,
  CreateDebateTopicReplyAPI,
  GetDebateTopicPostAPI,
} from './type'

// DebateTopicDebatePost 등록
export const createDebateTopicPostAPI: CreateDebateTopicPostAPI = (data) =>
  axiosInstance('debate-topic-post').post('', data)

// DebateTopicDebatePost 정보 가져오기
export const getDebateTopicPostAPI: GetDebateTopicPostAPI = (id) =>
  axiosInstance('debate-topic-post').get(`?postId=${id}`)

// DebateTopicOpinion 등록
export const createDebateTopicOpinionAPI: CreateDebateTopicOpinionAPI = (data) =>
  axiosInstance('debate-topic-post').post('/opinion', data)

// DebateTopicReply 등록
export const createDebateTopicReplyAPI: CreateDebateTopicReplyAPI = (data) =>
  axiosInstance('debate-topic-post').post('/reply', data)
