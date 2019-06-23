import React, { useCallback, useState } from 'react'

import Typography from '@material-ui/core/Typography'

// MUI helpers
import makeStyles from '@material-ui/core/styles/makeStyles'
import useMediaQuery from '@material-ui/core/useMediaQuery'
import useTheme from '@material-ui/core/styles/useTheme'

// styles
import styles from './styles'

// components
import Drawer from './components/drawer'
import Footer from './components/footer'
import Navbar from './components/navbar'
import LazyRoutes from 'components/lazy-routes'

import routes from './routes.js'

const useStyles = makeStyles(styles)

function MainLayout () {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  const [isOpen, toggleDrawer] = useState(false)

  const handleDrawerToggle = useCallback(() => toggleDrawer(!isOpen), [isOpen])

  return (
    <div className={classes.app}>
      <Navbar
        isMobile={isMobile}
        items={routes}
        toggleDrawer={handleDrawerToggle}
      />
      <Drawer
        open={isOpen}
        onClose={handleDrawerToggle}
        items={routes}
      />
      <main className={classes.main}>
        <div className={classes.header}>
          <Typography color='inherit' variant='h1'>
            Research Centre in Digitalization and Intelligent Robotics
          </Typography>
        </div>
        <div className={classes.mainContent}>
          <LazyRoutes routes={routes} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

export default MainLayout
