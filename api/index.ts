import axios from 'axios'
import getConfig from 'next/config'

// const SERVER_URL = 'https://port-0-debatalk-2-0-be-3zspi2nlg9csqcl.sel3.cloudtype.app/'
// const SERVER_URL = 'http://localhost:3065/'

axios.defaults.withCredentials = true

const { publicRuntimeConfig } = getConfig()
const APISeverUrl = publicRuntimeConfig.API_SERVER_URL

console.log(APISeverUrl)

export const axiosInstance = (url: string) => axios.create({ baseURL: `${APISeverUrl}${url}` })

// export const axiosInstance = (url: string) => axios.create({ baseURL: `${1}${url}` })
