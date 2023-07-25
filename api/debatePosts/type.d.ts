import {
  DebateKeywordsData,
  HotDebatePosts,
  IntegratedDebatePostData,
} from '@store/slices/debatePosts/type'
import { GetDebateKeywords, GetIntegratedDebatePostsParam } from 'types/params'
import { AxiosAPI, AxiosAPIwithParam } from 'types/axiosAPI'

type GetDebateKeywordsAPI = AxiosAPIwithParam<GetDebateKeywords, DebateKeywordsData>

type GetHotDebatePostsAPI = AxiosAPI<HotDebatePosts>

type GetIntegratedDebatePostsAPI = AxiosAPIwithParam<
  GetIntegratedDebatePostsParam,
  IntegratedDebatePostData
>
