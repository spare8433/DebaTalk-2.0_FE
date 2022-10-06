import { instanceWithAuth} from './index'

// report 등록
export const createReportAPI = data => instanceWithAuth('report').post('',data)
