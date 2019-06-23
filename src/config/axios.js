import axios from 'axios'
import { getToken, logout } from 'services/auth'

const api = axios.create({
  baseURL: process.env.REACT_APP_API_URL
})

api.interceptors.request.use(config => {
  const token = getToken()

  if (token) {
    config.headers['x-access-token'] = token
  }

  return config
})

api.interceptors.response.use((response) => response, (error) => {
  if (
    error.response.status === 401 ||
    error.response.status === 403
  ) {
    logout()
    window.location = '/login'
  }
})

export default api
