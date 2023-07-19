import { SerializedError } from '@reduxjs/toolkit'

export type ProsConsDebateReplyDataState = {
  readonly id: number
  content: string

  ProsConsOpinionId: number
  User: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  Target: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  createdAt: string
  updatedAt: string
}

export type ProsConsDebateOpinionDataState = {
  id: number
  content: string
  selection: '찬성' | '반대'

  ProsConsDebatePostId: number
  User: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  Replys: ProsConsDebateReplyDataState[]
  createdAt: string
  updatedAt: string
}

export type ProsConsDebatePostDataState = {
  readonly id: string
  category: string
  title: string
  description: string
  issue1: string
  article?: string
  imgUrl?: string
  hits: number

  method?: string

  opinionCount: number
  agreeListCount: number
  opposeListCount: number
  // OptionAgreeList: { UserId: number }[]
  // OptionOpposeList: { UserId: number }[]
  ProsConsOpinions: ProsConsDebateOpinionDataState[]
  createdAt: string
  updatedAt: string
}

export type ProsConsDebatePostState = {
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
  postData: ProsConsDebatePostDataState | null
}
