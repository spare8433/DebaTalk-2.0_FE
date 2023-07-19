import { SerializedError } from '@reduxjs/toolkit'
import { ProsConsDebatePostDataState } from '../prosConsDebatePost/type'

export interface ProsConsDebatePostsState {
  getPostsLoading: boolean
  getPostsDone: boolean
  getPostsError: null | SerializedError
  createPostsLoading: boolean
  createPostsDone: boolean
  createPostsError: null | SerializedError
  deletePostsLoading: boolean
  deletePostsDone: boolean
  deletePostsError: null | SerializedError
  postsData: ProsConsDebatePostDataState[] | null
}
