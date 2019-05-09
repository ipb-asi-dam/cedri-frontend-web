import React, { useCallback, useContext, useEffect, useState } from 'react'
import t from 'prop-types'
import compose from 'recompose/compose'
import { Switch, Route } from 'react-router-dom'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'

// core components
import Header from 'components/navbar'
import Sidebar from 'components/sidebar'

// contexts
import { AuthContext } from 'contexts/auth'

// styles
import { drawerWidth, styles, theme } from './styles'

import { dashboardRoutes, innerRoutes } from 'routes.js'

function SwitchRoutes () {
  const { userInfo } = useContext(AuthContext)
  const routes = [
    ...dashboardRoutes,
    ...innerRoutes
  ]

  return (
    <Switch>
      {routes.map(({ children }) =>
        children
          .filter(({ onlyAdmin }) => !onlyAdmin || (onlyAdmin && userInfo.user.isAdmin))
          .map((prop, key) => (
            <Route
              exact
              path={prop.layout + prop.path}
              component={prop.component}
              key={key}
            />
          ))
      )}
      <Route component={() => <h1>404</h1>} />
    </Switch>
  )
}

const smallDevicesBreakpoints = ['xs', 'sm']

function AdminLayout ({ classes, width }) {
  const { userInfo, logout } = useContext(AuthContext)
  const [filteredRoutes, setRoutes] = useState(dashboardRoutes)
  const [currentRoute, setRoute] = useState({ name: 'Home' })
  const [mobileOpen, toggleDrawer] = useState(false)
  const [smDown, updateBreakpoint] = useState(smallDevicesBreakpoints.includes(width))

  const handleDrawerToggle = useCallback(() => toggleDrawer(!mobileOpen))

  useEffect(() => {
    updateBreakpoint(smallDevicesBreakpoints.includes(width))
    if (mobileOpen && !smDown) {
      handleDrawerToggle()
    }
  }, [width])

  useEffect(() => {
    setRoutes(dashboardRoutes
      .map(({ children, ...props }) => ({
        ...props,
        children: children
          .filter(({ onlyAdmin }) => !onlyAdmin || (onlyAdmin && userInfo.user.isAdmin))
      }))
    )
  }, [userInfo])

  const handleRouteChange = useCallback((name) => () => {
    handleDrawerToggle()
    window.scrollTo(0, 0)
    setRoute({ name })
  })

  return (
    <MuiThemeProvider theme={theme}>
      <div className={classes.root}>
        <Sidebar
          className={classes.drawer}
          onClose={handleDrawerToggle}
          onChangeRoute={handleRouteChange}
          open={mobileOpen}
          PaperProps={{ style: { width: drawerWidth } }}
          routes={filteredRoutes}
          smDown={smDown}
        />
        <div className={classes.appContent}>
          <Header
            handleLogout={logout}
            onDrawerToggle={handleDrawerToggle}
            smDown={smDown}
            title={currentRoute.name}
            userInfo={userInfo}
          />
          <main className={classes.mainContent}>
            <SwitchRoutes />
          </main>
        </div>
      </div>
    </MuiThemeProvider>
  )
}

AdminLayout.propTypes = {
  classes: t.object.isRequired,
  width: t.string
}

export default compose(
  withStyles(styles),
  withWidth()
)(AdminLayout)
