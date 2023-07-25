import { GetDebatePostsParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { IssueDebatePostsData } from '@store/slices/issueDebatePosts/type'

type GetIssueDebatePostsAPI = AxiosAPIwithParam<GetDebatePostsParam, IssueDebatePostsData>
