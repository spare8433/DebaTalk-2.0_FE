import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { createProsConsDebatePostAPI } from '@api/prosConsDebatePost'
import { createIssueDebatePostAPI } from '@api/issueDebatePost'

export interface IssueDebatePostState {
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
    article: string[],
    imgUrl: string | null,
    hits: number
    createdAt: string,
    updatedAt: string,
  } | { readonly id: string, }| null
}

const initialState: IssueDebatePostState = {
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

export const createIssueDebatePost = createAsyncThunk(
  "issueDebatePost/create",
    async (data:FormData) => {
      const response = await createIssueDebatePostAPI(data);
      return response.data;
    },
  );

export const issueDebatePost = createSlice({
  name: 'issueDebatePost',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(createIssueDebatePost.pending, (state, action) => {
      state.createPostLoading = true
      state.createPostDone = false
      state.createPostError = null
    })
    builder.addCase(createIssueDebatePost.fulfilled, (state, action) => {
      state.createPostLoading = false
      state.createPostDone = true
    })
    builder.addCase(createIssueDebatePost.rejected, (state, action) => {
      state.createPostLoading = false
      state.createPostError = action.error
    })
  },
})

// export const { } = issueDebatePost.actions
export default issueDebatePost.reducer
