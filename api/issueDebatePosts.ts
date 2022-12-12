import { GetDebatePostsParam } from 'params'
import { axiosInstance } from '.'

// issueDebatePosts 가져오기
export const getIssueDebatePostsAPI:axiosAPIwithParam<GetDebatePostsParam> = data => 
  axiosInstance('issue-debate-posts').post('',data)