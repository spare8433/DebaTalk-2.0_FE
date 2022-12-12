import { CreateIssueOpinionParam, CreateIssueReplyParam } from 'params'
import { axiosInstance } from '.'

// IssueDebatePost 등록
export const createIssueDebatePostAPI:axiosAPIwithParam<FormData> = data => 
  axiosInstance('issue-debate-post').post('', data)

// IssueDebatePost 정보 가져오기
export const getIssueDebatePostAPI:axiosAPIwithParam<string> = id => 
  axiosInstance('issue-debate-post').get(`?postId=${id}`)
  
// IssueOpinion 등록
export const createIssueOpinionAPI:axiosAPIwithParam<CreateIssueOpinionParam> = data => 
  axiosInstance('issue-debate-post').post(`/opinion`, data)

// IssueReply 등록
export const createIssueReplyAPI:axiosAPIwithParam<CreateIssueReplyParam> = data => 
  axiosInstance('issue-debate-post').post(`/reply`, data)
