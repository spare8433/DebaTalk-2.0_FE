export type BalanceDebateReplyDataState = {
  id:number
  BalanceOpinionId:number
  content:string
  Target:{ id: number, nickname: string, imgUrl: string | null }
  hits:number
  createdAt: string
  updatedAt: string
  User:{ id: number, nickname: string, imgUrl: string | null }
}

export type BalanceDebateOpinonDataState = {
  id:number
  content:string
  selection: 'A' | 'B'
  createdAt: string
  updatedAt: string
  User:{ id: number, nickname: string, imgUrl: string | null }
  BalanceReplys: BalanceDebateReplyDataState[] | any[]
}

export type BalanceDebatePostDataState = {
  readonly id: string
  method?: string
  category?: string
  title?: string
  optionA?: string
  optionB?: string
  description?: string
  issue1?: string
  issue2?: string
  article?: string
  imgUrl?: string | null
  hits?: number
  createdAt?: string
  updatedAt?: string
  OptionAList?: { UserId: number }[]
  OptionBList?: { UserId: number }[]
  BalanceOpinions:BalanceDebateOpinonDataState[]
}

export type BalanceDebatePostState = {
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
  postData: BalanceDebatePostDataState | null
}

