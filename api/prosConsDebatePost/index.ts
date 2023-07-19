import { axiosInstance } from '@api/index'
import {
  CreateProsConsDebatePostAPI,
  CreateProsConsOpinionAPI,
  CreateProsConsReplyAPI,
  GetProsConsDebatePostAPI,
} from './type'

// prosconsDebatePost 등록
export const createProsConsDebatePostAPI: CreateProsConsDebatePostAPI = (data) =>
  axiosInstance('proscons-debate-post').post('', data)

// prosConsDebatePost 정보 가져오기
export const getProsConsDebatePostAPI: GetProsConsDebatePostAPI = (id) =>
  axiosInstance('proscons-debate-post').get(`?postId=${id}`)

// prosConsOpinion 등록
export const createProsConsOpinionAPI: CreateProsConsOpinionAPI = (data) =>
  axiosInstance('proscons-debate-post').post('/opinion', data)

// prosConsReply 등록
export const createProsConsReplyAPI: CreateProsConsReplyAPI = (data) =>
  axiosInstance('proscons-debate-post').post('/reply', data)
