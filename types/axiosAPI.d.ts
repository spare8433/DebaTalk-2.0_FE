declare type axiosAPIwithParam<T = any> = {
  (data:T, ...etc):Promise<AxiosResponse>
}

declare type axiosAPI = {
  ():Promise<AxiosResponse>
}