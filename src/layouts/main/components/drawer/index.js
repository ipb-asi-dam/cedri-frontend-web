import React from 'react'
import PropTypes from 'prop-types'

// MUI components
import MuiDrawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'
import withStyles from '@material-ui/core/styles/withStyles'

import NavLink from 'components/nav-link'

import styles from './styles'

function Drawer ({ classes, items, ...props }) {
  return (
    <MuiDrawer classes={{ paper: classes.drawerPaper }} {...props}>
      <List component='nav' disablePadding>
        {items.map(({ title, path }) => (
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
              primary={title}
            />
          </ListItem>
        ))}
      </List>
    </MuiDrawer>
  )
}

Drawer.propTypes = {
  classes: PropTypes.object.isRequired,
  items: PropTypes.arrayOf(String)
}

export default withStyles(styles)(Drawer)
