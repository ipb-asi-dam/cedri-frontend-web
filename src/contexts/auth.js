import React, { createContext, useCallback, useContext, useState } from 'react'
import t from 'prop-types'
import axios from 'config/axios'
import {
  getTokenContent,
  isAuthenticated,
  login as loginService,
  logout as logoutService
} from 'services/auth'

import { SnackbarContext } from 'contexts/snackbar'

export const AuthContext = createContext()

function Auth ({ children }) {
  const { showNotification } = useContext(SnackbarContext)
  const [userInfo, setUserInfo] = useState({
    user: getTokenContent(),
    isAuthenticated: isAuthenticated()
  })

  const { id } = getTokenContent() || {}

  const updateUserInfo = useCallback(async () => {
    const response = await axios.get(`/private/users/${id}`)
    const { file: _file, ...user } = response.data.data
    const file = _file || {}

    setUserInfo(userInfo => ({
      ...userInfo,
      user: {
        ...user,
        imageURL: file.id
          ? `${process.env.REACT_APP_API_URL}/public/files/${file.md5}`
          : '//via.placeholder.com/100'
      }
    }))
  }, [id])

  const login = useCallback(async (data) => {
    try {
      const res = await axios.post('/public/authenticate', data)
      loginService(res.data.data.token)
      setUserInfo({
        user: { id },
        isAuthenticated: isAuthenticated()
      })
    } catch (err) {
      showNotification('Error during login, please try again!')
    }
  }, [id, showNotification])

  const logout = useCallback(() => {
    logoutService()
    setUserInfo({
      user: null,
      isAuthenticated: false
    })
  }, [])

  return (
    <AuthContext.Provider value={{
      login,
      logout,
      userInfo,
      updateUserInfo
    }}>
      {children}
    </AuthContext.Provider>
  )
}

Auth.propTypes = {
  children: t.node.isRequired
}

export default Auth
