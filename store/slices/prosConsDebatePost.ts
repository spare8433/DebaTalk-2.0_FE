import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createProsConsDebatePostAPI } from '@api/prosConsDebatePost'

export interface ProsConsDebatePostState {
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

const initialState: ProsConsDebatePostState = {
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

export const createProsConsDebatePost = createAsyncThunk(
  "prosConsDebatePost/create",
    async (data:FormData) => {
      const response = await createProsConsDebatePostAPI(data);
      return response.data;
    },
  );

export const prosConsDebatePost = createSlice({
  name: 'prosConsDebatePost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createProsConsDebatePost.pending, (state, action) => {
      state.createPostLoading = true
      state.createPostDone = false
      state.createPostError = null
    })
    builder.addCase(createProsConsDebatePost.fulfilled, (state, action) => {
      state.createPostLoading = false
      state.createPostDone = true
    })
    builder.addCase(createProsConsDebatePost.rejected, (state, action) => {
      state.createPostLoading = false
      state.createPostError = action.error
    })
  },
})

// export const { } = prosConsDebatePost.actions
export default prosConsDebatePost.reducer
