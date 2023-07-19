import { CreateIssueOpinionParam, CreateIssueReplyParam } from 'types/params'
import { AxiosAPIwithParam } from 'types/axiosAPI'
import { IssueDebatePostDataState } from '@store/slices/issueDebatePost/type'

type CreateIssueDebatePostAPI = AxiosAPIwithParam<FormData>
type GetIssueDebatePostAPI = AxiosAPIwithParam<string, IssueDebatePostDataState>
type CreateIssueOpinionAPI = AxiosAPIwithParam<CreateIssueOpinionParam>
type CreateIssueReplyAPI = AxiosAPIwithParam<CreateIssueReplyParam>
