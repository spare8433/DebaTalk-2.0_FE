import { CreateProsConsOpinionParam, CreateProsConsReplyParam } from 'types/params'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'
import { AxiosAPIwithParam } from 'types/axiosAPI'

type CreateProsConsDebatePostAPI = AxiosAPIwithParam<FormData>
type GetProsConsDebatePostAPI = AxiosAPIwithParam<string, ProsConsDebatePostDataState>
type CreateProsConsOpinionAPI = AxiosAPIwithParam<CreateProsConsOpinionParam>
type CreateProsConsReplyAPI = AxiosAPIwithParam<CreateProsConsReplyParam>
