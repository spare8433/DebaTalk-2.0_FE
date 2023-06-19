declare type AxiosAPIwithParam<T = any> = {
  (data: T, ...etc): Promise<AxiosResponse>
}

declare type AxiosAPI = {
  (): Promise<AxiosResponse>
}
