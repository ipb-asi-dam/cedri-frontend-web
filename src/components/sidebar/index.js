import React, { useCallback, useState } from 'react'
import t from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import Collapse from '@material-ui/core/Collapse'
import ListItemText from '@material-ui/core/ListItemText'
import ListItemIcon from '@material-ui/core/ListItemIcon'

const styles = theme => ({
  categoryHeader: {
    paddingLeft: 16,
    paddingTop: 16,
    paddingBottom: 16,
    cursor: 'pointer'
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  wrapperInner: {
    '&::after': {
      content: "''",
      display: 'block',
      marginBottom: 16
    }
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)',
    cursor: 'pointer'
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    padding: 16
  },
  firebase: {
    fontSize: 24,
    fontFamily: theme.typography.fontFamily,
    color: theme.palette.common.white
  },
  itemActionable: {
    '&:hover': {
      backgroundColor: 'rgba(255, 255, 255, 0.08)'
    }
  },
  itemActiveItem: {
    color: '#4fc3f7'
  },
  itemPrimary: {
    color: 'inherit',
    fontSize: theme.typography.fontSize + 2,
    '&$textDense': {
      fontSize: theme.typography.fontSize + 2
    }
  },
  link: {
    color: 'inherit',
    display: 'block',
    textDecoration: 'none'
  },
  textDense: {}
})

function Sidebar ({ classes, onChangeRoute, routes, smDown, ...other }) {
  const [menuOpen, setMenuOpen] = useState(null)
  const collapseMenu = useCallback((id) => () => {
    setMenuOpen(id === menuOpen ? null : id)
  })

  return (
    <nav>
      <Drawer variant={smDown ? 'temporary' : 'permanent'} {...other}>
        <List disablePadding>
          <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
            CeDRI
          </ListItem>
        </List>
        <List>
          {routes.map(({ id, children }) => children.length > 0 && (
            <React.Fragment key={id}>
              <ListItem
                className={classNames(classes.categoryHeader)}
                disableGutters
                onClick={collapseMenu(id)}
              >
                <ListItemText classes={{ primary: classes.categoryHeaderPrimary }}>
                  {id}
                </ListItemText>
              </ListItem>
              <Collapse
                classes={{ wrapperInner: classes.wrapperInner }}
                in={id === menuOpen}
                timeout='auto'
                unmountOnExit
              >
                {children.map(route => (
                  <ListItem key={route.path}
                    className={classNames(
                      classes.item,
                      classes.itemActionable
                    )}
                    onClick={onChangeRoute(route.name)}
                  >
                    <ListItemIcon>
                      <route.icon />
                    </ListItemIcon>
                    <ListItemText
                      classes={{
                        primary: classes.itemPrimary,
                        textDense: classes.textDense
                      }}>
                      <Link className={classes.link} to={route.layout + route.path}>
                        {route.name}
                      </Link>
                    </ListItemText>
                  </ListItem>
                ))}
              </Collapse>
              <Divider className={classes.divider} />
            </React.Fragment>
          ))}
        </List>
      </Drawer>
    </nav>
  )
}

Sidebar.defaultProps = {
  smDown: false
}

Sidebar.propTypes = {
  classes: t.object.isRequired,
  onChangeRoute: t.func.isRequired,
  routes: t.array.isRequired,
  smDown: t.bool
}

export default withStyles(styles)(Sidebar)
