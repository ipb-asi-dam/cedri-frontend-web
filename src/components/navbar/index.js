import React, { useCallback, useContext, useState } from 'react'
import t from 'prop-types'
import classnames from 'classnames'
import AppBar from '@material-ui/core/AppBar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Switch from '@material-ui/core/Switch'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import AccountCircle from '@material-ui/icons/AccountCircle'
import MenuIcon from '@material-ui/icons/Menu'
import { withStyles } from '@material-ui/core/styles'

import { AuthContext } from 'contexts/auth'

const drawerWidth = 240

const styles = theme => ({
  appBar: {
    height: 65,
    justifyContent: 'center',
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    paddingLeft: 24,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: -theme.spacing.unit
  }
})

function Navbar ({
  classes,
  handleLogout,
  onDrawerToggle,
  smDown,
  title
}) {
  const { changeUserRole, userInfo } = useContext(AuthContext)
  const [anchorElement, setAnchorElement] = useState(null)

  const handleClose = useCallback(() => setAnchorElement(null))
  const handleOpenMenu = useCallback((e) => setAnchorElement(e.target))

  return (
    <AppBar
      className={classnames(
        classes.appBar,
        !smDown && classes.appBarShift
      )}
      color='primary'
      component='header'
      elevation={0}
      position='fixed'
    >
      <Toolbar>
        <Grid container alignItems='center' spacing={8}>
          <Hidden mdUp>
            <Grid item>
              <IconButton
                color='inherit'
                aria-label='Open drawer'
                onClick={onDrawerToggle}
                className={classes.menuButton}
              >
                <MenuIcon />
              </IconButton>
            </Grid>
          </Hidden>
          <Grid item xs>
            <Typography color='inherit' variant='h6'>
              {title}
            </Typography>
          </Grid>
          <Grid item>
            <IconButton color='inherit' onClick={handleOpenMenu}>
              <AccountCircle />
            </IconButton>
            <Menu
              open={Boolean(anchorElement)}
              onClose={handleClose}
              anchorEl={anchorElement}
            >
              <MenuItem>
                <Switch checked={userInfo.user.isAdmin} onChange={changeUserRole} />
              </MenuItem>
              <MenuItem onClick={handleLogout}>Logout</MenuItem>
            </Menu>
          </Grid>
        </Grid>
      </Toolbar>
    </AppBar>
  )
}

Navbar.defaultProps = {
  smDown: false
}

Navbar.propTypes = {
  classes: t.object.isRequired,
  handleLogout: t.func.isRequired,
  onDrawerToggle: t.func.isRequired,
  smDown: t.bool,
  title: t.string.isRequired
}

export default withStyles(styles)(Navbar)
