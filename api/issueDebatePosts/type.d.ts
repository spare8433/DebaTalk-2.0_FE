import { GetDebatePostsParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { IssueDebatePostDataState } from '@store/slices/issueDebatePost/type'

type GetIssueDebatePostsAPI = AxiosAPIwithParam<GetDebatePostsParam, IssueDebatePostDataState[]>
