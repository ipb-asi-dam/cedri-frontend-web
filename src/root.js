import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'

import App from './app'
import AuthProvider from 'contexts/auth'

const Root = () => (
  <AuthProvider>
    <CssBaseline />
    <BrowserRouter>
      <Route component={App} />
    </BrowserRouter>
  </AuthProvider>
)

export default hot(module)(Root)
