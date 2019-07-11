import React, { useCallback, useContext, useEffect, useState } from 'react'
import classnames from 'clsx'
import PropTypes from 'prop-types'

// MUI
import Typography from '@material-ui/core/Typography'

// styles
import useStyles from './styles'

// components
import Drawer from './components/drawer'
import Footer from './components/footer'
import Navbar from './components/navbar'
import LazyRoutes from 'components/lazy-routes'

import routes from './routes.js'
import { ThemeContext } from 'contexts/theme'

function MainLayout ({ location }) {
  const classes = useStyles()
  const { isMobile } = useContext(ThemeContext)

  const [isOpen, toggleDrawer] = useState(false)
  const [showHeader, setShowHeader] = useState(false)

  const handleDrawerToggle = useCallback(() => toggleDrawer(!isOpen), [isOpen])

  useEffect(() => {
    setShowHeader(location.pathname === '/')
  }, [location])

  return (
    <div className={classnames(classes.app, classes.flexColumn)}>
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
        {showHeader && (
          <div className={classes.header}>
            <Typography color='inherit' variant='h1'>
              Research Centre in Digitalization and Intelligent Robotics
            </Typography>
          </div>
        )}
        <div className={classes.mainContent}>
          <LazyRoutes routes={routes} />
        </div>
      </main>
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  location: PropTypes.object.isRequired
}

export default MainLayout
