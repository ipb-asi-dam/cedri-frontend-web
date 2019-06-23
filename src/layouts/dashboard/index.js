import React, { useCallback, useContext, useEffect, useState } from 'react'
import { Route } from 'react-router-dom'
import classNames from 'clsx'

// MUI components
import Drawer from '@material-ui/core/Drawer'

// MUI helpers
import makeStyles from '@material-ui/core/styles/makeStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTheme from '@material-ui/core/styles/useTheme'

// core components
import Header from './components/navbar'
import Sidebar from './components/sidebar'
import LazyRoutes from 'components/lazy-routes'

// contexts
import { AuthContext } from 'contexts/auth'

// styles
import styles from './styles'

import routes from './routes'

const useStyles = makeStyles(styles)

function DashboardLayout () {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const { logout, updateUserInfo, userInfo: { user } } = useContext(AuthContext)
  const [filteredRoutes, setRoutes] = useState(routes)
  const [currentRoute, setRoute] = useState({ name: 'Home' })
  const [isOpen, toggleDrawer] = useState(true)

  const handleDrawerToggle = useCallback(() => toggleDrawer(!isOpen), [isOpen])

  const applyShift = isOpen && !isMobile

  useEffect(() => {
    (async () => {
      await updateUserInfo(user.id)
    })()

    setRoutes(routes
      .filter(({ onlyAdmin }) => !onlyAdmin || (onlyAdmin && user.isAdmin)))
  }, [updateUserInfo, user.id, user.isAdmin])

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
          user={user}
        />
      </Drawer>
      <main className={classNames(classes.content, {
        [classes.contentShift]: applyShift
      })}>
        <LazyRoutes routes={routes}>
          {(routes) => (
            routes
              .filter(({ onlyAdmin }) => !onlyAdmin || (onlyAdmin && user.isAdmin))
              .map(route => <Route key={route.path} {...route} />)
          )}
        </LazyRoutes>
      </main>
    </>
  )
}

export default DashboardLayout
