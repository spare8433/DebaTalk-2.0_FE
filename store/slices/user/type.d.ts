import { SerializedError } from '@reduxjs/toolkit'

export interface UserDataState {
  readonly id: number
  readonly userId: string
  email: string
  nickname: string
  level: number
  point: number
  imgUrl?: string
  createdAt: string
  updatedAt: string
}

export interface UserState {
  loadMyInfoLoading: boolean
  loadMyInfoDone: boolean
  loadMyInfoError: null | SerializedError
  signUpLoading: boolean
  signUpDone: boolean
  signUpError: null | SerializedError
  logInLoading: boolean
  logInDone: boolean
  logInError: null | SerializedError
  logOutLoading: boolean
  logOutDone: boolean
  logOutError: null | SerializedError
  myData: UserDataState | null
}
