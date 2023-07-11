export type DebateTopicReplyDataState = {
  readonly id: number
  DebateTopicOpinionId: number
  content: string
  Target: { readonly id: number; nickname: string; imgUrl: string | null }
  hits: number
  createdAt: string
  updatedAt: string
  User: { readonly id: number; nickname: string; imgUrl: string | null }
}

export type DebateTopicOpinionDataState = {
  id: number
  content: string
  score: number
  createdAt: string
  updatedAt: string
  User: { readonly id: number; nickname: string; imgUrl: string | null }
  Replys: DebateTopicReplyDataState[] | any[]
}

export interface DebateTopicPostDataState {
  readonly id: string
  method?: string
  category?: string
  title?: string
  description?: string
  imgUrl?: string | null
  hits?: number
  createdAt: string
  updatedAt: string
  User: {
    readonly id: number
    userId: string
    nickname: string
    imgUrl: string | null
    level: number
  }
  Likers: { readonly id: number; userId: string }[]
  DebateTopicOpinions: DebateTopicOpinionDataState[]
}

export interface DebateTopicPostState {
  getPostLoading: boolean
  getPostDone: boolean
  getPostError: null | Error | unknown
  createPostLoading: boolean
  createPostDone: boolean
  createPostError: null | Error | unknown
  createOpinionLoading: boolean
  createOpinionDone: boolean
  createOpinionError: null | Error | unknown
  createReplyLoading: boolean
  createReplyDone: boolean
  createReplyError: null | Error | unknown
  deletePostLoading: boolean
  deletePostDone: boolean
  deletePostError: null | Error | unknown
  postData: DebateTopicPostDataState | null
}
