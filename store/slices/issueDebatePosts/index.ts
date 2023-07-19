/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetDebatePostsParam } from 'types/params'
import { getIssueDebatePostsAPI } from '@api/issueDebatePosts'
import { IssueDebatePostsState } from './type'

const initialState: IssueDebatePostsState = {
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

export const getIssueDebatePosts = createAsyncThunk(
  'issueDebatePosts/get',
  async (data: GetDebatePostsParam) => {
    const response = await getIssueDebatePostsAPI(data)
    return response.data
  },
)

export const issueDebatePosts = createSlice({
  name: 'issueDebatePosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getIssueDebatePosts.pending, (state) => {
      state.getPostsLoading = true
      state.getPostsDone = false
      state.getPostsError = null
    })
    builder.addCase(getIssueDebatePosts.fulfilled, (state, action) => {
      state.getPostsLoading = false
      state.getPostsDone = true
      state.postsData = action.payload
    })
    builder.addCase(getIssueDebatePosts.rejected, (state, action) => {
      state.getPostsLoading = false
      state.getPostsError = action.error
    })
  },
})

// export const {} = balanceDebatePost.actions
export default issueDebatePosts.reducer
