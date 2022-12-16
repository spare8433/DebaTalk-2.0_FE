import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import {  GetDebateKeywords, GetDebatePostsParam } from 'params'
import { getDebateHotTopicsAPI, getDebateKeywordsAPI, getDebatePostsAPI } from '@api/debatePosts'
import { BalanceDebatePostDataState } from '../balanceDebatePost/type'
import { IssueDebatePostDataState } from '../issueDebatePost/type'
import { ProsConsDebatePostDataState } from '../prosConsDebatePost/type'


export interface debateKeywordData {
  readonly id: string,
  category: string,
  title: string,
}

export interface debatePostsState {
  getDebatePostsLoading: boolean,
  getDebatePostsDone: boolean,
  getDebatePostsError: null | Error | unknown,
	getDebateHotTopicsLoading: boolean,
	getDebateHotTopicsDone: boolean,
	getDebateHotTopicsError: null | Error | unknown,

  getKeywordsLoading: boolean,
	getKeywordsDone: boolean,
	getKeywordsError: null | Error | unknown,

  debatePostsData: {
    balance:BalanceDebatePostDataState[],
    issue:IssueDebatePostDataState[],
    prosCons:ProsConsDebatePostDataState[],
  } | null,

  debateKeywordsData:{
    balanceKeyword:debateKeywordData[],
    issueKeyword:debateKeywordData[],
    prosConsKeyword:debateKeywordData[],
  } | null,

  // hotDebateTopics: {
  //   subject:debatePostData[],
  //   prosCons:debatePostData[],
  //   balance:debatePostData[],
  // } | null
}

const initialState: debatePostsState = {
  getDebatePostsLoading: false,
  getDebatePostsDone: false,
  getDebatePostsError: null,
	getKeywordsLoading: false,
	getKeywordsDone: false,
	getKeywordsError: null,
  getDebateHotTopicsLoading: false,
	getDebateHotTopicsDone: false,
	getDebateHotTopicsError: null,
	debatePostsData: null,
  debateKeywordsData: null,
}

export const getDebatePosts = createAsyncThunk(
"debatePost/create",
  async (data: GetDebatePostsParam) => {
    const response = await getDebatePostsAPI(data);
    return response.data;
  },
);

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
    builder.addCase(getDebatePosts.pending, (state, action) => {
      state.getDebatePostsLoading = true
      state.getDebatePostsDone = false
      state.getDebatePostsError = null
    })
    builder.addCase(getDebatePosts.fulfilled, (state, action) => {
      state.getDebatePostsLoading = false
      state.getDebatePostsDone = true
      state.debatePostsData = action.payload
    })
    builder.addCase(getDebatePosts.rejected, (state, action) => {
      state.getDebatePostsLoading = false
      state.getDebatePostsError = action.error
    })

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
      state.debatePostsData = action.payload
    })
    builder.addCase(getDebateHotTopics.rejected, (state, action) => {
      state.getDebateHotTopicsLoading = false
      state.getDebateHotTopicsError = action.error
    })
  },
})

export const { increment } = debatePosts.actions
export default debatePosts.reducer


