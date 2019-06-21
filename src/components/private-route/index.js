import React, { useContext } from 'react'
import t from 'prop-types'
import { Redirect, Route } from 'react-router-dom'

import { AuthContext } from 'contexts/auth'

function PrivateRoute ({ component: Component, ...rest }) {
  const { userInfo } = useContext(AuthContext)

  return (
    <Route
      {...rest}
      render={props => (
        userInfo.isAuthenticated
          ? <Component {...props} />
          : <Redirect to='/login' />
      )}
    />
  )
}

PrivateRoute.propTypes = {
  component: t.oneOfType([t.func, t.object]).isRequired
}

export default PrivateRoute
