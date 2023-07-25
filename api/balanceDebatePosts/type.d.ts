import { GetDebatePostsParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { BalanceDebatePostsData } from '@store/slices/balanceDebatePosts/type'

type GetBalanceDebatePostsAPI = AxiosAPIwithParam<GetDebatePostsParam, BalanceDebatePostsData>
