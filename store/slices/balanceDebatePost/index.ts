import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createBalanceDebatePostAPI, createBalanceOpinionAPI, createBalanceReplyAPI, getBalanceDebatePostAPI } from '@api/balanceDebatePost'
import { CreateBalanceOpinionParam, CreateBalanceReplyParam } from 'params'
import { BalanceDebatePostState } from './type'

const initialState: BalanceDebatePostState = {
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
	postData: null
}

export const createBalanceDebatePost = createAsyncThunk(
  "balanceDebatePost/create",
    async (data:FormData) => {
      const response = await createBalanceDebatePostAPI(data);
      return response.data;
    },
  );

export const getBalanceDebatePost = createAsyncThunk(
  "balanceDebatePost/get",
    async (id:string) => {
      const response = await getBalanceDebatePostAPI(id);
      return response.data;
    },
  );

export const createBalanceOpinion = createAsyncThunk(
  "balanceDebatePost/opinion/create",
    async (data:CreateBalanceOpinionParam) => {
      const response = await createBalanceOpinionAPI(data);
      return response.data;
    },
  );

export const createBalanceReply = createAsyncThunk(
  "balanceDebatePost/reply/create",
    async (data:CreateBalanceReplyParam) => {
      const response = await createBalanceReplyAPI(data);
      return response.data;
    },
  ); 

export const balanceDebatePost = createSlice({
  name: 'balanceDebatePost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createBalanceDebatePost.pending, (state) => {
      state.createPostLoading = true
      state.createPostDone = false
      state.createPostError = null
    })
    builder.addCase(createBalanceDebatePost.fulfilled, (state) => {
      state.createPostLoading = false
      state.createPostDone = true
    })
    builder.addCase(createBalanceDebatePost.rejected, (state, action) => {
      state.createPostLoading = false
      state.createPostError = action.error
    })

    builder.addCase(getBalanceDebatePost.pending, (state) => {
      state.getPostLoading = true
      state.getPostDone = false
      state.getPostError = null
    })
    builder.addCase(getBalanceDebatePost.fulfilled, (state, action) => {
      state.getPostLoading = false
      state.getPostDone = true
      state.postData = action.payload
    })
    builder.addCase(getBalanceDebatePost.rejected, (state, action) => {
      state.getPostLoading = false
      state.getPostError = action.error
    })

    builder.addCase(createBalanceOpinion.pending, (state) => {
      state.createOpinionLoading = true
      state.createOpinionDone = false
      state.createOpinionError = null
    })
    builder.addCase(createBalanceOpinion.fulfilled, (state) => {
      state.createOpinionLoading = false
      state.createOpinionDone = true
    })
    builder.addCase(createBalanceOpinion.rejected, (state, action) => {
      state.createOpinionLoading = false
      state.createOpinionError = action.error
    })


    builder.addCase(createBalanceReply.pending, (state) => {
      state.createReplyLoading = true
      state.createReplyDone = false
      state.createReplyError = null
    })
    builder.addCase(createBalanceReply.fulfilled, (state) => {
      state.createReplyLoading = false
      state.createReplyDone = true
    })
    builder.addCase(createBalanceReply.rejected, (state, action) => {
      state.createReplyLoading = false
      state.createReplyError = action.error
    })
  },
})

// export const {} = balanceDebatePost.actions
export default balanceDebatePost.reducer


