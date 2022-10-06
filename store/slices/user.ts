import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import type { PayloadAction } from '@reduxjs/toolkit'
import { LoginParam, SignUpParam } from 'params'
import { loginAPI, logoutAPI, sginUpAPI } from '@api/user'


export interface UserState {
  loadMyInfoLoading: boolean,
	loadMyInfoDone: boolean,
	loadMyInfoError: null | Error | unknown,
	signUpLoading: boolean,
	signUpDone: boolean,
	signUpError: null | Error | unknown,
	logInLoading: boolean,
	logInDone: boolean,
	logInError: null | Error | unknown,
  logOutLoading: boolean,
	logOutDone: boolean,
	logOutError: null | Error | unknown,
  myData: {
    readonly id: string,
    readonly userId: string,
    email: string,
    nickname: string,
    level: number,
    point: number,
    imgUrl?: string,
    createdAt: string,
    updatedAt: string,
  } | null
}

const initialState: UserState = {
  loadMyInfoLoading: false,
	loadMyInfoDone: false,
	loadMyInfoError: null,
	signUpLoading: false,
	signUpDone: false,
	signUpError: null,
	logInLoading: false,
	logInDone: false,
	logInError: null,
  logOutLoading: false,
	logOutDone: false,
	logOutError: null,
  myData: null,
}

export const logIn = createAsyncThunk(
"user/login",
  async (loginData: LoginParam) => {
    const response = await loginAPI(loginData);
    return response.data;
  },
);

export const logOut = createAsyncThunk(
  "user/logout",
    async () => await logoutAPI()
  );

export const signUp = createAsyncThunk(
  "user/signup",
  async (signUpData: SignUpParam) => {
    const response = await sginUpAPI(signUpData);
    return response.data;
  },
);

export const userSlice = createSlice({
  name: 'user',
  // `createSlice` will infer the state type from the `initialState` argument
  initialState,
  reducers: {
    increment: (state) => {
      // state.value += 1
    },
  },
  extraReducers: (builder) => {
    // 로그인
    builder.addCase(logIn.pending, (state, action) => {
      state.logInLoading = true
      state.logInDone = false
      state.logInError = null
    })
    builder.addCase(logIn.fulfilled, (state, action) => {
      state.logInLoading = false
      state.logInDone = true
      state.myData = action.payload
    })
    builder.addCase(logIn.rejected, (state, action) => {
      state.logInLoading = false
      state.logInError = action.error
    })
    // 회원가입
    builder.addCase(signUp.pending, (state, action) => {
      state.signUpLoading = true
      state.signUpDone = false
      state.signUpError = null
    })
    builder.addCase(signUp.fulfilled, (state, action) => {
      state.signUpLoading = false
      state.signUpDone = true
    })
    builder.addCase(signUp.rejected, (state, action) => {
      state.signUpLoading = false
      state.signUpError = action.error
    })
    // 로그아웃
    builder.addCase(logOut.pending, (state, action) => {
      state.logOutLoading = true
      state.logOutDone = false
      state.logOutError = null
    })
    builder.addCase(logOut.fulfilled, (state, action) => {
      state.logOutLoading = false
      state.logOutDone = true
      state.myData = null
    })
    builder.addCase(logOut.rejected, (state, action) => {
      state.logOutLoading = false
      state.logOutError = action.error
    })
  },
})

export const { increment } = userSlice.actions
export default userSlice.reducer


