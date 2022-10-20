declare module 'params' {
  type LoginParam = {
    readonly userId: string,
    readonly password: string,
  }
  type SignUpParam = {
    readonly userId: string,
    readonly email: string,
    readonly nickname: string,
    readonly password: string,
  }
  type CreateDebatePostParam = {
    readonly method : string,
    readonly category : string,
    readonly title : string,
    readonly content : string,
  }
  type GetDebateKeywords = {
    readonly limit : number,
  }
  type GetDebatePostsParam = {
    readonly method ?: string,
    readonly category ?: string,
    readonly title ?: string,
    readonly limit ?: number,
    readonly page ?: number,
    readonly key ?: createdAt | hits,
    readonly order ?: DESC | ASC,
  }

  // form data 안의 데이타 형식
  // type CreateBalanceDebatePostParam = {
  //   readonly method : string,
  //   readonly category : string,
  //   readonly title : string,
  //   readonly description : string,
  //   readonly issue1 : string,
  //   readonly issue2 : string,
  //   readonly article : string[],
  //   readonly imgData ?: FormData,
  // }
}
