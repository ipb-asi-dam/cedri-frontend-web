export const TOKEN_KEY = '@cedri-token'
export const getToken = () => localStorage.getItem(TOKEN_KEY)
export const isAuthenticated = () => !!getToken()
export const login = token => localStorage.setItem(TOKEN_KEY, JSON.stringify(token))
export const logout = () => localStorage.removeItem(TOKEN_KEY)
export const changeUserRole = () => {
  const user = JSON.parse(localStorage.getItem(TOKEN_KEY))

  if (user) {
    localStorage.setItem(TOKEN_KEY, JSON.stringify({
      ...user,
      isAdmin: !user.isAdmin
    }))
  }
}
