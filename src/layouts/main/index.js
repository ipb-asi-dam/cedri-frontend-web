import React, { useCallback, useState } from 'react'
import t from 'prop-types'
// import classNames from 'clsx'
import compose from 'recompose/compose'

import Typography from '@material-ui/core/Typography'

// MUI helpers
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'

// styles
import styles from './styles'

// components
import Drawer from './components/drawer'
import Footer from './components/footer'
import Navbar from './components/navbar'
import Routes from './components/routes'

const smBreakpoints = ['xs', 'sm', 'md']

const navItems = [
  {
    title: 'About Us',
    path: '/about-us'
  },
  {
    title: 'Research & Innovation',
    path: '/research-innovation'
  },
  {
    title: 'Communication',
    path: '/communication'
  },
  {
    title: 'People',
    path: '/people'
  },
  {
    title: 'Outcomes',
    path: '/outcomes'
  },
  {
    title: 'Contacts',
    path: '/contacts'
  }
]

function MainLayout ({ classes, width }) {
  const [isOpen, toggleDrawer] = useState(false)
  const isMobile = smBreakpoints.includes(width)

  const handleDrawerToggle = useCallback(() => toggleDrawer(!isOpen), [isOpen])

  return (
    <div className={classes.app}>
      <Navbar
        isMobile={isMobile}
        items={navItems}
        toggleDrawer={handleDrawerToggle}
      />
      <Drawer
        open={isOpen}
        onClose={handleDrawerToggle}
        items={navItems}
      />
      <main className={classes.main}>
        <div>
          <div className={classes.header}>
            <Typography color='inherit' variant='h1'>
              Research Centre in Digitalization and Intelligent Robotics
            </Typography>
          </div>
        </div>
        <div className={classes.mainContent}>
          <Routes />
        </div>
      </main>
      <Footer />
    </div>
  )
}

MainLayout.propTypes = {
  classes: t.object.isRequired,
  width: t.string
}

export default compose(
  withStyles(styles),
  withWidth()
)(MainLayout)
