import React, { Suspense } from 'react'
import { Switch, Redirect, Route } from 'react-router-dom'

import LinearProgress from '@material-ui/core/LinearProgress'

import { mainRoutes as routes } from 'src/routes.js'

export default function Routes () {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        {routes.map((prop, key) => (
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        ))}
        <Route render={() => <Redirect to='/page-not-found' />} />
      </Switch>
    </Suspense>
  )
}
