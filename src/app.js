import React, { lazy, Suspense, useContext } from 'react'
import t from 'prop-types'
import { Redirect, Route, Switch } from 'react-router-dom'
import LinearProgress from '@material-ui/core/LinearProgress'

import { AuthContext } from 'contexts/auth'
import { SnackbarContext } from 'contexts/snackbar'

const Dashboard = lazy(() => import('layouts/dashboard'))
const Main = lazy(() => import('layouts/main'))
const LoginPage = lazy(() => import('pages/login'))
const PageNotFound = lazy(() => import('pages/page-not-found'))
const RecoverPage = lazy(() => import('pages/recover-password'))

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
  const { notification } = useContext(SnackbarContext)

  if (userInfo.isAuthenticated && location.pathname === '/login') {
    return <Redirect to='/dashboard' />
  }

  return (
    <Suspense fallback={<LinearProgress />} >
      <Switch>
        <Route path='/login' component={LoginPage} />
        <Route path='/recover-password' component={RecoverPage} />
        <Route path='/page-not-found' component={PageNotFound} />
        <PrivateRoute path='/dashboard' component={Dashboard} />
        <Route path='/' component={Main} />
      </Switch>
      {notification}
    </Suspense>
  )
}

App.propTypes = {
  location: t.object.isRequired
}

export default App
