export type ProsConsDebateReplyDataState = {
  readonly id:number
  ProsConsOpinionId:number
  content:string
  Target:{ readonly id: number, nickname: string, imgUrl: string | null }
  hits:number
  createdAt: string
  updatedAt: string
  User:{ readonly id: number, nickname: string, imgUrl: string | null }
}

export type ProsConsDebateOpinonDataState = {
  id:number
  content:string
  selection: '찬성' | '반대'
  createdAt: string
  updatedAt: string
  User:{ readonly id: number, nickname: string, imgUrl: string | null }
  Replys: ProsConsDebateReplyDataState[] | any[]
}

export type ProsConsDebatePostDataState = {
  readonly id: string
  method?: string
  category?: string
  title?: string
  description?: string
  issue1?: string
  article?: string
  imgUrl?: string | null
  hits?: number
  createdAt?: string
  updatedAt?: string
  OptionAList?: { UserId: number }[]
  OptionBList?: { UserId: number }[]
  ProsConsOpinions:ProsConsDebateOpinonDataState[]
}

export type ProsConsDebatePostState = {
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
  postData: ProsConsDebatePostDataState | null
}

