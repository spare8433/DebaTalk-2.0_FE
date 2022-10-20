import { axiosInstance } from '.'

// balanceDebatePost 등록
export const createIssueDebatePostAPI:axiosAPIwithParam<FormData> = data => 
  axiosInstance('issue-debate-post').post('',data)
