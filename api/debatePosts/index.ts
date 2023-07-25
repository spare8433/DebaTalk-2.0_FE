import { axiosInstance } from '@api/index'
import { GetHotDebatePostsAPI, GetDebateKeywordsAPI, GetIntegratedDebatePostsAPI } from './type'

// 메인 craousel 키워드 가져오기
export const getDebateKeywordsAPI: GetDebateKeywordsAPI = (initData = { limit: 12 }) =>
  axiosInstance('debate-posts').get(`keywords?limit=${initData.limit}`)

// 메인 노출 토론 게시물
export const getHotDebatePostsAPI: GetHotDebatePostsAPI = () =>
  axiosInstance('debate-posts').get('hot-debate-posts')

// 토론 게시물 통합 검색
export const getIntegratedDebatePostsAPI: GetIntegratedDebatePostsAPI = (data) =>
  axiosInstance('debate-posts').post(`integrate-search`, data)
