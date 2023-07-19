/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { getProsConsDebatePostsAPI } from '@api/prosConsDebatePosts'
import { GetDebatePostsParam } from 'types/params'
import { ProsConsDebatePostsState } from './type'

const initialState: ProsConsDebatePostsState = {
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

export const getProsConsDebatePosts = createAsyncThunk(
  'prosConsDebatePosts/get',
  async (data: GetDebatePostsParam) => {
    const response = await getProsConsDebatePostsAPI(data)
    return response.data
  },
)

export const prosConsDebatePosts = createSlice({
  name: 'prosConsDebatePosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getProsConsDebatePosts.pending, (state) => {
      state.getPostsLoading = true
      state.getPostsDone = false
      state.getPostsError = null
    })
    builder.addCase(getProsConsDebatePosts.fulfilled, (state, action) => {
      state.getPostsLoading = false
      state.getPostsDone = true
      state.postsData = action.payload
    })
    builder.addCase(getProsConsDebatePosts.rejected, (state, action) => {
      state.getPostsLoading = false
      state.getPostsError = action.error
    })
  },
})

// export const {} = balanceDebatePost.actions
export default prosConsDebatePosts.reducer
