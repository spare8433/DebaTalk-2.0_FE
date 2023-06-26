import { CreateBalanceOpinionParam, CreateBalanceReplyParam } from 'types/params'
import { axiosInstance } from '.'

// balanceDebatePost 등록
export const createBalanceDebatePostAPI: AxiosAPIwithParam<FormData> = (data) =>
  axiosInstance('balance-debate-post').post('', data)

// balanceDebatePost 정보 가져오기
export const getBalanceDebatePostAPI: AxiosAPIwithParam<string> = (id) =>
  axiosInstance('balance-debate-post').get(`?postId=${id}`)

// balanceOpinion 등록
export const createBalanceOpinionAPI: AxiosAPIwithParam<CreateBalanceOpinionParam> = (data) =>
  axiosInstance('balance-debate-post').post('/opinion', data)

// balanceReply 등록
export const createBalanceReplyAPI: AxiosAPIwithParam<CreateBalanceReplyParam> = (data) =>
  axiosInstance('balance-debate-post').post('/reply', data)
