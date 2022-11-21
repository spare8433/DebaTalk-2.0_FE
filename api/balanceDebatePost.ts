import { CreateBalanceOpinionParam, CreateBalanceReplyParam } from 'params'
import { axiosInstance } from '.'

// balanceDebatePost 등록
export const createBalanceDebatePostAPI:axiosAPIwithParam<FormData> = data => 
  axiosInstance('balance-debate-post').post('', data)

// balanceDebatePost 정보 가져오기
export const getBalanceDebatePostAPI:axiosAPIwithParam<string> = id => 
  axiosInstance('balance-debate-post').get(`?postId=${id}`)
  
// balanceOpinion 등록
export const createBalanceOpinionAPI:axiosAPIwithParam<CreateBalanceOpinionParam> = data => 
  axiosInstance('balance-debate-post').post(`/opinion`, data)

// balanceReply 등록
export const createBalanceReplyAPI:axiosAPIwithParam<CreateBalanceReplyParam> = data => 
  axiosInstance('balance-debate-post').post(`/reply`, data)
