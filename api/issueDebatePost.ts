import { CreateIssueOpinionParam, CreateIssueReplyParam } from 'types/params'
import { axiosInstance } from '.'

// IssueDebatePost 등록
export const createIssueDebatePostAPI: AxiosAPIwithParam<FormData> = (data) =>
  axiosInstance('issue-debate-post').post('', data)

// IssueDebatePost 정보 가져오기
export const getIssueDebatePostAPI: AxiosAPIwithParam<string> = (id) =>
  axiosInstance('issue-debate-post').get(`?postId=${id}`)

// IssueOpinion 등록
export const createIssueOpinionAPI: AxiosAPIwithParam<CreateIssueOpinionParam> = (data) =>
  axiosInstance('issue-debate-post').post('/opinion', data)

// IssueReply 등록
export const createIssueReplyAPI: AxiosAPIwithParam<CreateIssueReplyParam> = (data) =>
  axiosInstance('issue-debate-post').post('/reply', data)
