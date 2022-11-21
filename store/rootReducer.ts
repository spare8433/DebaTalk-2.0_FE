import { AnyAction, CombinedState, combineReducers, ReducersMapObject } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import { Reducer } from 'react';

import user, { UserState } from './slices/user';
import debatePost, { debatePostState } from './slices/debatePost';
import debatePosts, { debatePostsState } from './slices/debatePosts';
import balanceDebatePosts from './slices/balanceDebatePosts';
import balanceDebatePost from './slices/balanceDebatePost';

import { BalanceDebatePostsState } from './slices/balanceDebatePosts/type';
import { BalanceDebatePostState } from './slices/balanceDebatePost/type';


export interface ReducerStates {
  user: UserState;
  debatePost: debatePostState
	debatePosts: debatePostsState
	balanceDebatePosts : BalanceDebatePostsState
	balanceDebatePost : BalanceDebatePostState
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
				debatePost,
				debatePosts,
				balanceDebatePosts,
				balanceDebatePost
			})
			return combinedReducers(state,action)
	}
};

export default rootReducer; 