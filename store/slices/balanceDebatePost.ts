import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createBalanceDebatePostAPI } from '@api/balanceDabtePost'


export interface BalanceDebatePostState {
  getPostLoading: boolean,
  getPostDone: boolean,
  getPostError: null,
	createPostLoading: boolean,
	createPostDone: boolean,
	createPostError: null | Error | unknown,
	deletePostLoading: boolean,
	deletePostDone: boolean,
	deletePostError: null | Error | unknown,
  postData: {
    readonly id: string,
    method: string,
    category: string,
    title: string,
    issue1: string,
    issue2: string,
    article: string[],
    imgUrl: string | null,
    hits: number
    createdAt: string,
    updatedAt: string,
  } | { readonly id: string, }| null
}

const initialState: BalanceDebatePostState = {
  getPostLoading: false,
  getPostDone: false,
  getPostError: null,
	createPostLoading: false,
	createPostDone: false,
	createPostError: null,
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

export const balanceDebatePost = createSlice({
  name: 'balanceDebatePost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createBalanceDebatePost.pending, (state, action) => {
      state.createPostLoading = true
      state.createPostDone = false
      state.createPostError = null
    })
    builder.addCase(createBalanceDebatePost.fulfilled, (state, action) => {
      state.createPostLoading = false
      state.createPostDone = true
    })
    builder.addCase(createBalanceDebatePost.rejected, (state, action) => {
      state.createPostLoading = false
      state.createPostError = action.error
    })
  },
})

// export const {} = balanceDebatePost.actions
export default balanceDebatePost.reducer


