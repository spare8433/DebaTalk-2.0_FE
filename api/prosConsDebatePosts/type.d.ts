import { GetDebatePostsParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { ProsConsDebatePostDataState } from '@store/slices/prosConsDebatePost/type'

type GetProsConsDebatePostsAPI = AxiosAPIwithParam<
  GetDebatePostsParam,
  ProsConsDebatePostDataState[]
>
