import { axiosInstance } from '.'

// balanceDebatePost 등록
export const createBalanceDebatePostAPI:axiosAPIwithParam<FormData> = data => 
  axiosInstance('balance-debate-post').post('',data)
