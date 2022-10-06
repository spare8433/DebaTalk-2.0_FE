import { AnyAction, configureStore, getDefaultMiddleware, Reducer } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import type { TypedUseSelectorHook } from 'react-redux'

import {createWrapper, HYDRATE} from 'next-redux-wrapper';
import rootReducer, { ReducerStates } from './rootReducer';
import logger from 'redux-logger'

const makeStore = () => configureStore({
  reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
  devTools: true,
})  

export type AppStore = ReturnType<typeof makeStore>;  // `store` type
export type AppState = ReturnType<AppStore['getState']>;  // `state` type in `store`

export type AppDispatch = AppStore["dispatch"];  // `dispatch` in `store`

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const wrapper = createWrapper<AppStore>(makeStore);

// 기존 리덕스 툴킷 스토어 방식
// const store = configureStore({
//   reducer: {
//     user: user,
//   },
//   devTools: true,
// })

// export type RootState = ReturnType<typeof store.getState>
// export type AppDispatch = typeof store.dispatch

// export const useAppDispatch: () => AppDispatch = useDispatch
// export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector
//export default store


