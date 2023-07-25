import { AnyAction, CombinedState, combineReducers } from '@reduxjs/toolkit'
import { HYDRATE } from 'next-redux-wrapper'

import user from './slices/user'
import users from './slices/users'
import debatePosts from './slices/debatePosts'
import balanceDebatePosts from './slices/balanceDebatePosts'
import balanceDebatePost from './slices/balanceDebatePost'
import issueDebatePosts from './slices/issueDebatePosts'
import issueDebatePost from './slices/issueDebatePost'
import prosConsDebatePosts from './slices/prosConsDebatePosts'
import prosConsDebatePost from './slices/prosConsDebatePost'
import debateTopicPosts from './slices/debateTopicPosts'
import debateTopicPost from './slices/debateTopicPost'

import { UserState } from './slices/user/type'
import { DebatePostsState } from './slices/debatePosts/type'
import { BalanceDebatePostsState } from './slices/balanceDebatePosts/type'
import { BalanceDebatePostState } from './slices/balanceDebatePost/type'
import { IssueDebatePostState } from './slices/issueDebatePost/type'
import { IssueDebatePostsState } from './slices/issueDebatePosts/type'
import { ProsConsDebatePostsState } from './slices/prosConsDebatePosts/type'
import { ProsConsDebatePostState } from './slices/prosConsDebatePost/type'
import { DebateTopicPostState } from './slices/debateTopicPost/type'
import { DebateTopicPostsState } from './slices/debateTopicPosts/type'
import { UsersState } from './slices/users/type'

export interface ReducerStates {
  user: UserState
  users: UsersState
  debatePosts: DebatePostsState
  balanceDebatePosts: BalanceDebatePostsState
  balanceDebatePost: BalanceDebatePostState
  issueDebatePost: IssueDebatePostState
  issueDebatePosts: IssueDebatePostsState
  prosConsDebatePosts: ProsConsDebatePostsState
  prosConsDebatePost: ProsConsDebatePostState
  debateTopicPost: DebateTopicPostState
  debateTopicPosts: DebateTopicPostsState
}

// CombinedState<ReducerStates>  === ReducerStates
// Reducer<CombinedState<ReducerStates>, AnyAction>

type RootReducerType = {
  (state: ReducerStates, action: AnyAction): CombinedState<ReducerStates>
}
const rootReducer: RootReducerType = (state, action) => {
  switch (action.type) {
    case HYDRATE:
      return action.payload
    default: {
      const combinedReducer = combineReducers({
        user,
        users,
        debatePosts,
        balanceDebatePosts,
        balanceDebatePost,
        issueDebatePost,
        issueDebatePosts,
        prosConsDebatePosts,
        prosConsDebatePost,
        debateTopicPost,
        debateTopicPosts,
      })
      return combinedReducer(state, action)
    }
  }
}

export default rootReducer
