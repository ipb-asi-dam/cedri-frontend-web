import React, { forwardRef, useContext } from 'react'
import t from 'prop-types'
import classNames from 'clsx'
import withStyles from '@material-ui/core/styles/withStyles'
import { NavLink as RRNavLink, Link as RRLink } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'

import { AuthContext } from 'contexts/auth'
import styles from './styles'

const NavLink = forwardRef((props, ref) => <RRNavLink innerRef={ref} {...props} />)

function Sidebar ({ classes, className, onChangeRoute, routes }) {
  const { userInfo } = useContext(AuthContext)
  const rootClass = classNames(classes.root, className)

  return (
    <nav className={rootClass}>
      <List component='div' disablePadding>
        <ListItem className={classes.logoWrapper}>
          CeDRI
        </ListItem>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <RRLink to='/dashboard/account'>
            <Avatar
              alt={userInfo.user.name}
              className={classes.avatar}
              src={userInfo.user.user.avatar || '//via.placeholder.com/100'}
            />
          </RRLink>
          <Typography
            className={classes.nameText}
            variant='h6'
          >
            {userInfo.user.name}
          </Typography>
          {userInfo.user.occupation && (
            <Typography
              className={classes.bioText}
              variant='caption'
            >
              {userInfo.user.occupation}
            </Typography>
          )}
        </div>
        <Divider className={classes.profileDivider} />
        {routes.map(route => route.icon && (
          <ListItem
            key={route.path}
            activeClassName={classes.itemActiveItem}
            button
            className={classes.listIitem}
            component={NavLink}
            exact
            onClick={onChangeRoute(route.name)}
            to={route.layout + route.path}
          >
            <ListItemIcon className={classes.listItemIcon}>
              <route.icon />
            </ListItemIcon>
            <ListItemText
              classes={{ primary: classes.listItemText }}
              primary={route.name}
            />
          </ListItem>
        ))}
      </List>
    </nav>
  )
}

Sidebar.propTypes = {
  classes: t.object.isRequired,
  className: t.string,
  onChangeRoute: t.func.isRequired,
  routes: t.array.isRequired
}

export default withStyles(styles)(Sidebar)
