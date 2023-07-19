/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import { GetDebateKeywords, GetIntegratedDebatePosts } from 'types/params'
import {
  getHotDebatePostsAPI,
  getDebateKeywordsAPI,
  getIntegratedDebatePostsAPI,
} from '@api/debatePosts'
import { DebatePostsState } from './type'

const initialState: DebatePostsState = {
  getKeywordsLoading: false,
  getKeywordsDone: false,
  getKeywordsError: null,
  getDebateHotTopicsLoading: false,
  getDebateHotTopicsDone: false,
  getDebateHotTopicsError: null,
  getIntegratedDebatePostsLoading: false,
  getIntegratedDebatePostsDone: false,
  getIntegratedDebatePostsError: null,

  hotDebatePosts: null,
  debateKeywordsData: null,
  integratedDebatePostData: null,
}

export const getDebateKeywords = createAsyncThunk(
  'debatePosts/getDebateKeywords',
  async (data: GetDebateKeywords) => {
    const response = await getDebateKeywordsAPI(data)
    return response.data
  },
)

export const getDebateHotTopics = createAsyncThunk('debatePosts/getDebateHotTopics', async () => {
  const response = await getHotDebatePostsAPI()
  return response.data
})

export const getIntegratedDebatePosts = createAsyncThunk(
  'debatePosts/getIntegratedDebatePosts',
  async (data: GetIntegratedDebatePosts) => {
    const response = await getIntegratedDebatePostsAPI(data.searchText)
    return response.data
  },
)

export const debatePosts = createSlice({
  name: 'debatePosts',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder.addCase(getDebateKeywords.pending, (state) => {
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

    builder.addCase(getDebateHotTopics.pending, (state) => {
      state.getDebateHotTopicsLoading = true
      state.getDebateHotTopicsDone = false
      state.getDebateHotTopicsError = null
    })
    builder.addCase(getDebateHotTopics.fulfilled, (state, action) => {
      state.getDebateHotTopicsLoading = false
      state.getDebateHotTopicsDone = true
      state.hotDebatePosts = action.payload
    })
    builder.addCase(getDebateHotTopics.rejected, (state, action) => {
      state.getDebateHotTopicsLoading = false
      state.getDebateHotTopicsError = action.error
    })

    builder.addCase(getIntegratedDebatePosts.pending, (state) => {
      state.getIntegratedDebatePostsLoading = true
      state.getIntegratedDebatePostsDone = false
      state.getIntegratedDebatePostsError = null
    })
    builder.addCase(getIntegratedDebatePosts.fulfilled, (state, action) => {
      state.getIntegratedDebatePostsLoading = false
      state.getIntegratedDebatePostsDone = true
      state.integratedDebatePostData = action.payload
    })
    builder.addCase(getIntegratedDebatePosts.rejected, (state, action) => {
      state.getIntegratedDebatePostsLoading = false
      state.getIntegratedDebatePostsError = action.error
    })
  },
})

export default debatePosts.reducer
