import { SerializedError } from '@reduxjs/toolkit'

export type DebateTopicReplyDataState = {
  readonly id: number
  DebateTopicOpinionId: number
  content: string
  Target: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  hits: number
  createdAt: string
  updatedAt: string
  User: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
}

export type DebateTopicOpinionDataState = {
  id: number
  content: string
  score: number
  createdAt: string
  updatedAt: string
  User: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  Replys: DebateTopicReplyDataState[]
}

export interface DebateTopicPostDataState {
  readonly id: string
  category: string
  title: string
  description: string
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
  getPostError: null | SerializedError
  createPostLoading: boolean
  createPostDone: boolean
  createPostError: null | SerializedError
  createOpinionLoading: boolean
  createOpinionDone: boolean
  createOpinionError: null | SerializedError
  createReplyLoading: boolean
  createReplyDone: boolean
  createReplyError: null | SerializedError
  deletePostLoading: boolean
  deletePostDone: boolean
  deletePostError: null | SerializedError
  postData: DebateTopicPostDataState | null
}
