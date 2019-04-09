import React, { useCallback, useState, useEffect } from 'react'
import t from 'prop-types'
import classNames from 'classnames'
import { Switch, Route } from 'react-router-dom'
import createMuiTheme from '@material-ui/core/styles/createMuiTheme'
import Grid from '@material-ui/core/Grid'
import MuiThemeProvider from '@material-ui/core/styles/MuiThemeProvider'
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'

// core components
import Header from 'components/navbar'
import Sidebar from 'components/sidebar'

import routes from 'routes.js'

const switchRoutes = (
  <Switch>
    {routes.map(({ children }) =>
      children.map((prop, key) => (
        <Route
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
    padding: '48px 36px 0',
    background: '#eaeff1'
  },
  positionFixed: {
    marginTop: theme.spacing.unit * 3
  },
  positionStatic: {
    paddingTop: theme.spacing.unit * 3
  }
})

const smallDevicesBreakpoints = ['xs', 'sm']

function AdminLayout ({ classes, width }) {
  const [mobileOpen, toggleDrawer] = useState(false)
  const [smDown, updateBreakpoint] = useState(smallDevicesBreakpoints.includes(width))

  const handleDrawerToggle = useCallback(() => toggleDrawer(!mobileOpen))

  useEffect(() => {
    updateBreakpoint(smallDevicesBreakpoints.includes(width))
    if (mobileOpen && !smDown) {
      handleDrawerToggle()
    }
  }, [width])

  const handleRouteChange = useCallback(() => {
    handleDrawerToggle()
    window.scrollTo(0, 0)
  })

  return (
    <MuiThemeProvider theme={theme}>
      <Grid container className={classes.root}>
        <Grid item>
          <nav className={classes.drawer}>
            <Sidebar
              onClose={handleDrawerToggle}
              onChangeRoute={handleRouteChange}
              open={mobileOpen}
              PaperProps={{ style: { width: drawerWidth } }}
              routes={routes}
              smDown={smDown}
            />
          </nav>
        </Grid>
        <Grid item xs={12} className={classes.appContent}>
          <Header
            onDrawerToggle={handleDrawerToggle}
            smDown={smDown}
          />
          <main className={classNames(
            classes.mainContent,
            smDown
              ? classes.positionFixed
              : classes.positionStatic
          )}>
            {switchRoutes}
          </main>
        </Grid>
      </Grid>
    </MuiThemeProvider>
  )
}

AdminLayout.propTypes = {
  classes: t.object.isRequired,
  width: t.string
}

export default withStyles(styles)(withWidth()(AdminLayout))
