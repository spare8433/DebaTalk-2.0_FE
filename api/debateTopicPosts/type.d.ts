import { GetIntegratedDebatePostsParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { DebateTopicPostsData } from '@store/slices/debateTopicPosts/type'

type GetDebateTopicPostsAPI = AxiosAPIwithParam<GetIntegratedDebatePostsParam, DebateTopicPostsData>
