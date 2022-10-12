import { GetDebateKeywords } from 'params'
import { axiosInstance } from '.'

// 메인 craousel 키워드 가져오기
export const getDebateKeywordsAPI:axiosAPI<GetDebateKeywords> = (initData = {limit:12}) => axiosInstance('debate-posts').get(
  `keywords?limit=${initData.limit}`
)

// 메인 노출 토론 게시물
export const getDebateHotTopicsAPI:axiosAPI = () => axiosInstance('debate-posts').get(`hotTopics`)

