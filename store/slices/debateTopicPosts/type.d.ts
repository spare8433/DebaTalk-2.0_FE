import { DebateTopicPostDataState } from '../debateTopicPost/type'

export interface DebateTopicPostsState {
  getPostsLoading: boolean
  getPostsDone: boolean
  getPostsError: null | Error | unknown
  createPostsLoading: boolean
  createPostsDone: boolean
  createPostsError: null | Error | unknown
  deletePostsLoading: boolean
  deletePostsDone: boolean
  deletePostsError: null | Error | unknown
  postsData: { rows: DebateTopicPostDataState[]; count: number } | null
}
