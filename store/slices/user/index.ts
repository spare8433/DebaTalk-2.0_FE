/* eslint-disable no-param-reassign */
import { createAsyncThunk, createSlice } from '@reduxjs/toolkit'
import {
  CheckAuthCode,
  CheckDuplicateEmailParam,
  CheckDuplicateIdParam,
  FindUserId,
  GetAuthCode,
  LoginParam,
  SignUpParam,
  UpdatePasswordParam,
} from 'types/params'
import {
  checkAuthCodeAPI,
  checkDuplicateEmailAPI,
  checkDuplicateIdAPI,
  getAuthCodeAPI,
  getFindUserIdAPI,
  getUserAPI,
  loginAPI,
  logoutAPI,
  signUpAPI,
  updatePasswordAPI,
} from '@api/user'
import { UserState } from './type'

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
  findUserIdLoading: false,
  findUserIdDone: false,
  findUserIdError: null,
  getAuthCodeLoading: false,
  getAuthCodeDone: false,
  getAuthCodeError: null,
  checkAuthCodeLoading: false,
  checkAuthCodeDone: false,
  checkAuthCodeError: null,
  updatePasswordLoading: false,
  updatePasswordDone: false,
  updatePasswordError: null,
  checkDuplicateIdLoading: false,
  checkDuplicateIdDone: false,
  checkDuplicateIdError: null,
  checkDuplicateEmailLoading: false,
  checkDuplicateEmailDone: false,
  checkDuplicateEmailError: null,

  myData: null,
  findUserData: null,
}

export const logIn = createAsyncThunk('user/login', async (loginData: LoginParam) => {
  const response = await loginAPI(loginData)
  return response.data
})

export const logOut = createAsyncThunk('user/logout', async () => {
  await logoutAPI()
})

export const signUp = createAsyncThunk('user/signup', async (signUpData: SignUpParam) => {
  const response = await signUpAPI(signUpData)
  return response.data
})

export const loadMyInfo = createAsyncThunk('user/loadMyInfo', async () => {
  const response = await getUserAPI()
  return response.data
})

export const findUserId = createAsyncThunk(
  'user/findUserId',
  async (findUserIdParam: FindUserId) => {
    const response = await getFindUserIdAPI(findUserIdParam)
    return response.data
  },
)

export const getAuthCode = createAsyncThunk(
  'user/getAuthCode',
  async (getAuthCodeParam: GetAuthCode) => {
    const response = await getAuthCodeAPI(getAuthCodeParam)
    return response.data
  },
)

export const checkAuthCode = createAsyncThunk(
  'user/checkAuthCode',
  async (checkAuthCodeParam: CheckAuthCode) => {
    const response = await checkAuthCodeAPI(checkAuthCodeParam)
    return response.data
  },
)

export const updatePassword = createAsyncThunk(
  'user/updatePassword',
  async (updatePasswordParam: UpdatePasswordParam) => {
    const response = await updatePasswordAPI(updatePasswordParam)
    return response.data
  },
)

export const checkDuplicateId = createAsyncThunk(
  'user/checkDuplicateId',
  async (checkDuplicateIdParam: CheckDuplicateIdParam) => {
    const response = await checkDuplicateIdAPI(checkDuplicateIdParam)
    return response.data
  },
)

export const checkDuplicateEmail = createAsyncThunk(
  'user/checkDuplicateEmail',
  async (checkDuplicateEmailParam: CheckDuplicateEmailParam) => {
    const response = await checkDuplicateEmailAPI(checkDuplicateEmailParam)
    return response.data
  },
)

