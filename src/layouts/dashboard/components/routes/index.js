import React, { useContext } from 'react'
import { Switch, Route } from 'react-router-dom'

import { AuthContext } from 'contexts/auth'

import { dashboardRoutes, innerRoutes } from 'src/routes.js'

export default function Routes () {
  const { userInfo } = useContext(AuthContext)
  const routes = [
    ...dashboardRoutes,
    ...innerRoutes
  ]

  return (
    <Switch>
      {routes
        .filter(({ onlyAdmin }) => !onlyAdmin || (onlyAdmin && userInfo.user.isAdmin))
        .map((prop, key) => (
          <Route
            exact
            path={prop.layout + prop.path}
            component={prop.component}
            key={key}
          />
        ))}
      <Route component={() => <h1>404</h1>} />
    </Switch>
  )
}