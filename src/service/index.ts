import axios from 'axios'
import { TIME_OUT } from './config'

const request = axios.create({
  baseURL: process.env.REACT_APP_BASE_URL,
  timeout: TIME_OUT
})

request.interceptors.request.use(
  (config) => {
    return config
  },
  (err) => {
    Promise.reject(err)
  }
)

request.interceptors.response.use(
  (response) => {
    const code = response.status
    if (code < 200 || code > 300) {
      return Promise.reject('error')
    } else {
      return response.data
    }
  },
  (err) => {
    Promise.reject(err)
  }
)

export default request
