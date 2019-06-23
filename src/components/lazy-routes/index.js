import React, { Suspense } from 'react'
import PropTypes from 'prop-types'
import { Switch, Route } from 'react-router-dom'

import LinearProgress from '@material-ui/core/LinearProgress'

// eslint-disable-next-line react/prop-types
function renderRoute ({ routes = [], ...route }) {
  return (
    <Route
      key={route.path}
      exact={route.exact}
      path={route.path}
      render={(props) => <route.component routes={routes} {...props} />}
    />
  )
}

function renderNestedRoutes (routes, first = true) {
  const wrapperProps = first ? {} : { fallback: <LinearProgress /> }
  const Wrapper = first ? React.Fragment : Suspense

  return (
    <Wrapper {...wrapperProps}>
      <Switch>
        {routes.map(({ routes: nestedRoutes = [], ...route }) => (
          <React.Fragment key={route.path}>
            {nestedRoutes.length > 0
              ? renderNestedRoutes(nestedRoutes, false)
              : renderRoute(route)}
          </React.Fragment>
        ))}
      </Switch>
    </Wrapper>
  )
}

function LazyRoutes ({ children, renderNested, routes }) {
  return (
    <Suspense fallback={<LinearProgress />}>
      <Switch>
        {children(routes, renderNested)}
      </Switch>
    </Suspense>
  )
}

LazyRoutes.defaultProps = {
  children: (routes, renderNested) => renderNested
    ? renderNestedRoutes(routes)
    : routes.map(renderRoute),
  renderNested: false,
  routes: []
}

LazyRoutes.propTypes = {
  children: PropTypes.func.isRequired,
  renderNested: PropTypes.bool,
  routes: PropTypes.array.isRequired
}

export default LazyRoutes
