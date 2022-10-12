declare type axiosAPI<T = any> = {
  (data?:T):Promise<AxiosResponse>
}
