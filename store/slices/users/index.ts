/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getUsersAPI } from '@api/users'
import { GetUsersParam } from 'types/params'
import { UsersState } from './type'

const initialState: UsersState = {
  getUsersInfoLoading: false,
  getUsersInfoDone: false,
  getUsersInfoError: null,
  usersData: null,
}

export const getUsersInfo = createAsyncThunk(
  'user/getUsersInfo',
  async (getUsersParam: GetUsersParam) => {
    const response = await getUsersAPI(getUsersParam)
    return response.data
  },
)

export const users = createSlice({
  name: 'users',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 사용자 정보 가져오기
    builder.addCase(getUsersInfo.pending, (state) => {
      state.getUsersInfoLoading = true
      state.getUsersInfoDone = false
      state.getUsersInfoError = null
    })
    builder.addCase(getUsersInfo.fulfilled, (state, action) => {
      state.getUsersInfoLoading = false
      state.getUsersInfoDone = true
      state.usersData = action.payload
    })
    builder.addCase(getUsersInfo.rejected, (state, action) => {
      state.getUsersInfoLoading = false
      state.getUsersInfoError = action.error
    })
  },
})

export default users.reducer
