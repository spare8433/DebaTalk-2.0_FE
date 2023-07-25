import { GetDebatePostsParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { ProsConsDebatePostsData } from '@store/slices/prosConsDebatePosts/type'

type GetProsConsDebatePostsAPI = AxiosAPIwithParam<GetDebatePostsParam, ProsConsDebatePostsData>
