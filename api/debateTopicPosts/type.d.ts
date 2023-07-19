import { GetDebatePostsParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { DebateTopicPostDataState } from '@store/slices/debateTopicPost/type'

type GetDebateTopicPostsAPI = AxiosAPIwithParam<GetDebatePostsParam, DebateTopicPostDataState[]>
