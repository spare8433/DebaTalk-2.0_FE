/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createIssueDebatePostAPI,
  createIssueOpinionAPI,
  createIssueReplyAPI,
  getIssueDebatePostAPI,
} from '@api/issueDebatePost'
import { CreateIssueOpinionParam, CreateIssueReplyParam } from 'types/params'
import { IssueDebatePostState } from './type'

const initialState: IssueDebatePostState = {
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

export const createIssueDebatePost = createAsyncThunk(
  'issueDebatePost/create',
  async (data: FormData) => {
    const response = await createIssueDebatePostAPI(data)
    return response.data
  },
)

export const getIssueDebatePost = createAsyncThunk('issueDebatePost/get', async (id: string) => {
  const response = await getIssueDebatePostAPI(id)
  return response.data
})

export const createIssueOpinion = createAsyncThunk(
  'issueDebatePost/opinion/create',
  async (data: CreateIssueOpinionParam) => {
    const response = await createIssueOpinionAPI(data)
    return response.data
  },
)

export const createIssueReply = createAsyncThunk(
  'issueDebatePost/reply/create',
  async (data: CreateIssueReplyParam) => {
    const response = await createIssueReplyAPI(data)
    return response.data
  },
)

export const issueDebatePost = createSlice({
  name: 'issueDebatePost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createIssueDebatePost.pending, (state) => {
      state.createPostLoading = true
      state.createPostDone = false
      state.createPostError = null
    })
    builder.addCase(createIssueDebatePost.fulfilled, (state) => {
      state.createPostLoading = false
      state.createPostDone = true
    })
    builder.addCase(createIssueDebatePost.rejected, (state, action) => {
      state.createPostLoading = false
      state.createPostError = action.error
    })

    builder.addCase(getIssueDebatePost.pending, (state) => {
      state.getPostLoading = true
      state.getPostDone = false
      state.getPostError = null
    })
    builder.addCase(getIssueDebatePost.fulfilled, (state, action) => {
      state.getPostLoading = false
      state.getPostDone = true
      state.postData = action.payload
    })
    builder.addCase(getIssueDebatePost.rejected, (state, action) => {
      state.getPostLoading = false
      state.getPostError = action.error
    })

    builder.addCase(createIssueOpinion.pending, (state) => {
      state.createOpinionLoading = true
      state.createOpinionDone = false
      state.createOpinionError = null
    })
    builder.addCase(createIssueOpinion.fulfilled, (state) => {
      state.createOpinionLoading = false
      state.createOpinionDone = true
    })
    builder.addCase(createIssueOpinion.rejected, (state, action) => {
      state.createOpinionLoading = false
      state.createOpinionError = action.error
    })

    builder.addCase(createIssueReply.pending, (state) => {
      state.createReplyLoading = true
      state.createReplyDone = false
      state.createReplyError = null
    })
    builder.addCase(createIssueReply.fulfilled, (state) => {
      state.createReplyLoading = false
      state.createReplyDone = true
    })
    builder.addCase(createIssueReply.rejected, (state, action) => {
      state.createReplyLoading = false
      state.createReplyError = action.error
    })
  },
})

// export const { } = issueDebatePost.actions
export default issueDebatePost.reducer
