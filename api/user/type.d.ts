import { AxiosAPIwithParam } from 'types/axiosAPI'
import { FindUserId, LoginParam, SignUpParam, UpdatePasswordParam } from 'types/params'

type LoginAPI = AxiosAPIwithParam<LoginParam>
type SignUpAPI = AxiosAPIwithParam<SignUpParam>
type FindUserIdAPI = AxiosAPIwithParam<FindUserId>

type GetAuthCodeAPI = AxiosAPIwithParam<GetAuthCode>
type CheckAuthCodeAPI = AxiosAPIwithParam<CheckAuthCode>
type UpdatePasswordAPI = AxiosAPIwithParam<UpdatePasswordParam>
type CheckDuplicateIdApi = AxiosAPIwithParam<CheckDuplicateIdParam>
type CheckDuplicateEmailApi = AxiosAPIwithParam<CheckDuplicateEmailParam>
