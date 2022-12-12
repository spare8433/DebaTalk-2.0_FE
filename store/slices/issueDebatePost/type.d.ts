export type IssueDebateReplyDataState = {
  readonly id:number
  IssueOpinionId:number
  content:string
  Target:{ readonly id: number, nickname: string, imgUrl: string | null }
  hits:number
  createdAt: string
  updatedAt: string
  User:{ readonly id: number, nickname: string, imgUrl: string | null }
}

export type IssueDebateOpinionDataState = {
  id:number
  content:string
  score:number
  createdAt: string
  updatedAt: string
  User:{ readonly id: number, nickname: string, imgUrl: string | null }
  Replys: IssueDebateReplyDataState[] | any[]
}

export interface IssueDebatePostDataState{
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
  IssueOpinions:IssueDebateOpinionDataState[]
}

export interface IssueDebatePostState {
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
  postData: IssueDebatePostDataState | null
}