import { SerializedError } from '@reduxjs/toolkit'
import { UserDataState } from '../user/type'

export interface UsersState {
  getUsersInfoLoading: boolean
  getUsersInfoDone: boolean
  getUsersInfoError: null | SerializedError
  usersData: UserDataState[] | null
}
