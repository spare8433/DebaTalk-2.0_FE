import { SerializedError } from '@reduxjs/toolkit'
import { IssueDebatePostDataState } from '../issueDebatePost/type'

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
  postsData: IssueDebatePostDataState[] | null
}
