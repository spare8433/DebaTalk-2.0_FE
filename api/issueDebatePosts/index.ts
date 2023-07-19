import { axiosInstance } from '@api/index'
import { GetIssueDebatePostsAPI } from './type'

// issueDebatePosts 가져오기
export const getIssueDebatePostsAPI: GetIssueDebatePostsAPI = (data) =>
  axiosInstance('issue-debate-posts').post('', data)
