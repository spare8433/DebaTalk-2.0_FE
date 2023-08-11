import { AnyAction, configureStore, Reducer } from '@reduxjs/toolkit'
import { useDispatch, useSelector } from 'react-redux'
import logger from 'redux-logger'
import { createWrapper } from 'next-redux-wrapper'
import type { TypedUseSelectorHook } from 'react-redux'

import rootReducer, { ReducerStates } from './rootReducer'

const makeStore = () =>
  configureStore({
    reducer: rootReducer as Reducer<ReducerStates, AnyAction>,
    middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(logger),
    devTools: process.env.NODE_ENV !== 'production',
  })

export type AppStore = ReturnType<typeof makeStore> // `store` type
export type AppState = ReturnType<AppStore['getState']> // `state` type in `store`

export type AppDispatch = AppStore['dispatch'] // `dispatch` in `store`

export const useAppDispatch: () => AppDispatch = useDispatch
export const useAppSelector: TypedUseSelectorHook<AppState> = useSelector

export const wrapper = createWrapper<AppStore>(makeStore)

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
// export default store
