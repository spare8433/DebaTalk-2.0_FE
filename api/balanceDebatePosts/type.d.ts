import { GetDebatePostsParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { BalanceDebatePostDataState } from '@store/slices/balanceDebatePost/type'

type GetBalanceDebatePostsAPI = AxiosAPIwithParam<GetDebatePostsParam, BalanceDebatePostDataState[]>
