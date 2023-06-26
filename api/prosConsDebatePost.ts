import { CreateProsConsOpinionParam, CreateProsConsReplyParam } from 'types/params'
import { axiosInstance } from '.'

// prosconsDebatePost 등록
export const createProsConsDebatePostAPI: AxiosAPIwithParam<FormData> = (data) =>
  axiosInstance('proscons-debate-post').post('', data)

// prosConsDebatePost 정보 가져오기
export const getProsConsDebatePostAPI: AxiosAPIwithParam<string> = (id) =>
  axiosInstance('proscons-debate-post').get(`?postId=${id}`)

// prosConsOpinion 등록
export const createProsConsOpinionAPI: AxiosAPIwithParam<CreateProsConsOpinionParam> = (data) =>
  axiosInstance('proscons-debate-post').post('/opinion', data)

// prosConsReply 등록
export const createProsConsReplyAPI: AxiosAPIwithParam<CreateProsConsReplyParam> = (data) =>
  axiosInstance('proscons-debate-post').post('/reply', data)
