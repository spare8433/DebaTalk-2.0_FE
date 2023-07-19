import { SerializedError } from '@reduxjs/toolkit'

export type BalanceDebateReplyDataState = {
  readonly id: number
  content: string

  BalanceOpinionId: number
  User: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  Target: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  createdAt: string
  updatedAt: string
}

export type BalanceDebateOpinionDataState = {
  id: number
  content: string
  selection: 'A' | 'B'

  BalanceDebatePostId: number
  User: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  Replys: BalanceDebateReplyDataState[]
  createdAt: string
  updatedAt: string
}

export type BalanceDebatePostDataState = {
  readonly id: string
  category: string
  title: string
  optionA: string
  optionB: string
  description: string
  issue1: string
  issue2: string
  article?: string
  imgUrl?: string
  hits: number

  method?: string

  opinionCount: number
  optionAListCount: number
  optionBListCount: number
  // OptionAList: { UserId: number }[]
  // OptionBList: { UserId: number }[]
  BalanceOpinions: BalanceDebateOpinionDataState[]
  createdAt: string
  updatedAt: string
}

export type BalanceDebatePostState = {
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
  postData: BalanceDebatePostDataState | null
}
