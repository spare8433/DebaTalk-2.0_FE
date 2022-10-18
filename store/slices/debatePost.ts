import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createDebatePostAPI } from '@api/debatePost'
import { CreateDebatePostParam } from 'params'


export interface debatePostState {
  getPostLoading: boolean,
  getPostDone: boolean,
  getPostError: null,
	createPostLoading: boolean,
	createPostDone: boolean,
	createPostError: null | Error | unknown,
	deletePostLoading: boolean,
	deletePostDone: boolean,
	deletePostError: null | Error | unknown,
  debatePostData: {
    readonly id: string,
    method: string,
    category: string,
    title: string,
    content: string,
    imgUrl: string | null,
    hits: number
    createdAt: string,
    updatedAt: string,
  } | { readonly id: string, }| null
}

const initialState: debatePostState = {
  getPostLoading: false,
  getPostDone: false,
  getPostError: null,
	createPostLoading: false,
	createPostDone: false,
	createPostError: null,
	deletePostLoading: false,
	deletePostDone: false,
	deletePostError: null,
	debatePostData: null
}

// export const createDebatePost = createAsyncThunk(
// "debatePost/create",
//   async (loginData: CreateDebatePostParam) => {
//     const response = await createDebatePostAPI(loginData);
//     return response.data;
//   },
// );

export const createDebatePost = createAsyncThunk(
  "debatePost/create",
    async (data: CreateDebatePostParam) => {
      const response = await createDebatePostAPI(data);
      return response.data;
    },
  );

export const debatePost = createSlice({
  name: 'debatePost',
  initialState,
  reducers: {
    increment: (state, action) => {
      // state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(createDebatePost.pending, (state, action) => {
      state.createPostLoading = true
      state.createPostDone = false
      state.createPostError = null
    })
    builder.addCase(createDebatePost.fulfilled, (state, action) => {
      state.createPostLoading = false
      state.createPostDone = true
    })
    builder.addCase(createDebatePost.rejected, (state, action) => {
      state.createPostLoading = false
      state.createPostError = action.error
    })
  },
})

export const { increment } = debatePost.actions
export default debatePost.reducer


