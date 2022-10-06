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

}
