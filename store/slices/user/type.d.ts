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
  role: number
}

export interface FindUserDataState {
  readonly id: number
  readonly userId: string
  createdAt: string
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
  findUserIdLoading: boolean
  findUserIdDone: boolean
  findUserIdError: null | SerializedError
  getAuthCodeLoading: boolean
  getAuthCodeDone: boolean
  getAuthCodeError: null | SerializedError
  checkAuthCodeLoading: boolean
  checkAuthCodeDone: boolean
  checkAuthCodeError: null | SerializedError
  updatePasswordLoading: boolean
  updatePasswordDone: boolean
  updatePasswordError: null | SerializedError
  checkDuplicateIdLoading: boolean
  checkDuplicateIdDone: boolean
  checkDuplicateIdError: null | SerializedError
  checkDuplicateEmailLoading: boolean
  checkDuplicateEmailDone: boolean
  checkDuplicateEmailError: null | SerializedError

  myData: UserDataState | null
  findUserData: FindUserDataState | null
}
