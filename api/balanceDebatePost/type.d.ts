import {
  BalanceDebateOpinionDataState,
  BalanceDebatePostDataState,
} from '@store/slices/balanceDebatePost/type'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { CreateBalanceOpinionParam, CreateBalanceReplyParam } from 'types/params'

type CreateBalanceDebatePostAPI = AxiosAPIwithParam<FormData>

type GetBalanceDebatePostAPI = AxiosAPIwithParam<string, BalanceDebatePostDataState>

type CreateBalanceOpinionAPI = AxiosAPIwithParam<
  CreateBalanceOpinionParam,
  BalanceDebateOpinionDataState
>

type CreateBalanceReplyAPI = AxiosAPIwithParam<CreateBalanceReplyParam>
