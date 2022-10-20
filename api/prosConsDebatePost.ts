import { axiosInstance } from '.'

// balanceDebatePost 등록
export const createProsConsDebatePostAPI:axiosAPIwithParam<FormData> = data => 
  axiosInstance('proscons-debate-post').post('',data)
