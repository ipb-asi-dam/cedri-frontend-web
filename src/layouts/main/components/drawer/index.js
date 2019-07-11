import React from 'react'
import PropTypes from 'prop-types'

// MUI components
import MuiDrawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import NavLink from 'components/nav-link'

import useStyles from './styles'

function Drawer ({ items, ...props }) {
  const classes = useStyles()

  const onClickLink = () => props.onClose()

  return (
    <MuiDrawer classes={{ paper: classes.drawerPaper }} {...props}>
      <List component='nav' disablePadding>
        <ListItem
          activeClassName={classes.itemActiveItem}
          className={classes.drawerItem}
          component={NavLink}
          exact
          to='/'
        >
          <ListItemText
            classes={{ primary: classes.drawerItemText }}
            onClick={onClickLink}
            primary={'Home'}
          />
        </ListItem>
        {items.map(({ title, path }) => title && (
          <ListItem
            key={path}
            activeClassName={classes.itemActiveItem}
            className={classes.drawerItem}
            component={NavLink}
            exact
            to={path}
          >
            <ListItemText
              classes={{ primary: classes.drawerItemText }}
              onClick={onClickLink}
              primary={title}
            />
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  )
}

Drawer.propTypes = {
  items: PropTypes.arrayOf(String),
  onClose: PropTypes.func.isRequired
}

export default Drawer
