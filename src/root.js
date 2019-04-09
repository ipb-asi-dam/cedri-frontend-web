import React, { lazy, Suspense } from 'react'
import { hot } from 'react-hot-loader/root'
import { BrowserRouter, Route, Switch } from 'react-router-dom'
import CssBaseline from '@material-ui/core/CssBaseline'
import LinearProgress from '@material-ui/core/LinearProgress'

// core components
const Admin = lazy(() => import('layouts/admin'))
const MainPage = lazy(() => import('pages/main'))

const Root = () => (
  <>
    <CssBaseline />
    <BrowserRouter>
      <Suspense fallback={<LinearProgress />} >
        <Switch>
          <Route exact path='/' component={MainPage} />
          <Route path='/admin' component={Admin} />
          <Route component={() => <p>404</p>} />
        </Switch>
      </Suspense>
    </BrowserRouter>
  </>
)

export default hot(Root)
