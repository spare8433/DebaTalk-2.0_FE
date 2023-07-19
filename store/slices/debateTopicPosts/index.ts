/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetDebatePostsParam } from 'types/params'
import { getDebateTopicPostsAPI } from '@api/debateTopicPosts'
import { DebateTopicPostsState } from './type'

const initialState: DebateTopicPostsState = {
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

export const getDebateTopicPosts = createAsyncThunk(
  'debateTopicPosts/get',
  async (data: GetDebatePostsParam) => {
    const response = await getDebateTopicPostsAPI(data)
    return response.data
  },
)

export const debateTopicPosts = createSlice({
  name: 'debateTopicPosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDebateTopicPosts.pending, (state) => {
      state.getPostsLoading = true
      state.getPostsDone = false
      state.getPostsError = null
    })
    builder.addCase(getDebateTopicPosts.fulfilled, (state, action) => {
      state.getPostsLoading = false
      state.getPostsDone = true
      state.postsData = action.payload
    })
    builder.addCase(getDebateTopicPosts.rejected, (state, action) => {
      state.getPostsLoading = false
      state.getPostsError = action.error
    })
  },
})

// export const {} = balanceDebatePost.actions
export default debateTopicPosts.reducer
