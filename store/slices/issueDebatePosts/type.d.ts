import { SerializedError } from '@reduxjs/toolkit'
import { IssueDebatePostDataState } from '../issueDebatePost/type'

export interface IssueDebatePostsData {
  data: IssueDebatePostDataState[]
  count: number
}

export interface IssueDebatePostsState {
  getPostsLoading: boolean
  getPostsDone: boolean
  getPostsError: null | SerializedError
  createPostsLoading: boolean
  createPostsDone: boolean
  createPostsError: null | SerializedError
  deletePostsLoading: boolean
  deletePostsDone: boolean
  deletePostsError: null | SerializedError
  postsData: IssueDebatePostsData | null
}
