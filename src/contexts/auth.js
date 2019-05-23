import React, { createContext, useCallback, useState } from 'react'
import t from 'prop-types'
import axios from 'config/axios'
import {
  getTokenContent,
  isAuthenticated,
  login as loginService,
  logout as logoutService,
  changeUserRole as changeUserRoleService
} from 'services/auth'

export const AuthContext = createContext()

function Auth ({ children }) {
  const [userInfo, setUser] = useState({
    user: getTokenContent(),
    isAuthenticated: isAuthenticated()
  })

  const login = useCallback(async (data) => {
    try {
      const res = await axios.post('/public/authenticate', data)
      loginService(res.data.token)
      setUser({
        user: getTokenContent(),
        isAuthenticated: isAuthenticated()
      })
    } catch (err) {
      console.log(err)
    }
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
