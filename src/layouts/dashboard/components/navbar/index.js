import React, { useContext } from 'react'
import t from 'prop-types'
import classNames from 'clsx'
import { Link } from 'react-router-dom'

// MUI Components
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

// MUI Icons
import CloseIcon from '@material-ui/icons/Close'
import HomeIcon from '@material-ui/icons/HomeOutlined'
import LogoutIcon from '@material-ui/icons/ExitToApp'
import LockIcon from '@material-ui/icons/LockOutlined'
import LockOpenIcon from '@material-ui/icons/LockOpen'
import MenuIcon from '@material-ui/icons/Menu'

import { AuthContext } from 'contexts/auth'
import styles from './styles'

function Navbar ({
  classes,
  className,
  handleLogout,
  isDrawerOpen,
  onDrawerToggle,
  title
}) {
  const rootClassName = classNames(classes.root, className)
  const { changeUserRole, userInfo } = useContext(AuthContext)

  return (
    <div className={rootClassName}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          className={classes.menuButton}
          onClick={onDrawerToggle}
          variant='text'
        >
          {isDrawerOpen ? <CloseIcon /> : <MenuIcon />}
        </IconButton>

        <Typography className={classes.title} variant='h4'>
          {title}
        </Typography>

        <IconButton className={classes.homeButton}>
          <Link to='/'>
            <HomeIcon />
          </Link>
        </IconButton>

        <IconButton onClick={changeUserRole}>
          {userInfo.user.isAdmin ? <LockOpenIcon /> : <LockIcon />}
        </IconButton>

        <IconButton className={classes.signOutButton} onClick={handleLogout}>
          <LogoutIcon />
        </IconButton>
      </Toolbar>
    </div>
  )
}

Navbar.propTypes = {
  classes: t.object.isRequired,
  className: t.string,
  handleLogout: t.func.isRequired,
  isDrawerOpen: t.bool,
  onDrawerToggle: t.func.isRequired,
  title: t.string.isRequired
}

export default withStyles(styles)(Navbar)
