import React from 'react'
import { BrowserRouter, Route } from 'react-router-dom'

import CssBaseline from '@material-ui/core/CssBaseline'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'

import App from './app'
import AuthProvider from 'contexts/auth'
import SnackbarProvider from 'contexts/snackbar'
import ThemeProvider from 'contexts/theme'

import theme from 'theme'

const Root = () => (
  <ThemeProvider>
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
  </ThemeProvider>
)

export default Root
