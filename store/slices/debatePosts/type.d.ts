import { SerializedError } from '@reduxjs/toolkit'
import { BalanceDebatePostDataState } from '../balanceDebatePost/type'
import { IssueDebatePostDataState } from '../issueDebatePost/type'
import { ProsConsDebatePostDataState } from '../prosConsDebatePost/type'

export interface KeywordData {
  readonly id: string
  category: string
  title: string
}

interface HotBalanceDebatePost {
  readonly id: string
  category: string
  title: string
  optionA: string
  optionB: string
  description: string
  imgUrl?: string | null
  hits: number
  opinionCount: number
  optionAListCount: number
  optionBListCount: number
}

interface HotIssueDebatePost {
  readonly id: string
  category: string
  title: string
  description: string
  imgUrl?: string | null
  hits: number
  opinionCount: number
  opinionAvgScore: number | null
}

interface HotProsConsDebatePost {
  readonly id: string
  category: string
  title: string
  description: string
  imgUrl?: string | null
  hits: number
  opinionCount: number
  OptionAgreeList: number
  OptionOpposeList: number
}

export interface HotDebatePosts {
  balance: HotBalanceDebatePost[]
  issue: HotIssueDebatePost[]
  prosCons: HotProsConsDebatePost[]
}

export interface DebateKeywordsData {
  balanceKeyword: KeywordData[]
  issueKeyword: KeywordData[]
  prosConsKeyword: KeywordData[]
}

export type IntegratedDebatePostData = (
  | IssueDebatePostDataState
  | BalanceDebatePostDataState
  | ProsConsDebatePostDataState
)[]

export interface DebatePostsState {
  getDebateHotTopicsLoading: boolean
  getDebateHotTopicsDone: boolean
  getDebateHotTopicsError: null | SerializedError
  getIntegratedDebatePostsLoading: boolean
  getIntegratedDebatePostsDone: boolean
  getIntegratedDebatePostsError: null | SerializedError
  getKeywordsLoading: boolean
  getKeywordsDone: boolean
  getKeywordsError: null | SerializedError

  hotDebatePosts: HotDebatePosts | null
  debateKeywordsData: DebateKeywordsData | null
  integratedDebatePostData: IntegratedDebatePostData | null
}
