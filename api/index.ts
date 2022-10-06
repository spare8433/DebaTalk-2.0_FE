import axios from 'axios';

const SERVER_URL = 'http://localhost:3065/'

axios.defaults.withCredentials = true

export const axiosInstance = (url: string) => axios.create({ baseURL: `${SERVER_URL}${url}` })