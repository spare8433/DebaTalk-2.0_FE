import { AxiosAPIwithParam } from 'types/axiosAPI'
import { LoginParam, SignUpParam } from 'types/params'

type LoginAPI = AxiosAPIwithParam<LoginParam>
type SignUpAPI = AxiosAPIwithParam<SignUpParam>
