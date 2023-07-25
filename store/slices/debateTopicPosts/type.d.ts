import { SerializedError } from '@reduxjs/toolkit'
import { DebateTopicPostDataState } from '../debateTopicPost/type'

export interface DebateTopicPostsData {
  data: DebateTopicPostDataState[]
  count: number
}

export interface DebateTopicPostsState {
  getPostsLoading: boolean
  getPostsDone: boolean
  getPostsError: null | SerializedError
  createPostsLoading: boolean
  createPostsDone: boolean
  createPostsError: null | SerializedError
  deletePostsLoading: boolean
  deletePostsDone: boolean
  deletePostsError: null | SerializedError
  postsData: DebateTopicPostsData | null
}
