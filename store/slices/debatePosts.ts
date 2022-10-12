import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {  GetDebateKeywords } from 'params'
import { getDebateHotTopicsAPI, getDebateKeywordsAPI } from '@api/debatePosts'


export interface debatePostData {
  readonly id: string,
  method: string,
  category: string,
  title: string,
  content: string,
  imgUrl: string | null,
  hits: number
  createdAt: string,
  updatedAt: string,
}

export interface debateKeywordsData {
  readonly id: string,
  category: string,
  title: string,
  createdAt: string,
  updatedAt: string,
}

export interface debatePostsState {
  getPostsLoading: boolean,
  getPostsDone: boolean,
  getPostsError: null,
	getDebateHotTopicsLoading: boolean,
	getDebateHotTopicsDone: boolean,
	getDebateHotTopicsError: null | Error | unknown,
  getKeywordsLoading: boolean,
	getKeywordsDone: boolean,
	getKeywordsError: null | Error | unknown,
  debatePostData: debatePostData[] | null,
  debateKeywordsData:debateKeywordsData[] | null,
  hotDebateTopics: {
    subject:debatePostData[],
    prosCons:debatePostData[],
    balance:debatePostData[],
  } | null
}

const initialState: debatePostsState = {
  getPostsLoading: false,
  getPostsDone: false,
  getPostsError: null,
	getKeywordsLoading: false,
	getKeywordsDone: false,
	getKeywordsError: null,
  getDebateHotTopicsLoading: false,
	getDebateHotTopicsDone: false,
	getDebateHotTopicsError: null,
	debatePostData: null,
  debateKeywordsData: null,
  hotDebateTopics: null,
}

// export const createDebatePost = createAsyncThunk(
// "debatePost/create",
//   async (loginData: CreateDebatePostParam) => {
//     const response = await createDebatePostAPI(loginData);
//     return response.data;
//   },
// );

export const getDebateKeywords = createAsyncThunk(
  "debatePosts/getDebateKeywords",
    async (data: GetDebateKeywords) => {
      const response = await getDebateKeywordsAPI(data);
      return response.data;
    },
  );

export const getDebateHotTopics = createAsyncThunk(
  "debatePosts/getDebateHotTopics",
    async () => {
      const response = await getDebateHotTopicsAPI();
      return response.data;
    },
  );

export const debatePosts = createSlice({
  name: 'debatePosts',
  initialState,
  reducers: {
    increment: (state, action) => {
      // state.value += 1
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getDebateKeywords.pending, (state, action) => {
      state.getKeywordsLoading = true
      state.getKeywordsDone = false
      state.getKeywordsError = null
    })
    builder.addCase(getDebateKeywords.fulfilled, (state, action) => {
      state.getKeywordsLoading = false
      state.getKeywordsDone = true
      state.debateKeywordsData = action.payload
    })
    builder.addCase(getDebateKeywords.rejected, (state, action) => {
      state.getKeywordsLoading = false
      state.getKeywordsError = action.error
    })

    builder.addCase(getDebateHotTopics.pending, (state, action) => {
      state.getDebateHotTopicsLoading = true
      state.getDebateHotTopicsDone = false
      state.getDebateHotTopicsError = null
    })
    builder.addCase(getDebateHotTopics.fulfilled, (state, action) => {
      state.getDebateHotTopicsLoading = false
      state.getDebateHotTopicsDone = true
      state.hotDebateTopics = action.payload
    })
    builder.addCase(getDebateHotTopics.rejected, (state, action) => {
      state.getDebateHotTopicsLoading = false
      state.getDebateHotTopicsError = action.error
    })
  },
})

export const { increment } = debatePosts.actions
export default debatePosts.reducer


