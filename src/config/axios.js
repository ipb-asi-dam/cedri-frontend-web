import axios from 'axios'
import { getToken } from 'services/auth'

const api = axios.create({
  baseURL: 'http://194.210.89.120:5000/api'
})

api.interceptors.request.use(config => {
  const token = getToken()

  if (token) {
    config.headers['x-access-token'] = token
  }

  return config
})

export default api
