import axios from 'axios'

const axiosInstance = axios.create({
  headers: { 'Content-Type': 'application/json' },
  responseType: 'json',
  timeout: 10000
})

export default axiosInstance
