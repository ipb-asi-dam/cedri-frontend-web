import React, { useContext } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

// mui components
import AppBar from '@material-ui/core/AppBar'
import IconButton from '@material-ui/core/IconButton'
import Toolbar from '@material-ui/core/Toolbar'
import withStyles from '@material-ui/core/styles/withStyles'

// icons
import { ic_menu as MenuIcon } from 'react-icons-kit/md/ic_menu'

// contexts
import { AuthContext } from 'contexts/auth'

import AccountMenu from 'components/account-menu'
import Icon from 'components/icon'
import NavLink from 'components/nav-link'

import styles from './styles'

function Navbar ({ classes, isMobile, items, toggleDrawer }) {
  const { userInfo: { isAuthenticated } } = useContext(AuthContext)

  return (
    <AppBar component='header' color='primary' elevation={0}>
      <Toolbar component='nav'>
        {isMobile && (
          <IconButton color='inherit' onClick={toggleDrawer}>
            <Icon icon={MenuIcon} />
          </IconButton>
        )}
        <Link className={classes.navItem} to='/'>
          CeDRI
        </Link>
        <div style={{
          display: 'flex',
          justifyContent: isMobile ? 'flex-end' : 'space-between',
          alignItems: 'center',
          width: '100%'
        }}>
          <div hidden={isMobile}>
            {items.map(({ title, path }) => (
              <NavLink key={path} className={classes.navItem} to={path}>
                {title}
              </NavLink>
            ))}
          </div>
          <div>
            {isAuthenticated && <AccountMenu />}
            {!isAuthenticated && (
              <NavLink className={classes.navItem} to='/login'>
                Login
              </NavLink>
            )}
          </div>
        </div>
      </Toolbar>
    </AppBar>
  )
}

Navbar.defaultProps = {
  isMobile: false
}

Navbar.propTypes = {
  classes: PropTypes.object.isRequired,
  isMobile: PropTypes.bool,
  items: PropTypes.arrayOf(String),
  toggleDrawer: PropTypes.func.isRequired
}

export default withStyles(styles)(Navbar)
