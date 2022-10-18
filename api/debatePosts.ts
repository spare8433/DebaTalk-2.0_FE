import { GetDebateKeywords, GetDebatePostsParam } from 'params'
import { axiosInstance } from '.'

// 토론 게시물 목록 가져오기
export const getDebatePostsAPI:axiosAPIwithParam<GetDebatePostsParam> = (data) => axiosInstance('debate-posts').post('', data)

// 메인 craousel 키워드 가져오기
export const getDebateKeywordsAPI:axiosAPIwithParam<GetDebateKeywords> = (initData = {limit:12}) => axiosInstance('debate-posts').get(
  `keywords?limit=${initData.limit}`
)

// 메인 노출 토론 게시물
export const getDebateHotTopicsAPI:axiosAPI = () => axiosInstance('debate-posts').get(`hotTopics`)

