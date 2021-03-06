import jwtDecode from 'jwt-decode'

export const TOKEN_KEY = '@cedri-token'
export const TOKEN_CONTENT = '@cedri-token-content'

export const getToken = () => localStorage.getItem(TOKEN_KEY)

export const getTokenContent = () => {
  const tokenContent = localStorage.getItem(TOKEN_CONTENT)

  return !tokenContent
    ? null
    : JSON.parse(tokenContent)
}

export const isAuthenticated = () => !!getToken()

export function login (token) {
  const tokenContent = jwtDecode(token)
  localStorage.setItem(TOKEN_KEY, token)
  localStorage.setItem(TOKEN_CONTENT, JSON.stringify(tokenContent))
}

export function logout () {
  localStorage.removeItem(TOKEN_KEY)
  localStorage.removeItem(TOKEN_CONTENT)
}
