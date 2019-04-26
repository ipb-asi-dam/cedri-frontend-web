import React, { useCallback, useEffect, useState } from 'react'
import t from 'prop-types'
import compose from 'recompose/compose'
import { Switch, Route } from 'react-router-dom'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'

// core components
import Header from 'components/navbar'
import Sidebar from 'components/sidebar'

import { dashboardRoutes, innerRoutes } from 'routes.js'

const routes = [
  ...dashboardRoutes,
  ...innerRoutes
]

const switchRoutes = (
  <Switch>
    {routes.map(({ children }) =>
      children.map((prop, key) => (
        <Route
          exact={!!prop.exact}
          path={prop.layout + prop.path}
          component={prop.component}
          key={key}
        />
      ))
    )}
  </Switch>
)

let theme = createMuiTheme({
  typography: {
    useNextVariants: true,
    h5: {
      fontWeight: 500,
      fontSize: 26,
      letterSpacing: 0.5
    }
  },
  palette: {
    primary: {
      light: '#63ccff',
      main: '#009be5',
      dark: '#006db3'
    }
  },
  shape: {
    borderRadius: 8
  }
})

theme = {
  ...theme,
  overrides: {
    MuiDrawer: {
      paper: {
        backgroundColor: '#18202c'
      }
    },
    MuiButton: {
      label: {
        textTransform: 'initial'
      },
      contained: {
        boxShadow: 'none',
        '&:active': {
          boxShadow: 'none'
        }
      }
    },
    MuiIconButton: {
      root: {
        padding: theme.spacing.unit
      }
    },
    MuiTooltip: {
      tooltip: {
        borderRadius: 4
      }
    },
    MuiDivider: {
      root: {
        backgroundColor: '#404854'
      }
    },
    MuiListItemText: {
      primary: {
        fontWeight: theme.typography.fontWeightMedium
      }
    },
    MuiListItemIcon: {
      root: {
        color: 'inherit',
        marginRight: 0,
        '& svg': {
          fontSize: 20
        }
      }
    },
    MuiAvatar: {
      root: {
        width: 32,
        height: 32
      }
    }
  },
  props: {
    MuiTab: {
      disableRipple: true
    }
  },
  mixins: {
    ...theme.mixins,
    toolbar: {
      minHeight: 48
    }
  }
}

const drawerWidth = 256

const styles = theme => ({
  root: {
    display: 'flex',
    minHeight: '100vh'
  },
  drawer: {
    [theme.breakpoints.up('md')]: {
      width: drawerWidth,
      flexShrink: 0
    }
  },
  appContent: {
    flex: 1,
    display: 'flex',
    flexDirection: 'column',
    width: '100%'
  },
  mainContent: {
    flex: 1,
    padding: '20px 20px 0',
    background: '#eaeff1',
    paddingTop: theme.spacing.unit * 12
  }
})

const smallDevicesBreakpoints = ['xs', 'sm']

function AdminLayout ({ classes, width }) {
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
          routes={dashboardRoutes}
          smDown={smDown}
        />
        <div className={classes.appContent}>
          <Header
            onDrawerToggle={handleDrawerToggle}
            smDown={smDown}
            title={currentRoute.name}
          />
          <main className={classes.mainContent}>
            {switchRoutes}
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
