import { CreateDebateTopicOpinionParam, CreateDebateTopicReplyParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { DebateTopicPostDataState } from '@store/slices/debateTopicPost/type'

type CreateDebateTopicPostAPI = AxiosAPIwithParam<FormData>

type GetDebateTopicPostAPI = AxiosAPIwithParam<string, DebateTopicPostDataState>

type CreateDebateTopicOpinionAPI = AxiosAPIwithParam<CreateDebateTopicOpinionParam>

type CreateDebateTopicReplyAPI = AxiosAPIwithParam<CreateDebateTopicReplyParam>
