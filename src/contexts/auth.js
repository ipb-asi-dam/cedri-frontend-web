import React, { createContext, useCallback, useState } from 'react'
import t from 'prop-types'

import {
  getToken,
  isAuthenticated,
  login as loginService,
  logout as logoutService,
  changeUserRole as changeUserRoleService
} from 'services/auth'

export const AuthContext = createContext()

const fakeUser = {
  name: 'user',
  isAdmin: true
}

function Auth ({ children }) {
  const [userInfo, setUser] = useState({
    user: JSON.parse(getToken()),
    isAuthenticated: isAuthenticated()
  })

  const login = useCallback(() => {
    loginService(fakeUser)
    setUser({
      user: fakeUser,
      isAuthenticated: isAuthenticated()
    })
  }, [])

  const logout = useCallback(() => {
    logoutService()
    setUser({
      user: null,
      isAuthenticated: false
    })
  }, [])

  const changeUserRole = useCallback(() => {
    changeUserRoleService()
    setUser({
      ...userInfo,
      user: {
        ...userInfo.user,
        isAdmin: !userInfo.user.isAdmin
      }
    })
  }, [userInfo])

  return (
    <AuthContext.Provider value={{
      changeUserRole,
      login,
      logout,
      userInfo
    }}>
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: t.node.isRequired
}

export default Auth
