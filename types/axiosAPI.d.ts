declare type axiosAPIwithParam<T = any> = {
  (data:T):Promise<AxiosResponse>
}

declare type axiosAPI = {
  ():Promise<AxiosResponse>
}