import React, { lazy, Suspense, useContext } from 'react'
import t from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'

import { AuthContext } from 'contexts/auth'

const Admin = lazy(() => import('layouts/admin'))
const MainPage = lazy(() => import('pages/main'))
const LoginPage = lazy(() => import('pages/login'))

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

function App ({ location }) {
  const { userInfo } = useContext(AuthContext)

  if (userInfo.isAuthenticated && location.pathname === '/login') {
    return <Redirect to='/dashboard' />
  }

  return (
    <Suspense fallback={<LinearProgress />} >
      <Switch>
        <Route exact path='/' component={MainPage} />
        <Route path='/login' component={LoginPage} />
        <PrivateRoute path='/dashboard' component={Admin} />
        <Route component={() => <p>404</p>} />
      </Switch>
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
