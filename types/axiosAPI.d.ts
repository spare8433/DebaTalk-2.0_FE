import { AxiosResponse } from 'axios'

/**
 * RQT : request param data type
 * RST : response data type
 */
export type AxiosAPIwithParam<RQT = any, RST = any> = {
  (data: RQT, ...etc): Promise<AxiosResponse<RST>>
}

/**
 * RST : response data type
 */
export type AxiosAPI<RST = any> = {
  (): Promise<AxiosResponse<RST>>
}