export const user = createSlice({
  name: 'user',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    // 로그인
    builder.addCase(logIn.pending, (state) => {
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
    builder.addCase(signUp.pending, (state) => {
      state.signUpLoading = true
      state.signUpDone = false
      state.signUpError = null
    })
    builder.addCase(signUp.fulfilled, (state) => {
      state.signUpLoading = false
      state.signUpDone = true
    })
    builder.addCase(signUp.rejected, (state, action) => {
      state.signUpLoading = false
      state.signUpError = action.error
    })
    // 로그아웃
    builder.addCase(logOut.pending, (state) => {
      state.logOutLoading = true
      state.logOutDone = false
      state.logOutError = null
    })
    builder.addCase(logOut.fulfilled, (state) => {
      state.logOutLoading = false
      state.logOutDone = true
      state.myData = null
    })
    builder.addCase(logOut.rejected, (state, action) => {
      state.logOutLoading = false
      state.logOutError = action.error
    })
    // 사용자 정보 가져오기
    builder.addCase(loadMyInfo.pending, (state) => {
      state.loadMyInfoLoading = true
      state.loadMyInfoDone = false
      state.loadMyInfoError = null
    })
    builder.addCase(loadMyInfo.fulfilled, (state, action) => {
      state.loadMyInfoLoading = false
      state.loadMyInfoDone = true
      state.myData = action.payload
    })
    builder.addCase(loadMyInfo.rejected, (state, action) => {
      state.loadMyInfoLoading = false
      state.loadMyInfoError = action.error
    })

    // 사용자 id 찾기
    builder.addCase(findUserId.pending, (state) => {
      state.findUserIdLoading = true
      state.findUserIdDone = false
      state.findUserIdError = null
    })
    builder.addCase(findUserId.fulfilled, (state, action) => {
      state.findUserIdLoading = false
      state.findUserIdDone = true
      state.findUserData = action.payload
    })
    builder.addCase(findUserId.rejected, (state, action) => {
      state.findUserIdLoading = false
      state.findUserIdError = action.error
    })

    // 인증 코드 발급
    builder.addCase(getAuthCode.pending, (state) => {
      state.getAuthCodeLoading = true
      state.getAuthCodeDone = false
      state.getAuthCodeError = null
    })
    builder.addCase(getAuthCode.fulfilled, (state, action) => {
      state.getAuthCodeLoading = false
      state.getAuthCodeDone = true
      state.findUserData = action.payload
    })
    builder.addCase(getAuthCode.rejected, (state, action) => {
      state.getAuthCodeLoading = false
      state.getAuthCodeError = action.error
    })

    // 인증 코드 확인
    builder.addCase(checkAuthCode.pending, (state) => {
      state.checkAuthCodeLoading = true
      state.checkAuthCodeDone = false
      state.checkAuthCodeError = null
    })
    builder.addCase(checkAuthCode.fulfilled, (state) => {
      state.checkAuthCodeLoading = false
      state.checkAuthCodeDone = true
    })
    builder.addCase(checkAuthCode.rejected, (state, action) => {
      state.checkAuthCodeLoading = false
      state.checkAuthCodeError = action.error
    })

    // 비밀번호 변경
    builder.addCase(updatePassword.pending, (state) => {
      state.updatePasswordLoading = true
      state.updatePasswordDone = false
      state.updatePasswordError = null
    })
    builder.addCase(updatePassword.fulfilled, (state) => {
      state.updatePasswordLoading = false
      state.updatePasswordDone = true
    })
    builder.addCase(updatePassword.rejected, (state, action) => {
      state.updatePasswordLoading = false
      state.updatePasswordError = action.error
    })

    // 아이디 중복 체크
    builder.addCase(checkDuplicateId.pending, (state) => {
      state.checkDuplicateIdLoading = true
      state.checkDuplicateIdDone = false
      state.checkDuplicateIdError = null
    })
    builder.addCase(checkDuplicateId.fulfilled, (state) => {
      state.checkDuplicateIdLoading = false
      state.checkDuplicateIdDone = true
    })
    builder.addCase(checkDuplicateId.rejected, (state, action) => {
      state.checkDuplicateIdLoading = false
      state.checkDuplicateIdError = action.error
    })

    // 이메일 중복 체크
    builder.addCase(checkDuplicateEmail.pending, (state) => {
      state.checkDuplicateEmailLoading = true
      state.checkDuplicateEmailDone = false
      state.checkDuplicateEmailError = null
    })
    builder.addCase(checkDuplicateEmail.fulfilled, (state) => {
      state.checkDuplicateEmailLoading = false
      state.checkDuplicateEmailDone = true
    })
    builder.addCase(checkDuplicateEmail.rejected, (state, action) => {
      state.checkDuplicateEmailLoading = false
      state.checkDuplicateEmailError = action.error
    })
  },
})

export default user.reducer
