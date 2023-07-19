import { axiosInstance } from '@api/index'
import {
  CreateBalanceDebatePostAPI,
  CreateBalanceOpinionAPI,
  CreateBalanceReplyAPI,
  GetBalanceDebatePostAPI,
} from './type'

// balanceDebatePost 등록
export const createBalanceDebatePostAPI: CreateBalanceDebatePostAPI = (data) =>
  axiosInstance('balance-debate-post').post('', data)

// balanceDebatePost 정보 가져오기
export const getBalanceDebatePostAPI: GetBalanceDebatePostAPI = (id) =>
  axiosInstance('balance-debate-post').get(`?postId=${id}`)

// balanceOpinion 등록
export const createBalanceOpinionAPI: CreateBalanceOpinionAPI = (data) =>
  axiosInstance('balance-debate-post').post('/opinion', data)

// balanceReply 등록
export const createBalanceReplyAPI: CreateBalanceReplyAPI = (data) =>
  axiosInstance('balance-debate-post').post('/reply', data)
