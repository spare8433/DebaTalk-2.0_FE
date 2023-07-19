import { axiosInstance } from '@api/index'
import {
  CreateIssueDebatePostAPI,
  CreateIssueOpinionAPI,
  CreateIssueReplyAPI,
  GetIssueDebatePostAPI,
} from './type'

// IssueDebatePost 등록
export const createIssueDebatePostAPI: CreateIssueDebatePostAPI = (data) =>
  axiosInstance('issue-debate-post').post('', data)

// IssueDebatePost 정보 가져오기
export const getIssueDebatePostAPI: GetIssueDebatePostAPI = (id) =>
  axiosInstance('issue-debate-post').get(`?postId=${id}`)

// IssueOpinion 등록
export const createIssueOpinionAPI: CreateIssueOpinionAPI = (data) =>
  axiosInstance('issue-debate-post').post('/opinion', data)

// IssueReply 등록
export const createIssueReplyAPI: CreateIssueReplyAPI = (data) =>
  axiosInstance('issue-debate-post').post('/reply', data)
