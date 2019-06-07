import React, { useCallback, useContext, useEffect, useState } from 'react'
import t from 'prop-types'
import classNames from 'clsx'
import compose from 'recompose/compose'

// MUI components
import Drawer from '@material-ui/core/Drawer'

// MUI helpers
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'

// core components
import Header from './components/navbar'
import Sidebar from './components/sidebar'
import Routes from './components/routes'

// contexts
import { AuthContext } from 'contexts/auth'

// styles
import styles from './styles'

import { dashboardRoutes } from 'src/routes.js'

const smBreakpoints = ['xs', 'sm', 'md']

function DashboardLayout ({ classes, width }) {
  const { userInfo, logout } = useContext(AuthContext)
  const [filteredRoutes, setRoutes] = useState(dashboardRoutes)
  const [currentRoute, setRoute] = useState({ name: 'Home' })
  const [isOpen, toggleDrawer] = useState(true)

  const handleDrawerToggle = useCallback(() => toggleDrawer(!isOpen), [isOpen])

  const isMobile = smBreakpoints.includes(width)
  const applyShift = isOpen && !isMobile

  useEffect(() => {
    setRoutes(dashboardRoutes
      .filter(({ onlyAdmin }) => !onlyAdmin || (onlyAdmin && userInfo.user.isAdmin)))
  }, [userInfo])

  const handleRouteChange = useCallback((name) => () => {
    window.scrollTo(0, 0)
    setRoute({ name })
  }, [])

  return (
    <>
      <Header
        className={classNames(classes.topbar, {
          [classes.topbarShift]: applyShift
        })}
        handleLogout={logout}
        isDrawerOpen={isOpen}
        onDrawerToggle={handleDrawerToggle}
        title={currentRoute.name}
        userInfo={userInfo}
      />
      <Drawer
        anchor='left'
        classes={{ paper: classes.drawerPaper }}
        onClose={handleDrawerToggle}
        open={isOpen}
        variant={isMobile ? 'temporary' : 'persistent'}
      >
        <Sidebar
          className={classes.sidebar}
          onChangeRoute={handleRouteChange}
          routes={filteredRoutes}
        />
      </Drawer>
      <main className={classNames(classes.content, {
        [classes.contentShift]: applyShift
      })}>
        <Routes />
      </main>
    </>
  )
}

DashboardLayout.propTypes = {
  classes: t.object.isRequired,
  width: t.string
}

export default compose(
  withStyles(styles),
  withWidth()
)(DashboardLayout)
