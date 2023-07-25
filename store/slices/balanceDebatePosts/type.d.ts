import { SerializedError } from '@reduxjs/toolkit'
import { BalanceDebatePostDataState } from '../balanceDebatePost/type'

export interface BalanceDebatePostsData {
  data: BalanceDebatePostDataState[]
  count: number
}

export interface BalanceDebatePostsState {
  getPostsLoading: boolean
  getPostsDone: boolean
  getPostsError: null | SerializedError
  createPostsLoading: boolean
  createPostsDone: boolean
  createPostsError: null | SerializedError
  deletePostsLoading: boolean
  deletePostsDone: boolean
  deletePostsError: null | SerializedError
  postsData: BalanceDebatePostsData | null
}
