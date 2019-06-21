import React from 'react'
import { hot } from 'react-hot-loader'
import { BrowserRouter, Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import App from './app'
import AuthProvider from 'contexts/auth'
import SnackbarProvider from 'contexts/snackbar'

import theme from 'theme'

const Root = () => (
  <SnackbarProvider>
    <AuthProvider>
      <CssBaseline />
      <MuiThemeProvider theme={theme}>
        <BrowserRouter>
          <Route component={App} />
        </BrowserRouter>
      </MuiThemeProvider>
    </AuthProvider>
  </SnackbarProvider>
)

export default hot(module)(Root)
