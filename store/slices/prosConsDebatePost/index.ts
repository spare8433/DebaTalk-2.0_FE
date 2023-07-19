/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  createProsConsDebatePostAPI,
  createProsConsOpinionAPI,
  createProsConsReplyAPI,
  getProsConsDebatePostAPI,
} from '@api/prosConsDebatePost'
import { CreateProsConsOpinionParam, CreateProsConsReplyParam } from 'types/params'
import { ProsConsDebatePostState } from './type'

const initialState: ProsConsDebatePostState = {
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

export const createProsConsDebatePost = createAsyncThunk(
  'prosConsDebatePost/create',
  async (data: FormData) => {
    const response = await createProsConsDebatePostAPI(data)
    return response.data
  },
)

export const getProsConsDebatePost = createAsyncThunk(
  'prosConsDebatePost/get',
  async (id: string) => {
    const response = await getProsConsDebatePostAPI(id)
    return response.data
  },
)

export const createProsConsOpinion = createAsyncThunk(
  'prosConsDebatePost/opinion/create',
  async (data: CreateProsConsOpinionParam) => {
    const response = await createProsConsOpinionAPI(data)
    return response.data
  },
)

export const createProsConsReply = createAsyncThunk(
  'prosConsDebatePost/reply/create',
  async (data: CreateProsConsReplyParam) => {
    const response = await createProsConsReplyAPI(data)
    return response.data
  },
)

export const prosConsDebatePost = createSlice({
  name: 'prosConsDebatePost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProsConsDebatePost.pending, (state) => {
      state.createPostLoading = true
      state.createPostDone = false
      state.createPostError = null
    })
    builder.addCase(createProsConsDebatePost.fulfilled, (state) => {
      state.createPostLoading = false
      state.createPostDone = true
    })
    builder.addCase(createProsConsDebatePost.rejected, (state, action) => {
      state.createPostLoading = false
      state.createPostError = action.error
    })

    builder.addCase(getProsConsDebatePost.pending, (state) => {
      state.getPostLoading = true
      state.getPostDone = false
      state.getPostError = null
    })
    builder.addCase(getProsConsDebatePost.fulfilled, (state, action) => {
      state.getPostLoading = false
      state.getPostDone = true
      state.postData = action.payload
    })
    builder.addCase(getProsConsDebatePost.rejected, (state, action) => {
      state.getPostLoading = false
      state.getPostError = action.error
    })

    builder.addCase(createProsConsOpinion.pending, (state) => {
      state.createOpinionLoading = true
      state.createOpinionDone = false
      state.createOpinionError = null
    })
    builder.addCase(createProsConsOpinion.fulfilled, (state) => {
      state.createOpinionLoading = false
      state.createOpinionDone = true
    })
    builder.addCase(createProsConsOpinion.rejected, (state, action) => {
      state.createOpinionLoading = false
      state.createOpinionError = action.error
    })

    builder.addCase(createProsConsReply.pending, (state) => {
      state.createReplyLoading = true
      state.createReplyDone = false
      state.createReplyError = null
    })
    builder.addCase(createProsConsReply.fulfilled, (state) => {
      state.createReplyLoading = false
      state.createReplyDone = true
    })
    builder.addCase(createProsConsReply.rejected, (state, action) => {
      state.createReplyLoading = false
      state.createReplyError = action.error
    })
  },
})

// export const {} = balanceDebatePost.actions
export default prosConsDebatePost.reducer
