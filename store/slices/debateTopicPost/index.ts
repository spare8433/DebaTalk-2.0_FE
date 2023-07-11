/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createDebateTopicPostAPI,
  createDebateTopicOpinionAPI,
  createDebateTopicReplyAPI,
  getDebateTopicPostAPI,
} from '@api/debateTopicPost'
import { CreateDebateTopicOpinionParam, CreateDebateTopicReplyParam } from 'types/params'
import type { PayloadAction } from '@reduxjs/toolkit'
import { DebateTopicPostState } from './type'

const initialState: DebateTopicPostState = {
  getPostLoading: false,
  getPostDone: false,
  getPostError: null,
  createPostLoading: false,
  createPostDone: false,
  createPostError: null,
  createOpinionLoading: false,
  createOpinionDone: false,
  createOpinionError: null,
  createReplyLoading: false,
  createReplyDone: false,
  createReplyError: null,
  deletePostLoading: false,
  deletePostDone: false,
  deletePostError: null,
  postData: null,
}

export const createDebateTopicPost = createAsyncThunk(
  'debateTopicPost/create',
  async (data: FormData) => {
    const response = await createDebateTopicPostAPI(data)
    return response.data
  },
)

export const getDebateTopicPost = createAsyncThunk('debateTopicPost/get', async (id: string) => {
  const response = await getDebateTopicPostAPI(id)
  return response.data
})

export const createtDebateTopicOpinion = createAsyncThunk(
  'debateTopicPost/opinion/create',
  async (data: CreateDebateTopicOpinionParam) => {
    const response = await createDebateTopicOpinionAPI(data)
    return response.data
  },
)

export const createtDebateTopicReply = createAsyncThunk(
  'debateTopicPost/reply/create',
  async (data: CreateDebateTopicReplyParam) => {
    const response = await createDebateTopicReplyAPI(data)
    return response.data
  },
)

export const debateTopicPost = createSlice({
  name: 'debateTopicPost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createDebateTopicPost.pending, (state) => {
      state.createPostLoading = true
      state.createPostDone = false
      state.createPostError = null
    })
    builder.addCase(createDebateTopicPost.fulfilled, (state) => {
      state.createPostLoading = false
      state.createPostDone = true
    })
    builder.addCase(createDebateTopicPost.rejected, (state, action) => {
      state.createPostLoading = false
      state.createPostError = action.error
    })

    builder.addCase(getDebateTopicPost.pending, (state) => {
      state.getPostLoading = true
      state.getPostDone = false
      state.getPostError = null
    })
    builder.addCase(getDebateTopicPost.fulfilled, (state, action) => {
      state.getPostLoading = false
      state.getPostDone = true
      state.postData = action.payload
    })
    builder.addCase(getDebateTopicPost.rejected, (state, action) => {
      state.getPostLoading = false
      state.getPostError = action.error
    })

    builder.addCase(createtDebateTopicOpinion.pending, (state) => {
      state.createOpinionLoading = true
      state.createOpinionDone = false
      state.createOpinionError = null
    })
    builder.addCase(createtDebateTopicOpinion.fulfilled, (state) => {
      state.createOpinionLoading = false
      state.createOpinionDone = true
    })
    builder.addCase(createtDebateTopicOpinion.rejected, (state, action) => {
      state.createOpinionLoading = false
      state.createOpinionError = action.error
    })

    builder.addCase(createtDebateTopicReply.pending, (state) => {
      state.createReplyLoading = true
      state.createReplyDone = false
      state.createReplyError = null
    })
    builder.addCase(createtDebateTopicReply.fulfilled, (state) => {
      state.createReplyLoading = false
      state.createReplyDone = true
    })
    builder.addCase(createtDebateTopicReply.rejected, (state, action) => {
      state.createReplyLoading = false
      state.createReplyError = action.error
    })
  },
})

// export const { } = issueDebatePost.actions
export default debateTopicPost.reducer
