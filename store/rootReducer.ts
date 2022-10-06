import { AnyAction, CombinedState, combineReducers, ReducersMapObject } from 'redux';
import { HYDRATE } from 'next-redux-wrapper';
import user, { UserState } from './slices/user';

import debatePost, { debatePostState } from './slices/debatePost';
import { Reducer } from 'react';

export interface ReducerStates {
  user: UserState;
  debatePost: debatePostState
}

// CombinedState<ReducerStates>  === ReducerStates
// Reducer<CombinedState<ReducerStates>, AnyAction>
const rootReducer = (state:ReducerStates, action: AnyAction): Reducer<CombinedState<ReducerStates>, AnyAction> | any => {
	switch (action.type) {
		case HYDRATE:
			return action.payload
		default : 
			const combinedReducers = combineReducers({
				user: user,
				debatePost: debatePost,
			})
			return combinedReducers(state,action)
	}
};

export default rootReducer; 