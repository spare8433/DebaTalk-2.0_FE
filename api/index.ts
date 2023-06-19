import axios from 'axios'

// const SERVER_URL = 'https://port-0-debatalk-2-0-be-3zspi2nlg9csqcl.sel3.cloudtype.app/'
const SERVER_URL = 'http://localhost:3065/'

axios.defaults.withCredentials = true

export const axiosInstance = (url: string) => axios.create({ baseURL: `${SERVER_URL}${url}` })
