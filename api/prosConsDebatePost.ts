import { CreateProsConsOpinionParam, CreateProsConsReplyParam } from 'params'
import { axiosInstance } from '.'

// prosconsDebatePost 등록
export const createProsConsDebatePostAPI:axiosAPIwithParam<FormData> = data => 
  axiosInstance('proscons-debate-post').post('',data)
  
// prosConsDebatePost 정보 가져오기
export const getProsConsDebatePostAPI:axiosAPIwithParam<string> = id => 
  axiosInstance('proscons-debate-post').get(`?postId=${id}`)
  
// prosConsOpinion 등록
export const createProsConsOpinionAPI:axiosAPIwithParam<CreateProsConsOpinionParam> = data => 
  axiosInstance('proscons-debate-post').post(`/opinion`, data)

// prosConsReply 등록
export const createProsConsReplyAPI:axiosAPIwithParam<CreateProsConsReplyParam> = data => 
  axiosInstance('proscons-debate-post').post(`/reply`, data)

