/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getBalanceDebatePostsAPI } from '@api/balanceDebatePosts'
import { GetDebatePostsParam } from 'types/params'
import { BalanceDebatePostsState } from './type'

const initialState: BalanceDebatePostsState = {
  getPostsLoading: false,
  getPostsDone: false,
  getPostsError: null,
  createPostsLoading: false,
  createPostsDone: false,
  createPostsError: null,
  deletePostsLoading: false,
  deletePostsDone: false,
  deletePostsError: null,
  postsData: null,
}

export const getBalanceDebatePosts = createAsyncThunk(
  'balanceDebatePosts/get',
  async (data: GetDebatePostsParam) => {
    const response = await getBalanceDebatePostsAPI(data)
    return response.data
  },
)

export const balanceDebatePosts = createSlice({
  name: 'balanceDebatePosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getBalanceDebatePosts.pending, (state) => {
      state.getPostsLoading = true
      state.getPostsDone = false
      state.getPostsError = null
    })
    builder.addCase(getBalanceDebatePosts.fulfilled, (state, action) => {
      state.getPostsLoading = false
      state.getPostsDone = true
      state.postsData = action.payload
    })
    builder.addCase(getBalanceDebatePosts.rejected, (state, action) => {
      state.getPostsLoading = false
      state.getPostsError = action.error
    })
  },
})

// export const {} = balanceDebatePost.actions
export default balanceDebatePosts.reducer
