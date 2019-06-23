import React from 'react'
import t from 'prop-types'
import classNames from 'clsx'
import { Link } from 'react-router-dom'

import Avatar from '@material-ui/core/Avatar'
import Divider from '@material-ui/core/Divider'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import styles from './styles'

import NavLink from 'components/nav-link'

const useStyles = makeStyles(styles)

function Sidebar ({ className, onChangeRoute, routes, user }) {
  const classes = useStyles()
  const rootClass = classNames(classes.root, className)

  return (
    <nav className={rootClass}>
      <List component='div' disablePadding>
        <ListItem
          className={classes.logoWrapper}
          component={Link}
          to='/'
        >
          CeDRI
        </ListItem>
        <Divider className={classes.logoDivider} />
        <div className={classes.profile}>
          <Link to='/dashboard/account'>
            <Avatar
              alt={user.name}
              className={classes.avatar}
              src={user.imageURL}
            />
          </Link>
          <Typography
            className={classes.nameText}
            variant='h6'
          >
            {user.name}
          </Typography>
          {user.occupation && (
            <Typography
              className={classes.bioText}
              variant='caption'
            >
              {user.occupation}
            </Typography>
          )}
        </div>
        <Divider className={classes.profileDivider} />
        {routes.map(route => route.icon && (
          <ListItem
            key={route.path}
            activeClassName={classes.itemActiveItem}
            button
            className={classes.listItem}
            component={NavLink}
            exact
            onClick={onChangeRoute(route.name)}
            to={route.path}
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
  className: t.string,
  onChangeRoute: t.func.isRequired,
  routes: t.array.isRequired,
  user: t.object.isRequired
}

export default Sidebar
