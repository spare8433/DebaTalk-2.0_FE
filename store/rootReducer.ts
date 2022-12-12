import { AnyAction, CombinedState, combineReducers, ReducersMapObject } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'react';

import user, { UserState } from './slices/user';
import debatePosts, { debatePostsState } from './slices/debatePosts';
import balanceDebatePosts from './slices/balanceDebatePosts';
import balanceDebatePost from './slices/balanceDebatePost';
import issueDebatePosts from './slices/issueDebatePosts';
import issueDebatePost from './slices/issueDebatePost';
import prosConsDebatePosts from './slices/prosConsDebatePosts';
import prosConsDebatePost from './slices/prosConsDebatePost';

import { BalanceDebatePostsState } from './slices/balanceDebatePosts/type';
import { BalanceDebatePostState } from './slices/balanceDebatePost/type';
// import { IssueDebatePostsState } from './slices/issueDebatePosts/type';
import { IssueDebatePostState } from './slices/issueDebatePost/type';
import { IssueDebatePostsState } from './slices/issueDebatePosts/type';

import { ProsConsDebatePostsState } from './slices/prosConsDebatePosts/type';
import { ProsConsDebatePostState } from './slices/prosConsDebatePost/type';



export interface ReducerStates {
  user: UserState;
	debatePosts: debatePostsState
	balanceDebatePosts: BalanceDebatePostsState
	balanceDebatePost: BalanceDebatePostState
	issueDebatePost: IssueDebatePostState
	issueDebatePosts: IssueDebatePostsState
	prosConsDebatePosts: ProsConsDebatePostsState
	prosConsDebatePost: ProsConsDebatePostState
}

// CombinedState<ReducerStates>  === ReducerStates
// Reducer<CombinedState<ReducerStates>, AnyAction>
const rootReducer = (state:ReducerStates, action: AnyAction): Reducer<CombinedState<ReducerStates>, AnyAction> | any => {
	switch (action.type) {
		case HYDRATE:
			return action.payload
		default : 
			const combinedReducers = combineReducers({
				user,
				debatePosts,
				balanceDebatePosts,
				balanceDebatePost,
				issueDebatePost,
				issueDebatePosts,
				prosConsDebatePosts,
				prosConsDebatePost,
			})
			return combinedReducers(state,action)
	}
};

export default rootReducer; 