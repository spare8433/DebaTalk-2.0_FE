export type LoginParam = {
  readonly userId: string
  readonly password: string
}
export type SignUpParam = {
  readonly userId: string
  readonly email: string
  readonly nickname: string
  readonly password: string
}
export type CreateDebatePostParam = {
  readonly method: string
  readonly category: string
  readonly title: string
  readonly content: string
}
export type GetDebateKeywords = {
  readonly limit: number
}
export type GetDebatePostsParam = {
  readonly category?: string
  readonly searchText?: string
  readonly limit?: number
  readonly page?: string
  readonly key?: 'createdAt' | 'hits' | string
  readonly order?: 'DESC' | 'ASC' | string
}

export type GetIntegratedDebatePosts = {
  readonly searchText: string
}

export type CreateBalanceOpinionParam = {
  readonly postId: number
  readonly selection: string
  readonly content: string
}

export type CreateBalanceReplyParam = {
  readonly opinionId: number
  readonly content: string
  readonly writerId: number
  readonly targetId: number
}

export type CreateProsConsOpinionParam = {
  readonly postId: number
  readonly selection: string
  readonly content: string
}

export type CreateProsConsReplyParam = {
  readonly opinionId: number
  readonly content: string
  readonly writerId: number
  readonly targetId: number
}

// form data 안의 데이타 형식
// export type CreateBalanceDebatePostParam = {
//   readonly method : string,
//   readonly category : string,
//   readonly title : string,
//   readonly description : string,
//   readonly issue1 : string,
//   readonly issue2 : string,
//   readonly article : string[],
//   readonly imgData ?: FormData,
// }

export type CreateIssueOpinionParam = {
  readonly postId: number
  readonly score: number
  readonly content: string
}

export type CreateIssueReplyParam = {
  readonly opinionId: number
  readonly content: string
  readonly writerId: number
  readonly targetId: number
}
