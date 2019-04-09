import React from 'react'
import t from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Hidden from '@material-ui/core/Hidden'
import IconButton from '@material-ui/core/IconButton'
import MenuIcon from '@material-ui/icons/Menu'
import NotificationsIcon from '@material-ui/icons/Notifications'
import Toolbar from '@material-ui/core/Toolbar'
import Tooltip from '@material-ui/core/Tooltip'
import Typography from '@material-ui/core/Typography'
import { withStyles } from '@material-ui/core/styles'

const drawerWidth = 240
const lightColor = 'rgba(255, 255, 255, 0.7)'

const styles = theme => ({
  appBar: {
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.sharp,
      duration: theme.transitions.duration.leavingScreen
    })
  },
  appBarShift: {
    width: `calc(100% - ${drawerWidth}px)`,
    marginLeft: drawerWidth,
    transition: theme.transitions.create(['margin', 'width'], {
      easing: theme.transitions.easing.easeOut,
      duration: theme.transitions.duration.enteringScreen
    })
  },
  menuButton: {
    marginLeft: -theme.spacing.unit
  },
  iconButtonAvatar: {
    padding: 4
  },
  link: {
    textDecoration: 'none',
    color: lightColor,
    '&:hover': {
      color: theme.palette.common.white
    }
  },
  button: {
    borderColor: lightColor
  }
})

const Header = ({ classes, onDrawerToggle, smDown = false }) => (
  <AppBar
    color='primary'
    component='div'
    elevation={0}
    position={smDown ? 'fixed' : 'static'}
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
            Authentication
          </Typography>
        </Grid>
        <Grid item>
          <Tooltip title='Alerts • No alters'>
            <IconButton color='inherit'>
              <NotificationsIcon />
            </IconButton>
          </Tooltip>
        </Grid>
        <Grid item>
          <IconButton color='inherit' className={classes.iconButtonAvatar}>
            <Avatar className={classes.avatar} src='/static/images/avatar/1.jpg' />
          </IconButton>
        </Grid>
      </Grid>
    </Toolbar>
  </AppBar>
)

Header.propTypes = {
  classes: t.object.isRequired,
  onDrawerToggle: t.func.isRequired,
  smDown: t.bool
}

export default withStyles(styles)(Header)
