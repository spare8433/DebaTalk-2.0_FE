import { GetDebateKeywords, GetDebatePostsParam } from 'types/params'
import { axiosInstance } from '.'

// 토론 게시물 목록 가져오기
export const getDebatePostsAPI: AxiosAPIwithParam<GetDebatePostsParam> = (data) =>
  axiosInstance('debate-posts').post('', data)

// 메인 craousel 키워드 가져오기
export const getDebateKeywordsAPI: AxiosAPIwithParam<GetDebateKeywords> = (
  initData = { limit: 12 },
) => axiosInstance('debate-posts').get(`keywords?limit=${initData.limit}`)

// 메인 노출 토론 게시물
export const getDebateHotTopicsAPI: AxiosAPI = () => axiosInstance('debate-posts').get('hotTopics')

// 토론 게시물 통합 검색
export const getIntegrateDebatePostsAPI: AxiosAPIwithParam<string> = (searchText) =>
  axiosInstance('debate-posts').get(`integrate-search?searchText=${searchText}`)
