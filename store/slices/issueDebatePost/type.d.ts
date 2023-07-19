import { SerializedError } from '@reduxjs/toolkit'

export interface IssueDebateReplyDataState {
  readonly id: number
  content: string

  IssueOpinionId: number
  User: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  Target: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  createdAt: string
  updatedAt: string
}

export interface IssueDebateOpinionDataState {
  id: number
  content: string
  score: number

  IssueDebatePostId: number
  User: { readonly id: number; userId: string; nickname: string; imgUrl: string | null }
  Replys: IssueDebateReplyDataState[]
  createdAt: string
  updatedAt: string
}

export interface IssueDebatePostDataState {
  readonly id: string
  category: string
  title: string
  description: string
  issue1: string
  article?: string
  imgUrl?: string
  hits: number

  method: string
  opinionCount: number
  opinionAvgScore: number | null

  IssueOpinions: IssueDebateOpinionDataState[]
  createdAt: string
  updatedAt: string
}

export interface IssueDebatePostState {
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
  postData: IssueDebatePostDataState | null
}
