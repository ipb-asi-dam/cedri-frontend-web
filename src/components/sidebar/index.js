import React from 'react'
import t from 'prop-types'
import classNames from 'classnames'
import withStyles from '@material-ui/core/styles/withStyles'
import { Link } from 'react-router-dom'

import Divider from '@material-ui/core/Divider'
import Drawer from '@material-ui/core/Drawer'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import ListItemText from '@material-ui/core/ListItemText'
import HomeIcon from '@material-ui/icons/Home'

const styles = theme => ({
  categoryHeader: {
    paddingTop: 16,
    paddingBottom: 16
  },
  categoryHeaderPrimary: {
    color: theme.palette.common.white
  },
  item: {
    paddingTop: 4,
    paddingBottom: 4,
    color: 'rgba(255, 255, 255, 0.7)'
  },
  itemCategory: {
    backgroundColor: '#232f3e',
    boxShadow: '0 -1px 0 #404854 inset',
    paddingTop: 16,
    paddingBottom: 16
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
    fontSize: theme.typography.fontSize,
    '&$textDense': {
      fontSize: theme.typography.fontSize
    }
  },
  textDense: {},
  divider: {
    marginTop: theme.spacing.unit * 2
  }
})

const Navigator = ({ classes, onChangeRoute, routes, smDown = false, ...other }) => (
  <Drawer variant={smDown ? 'temporary' : 'permanent'} {...other}>
    <List disablePadding>
      <ListItem className={classNames(classes.firebase, classes.item, classes.itemCategory)}>
        CeDRI
      </ListItem>
      {null && (
        <ListItem className={classNames(classes.item, classes.itemCategory)}>
          <ListItemIcon>
            <HomeIcon />
          </ListItemIcon>
          <ListItemText
            classes={{
              primary: classes.itemPrimary
            }}
          >
            Project Overview
          </ListItemText>
        </ListItem>
      )}
      {routes.map(({ id, children }) => (
        <React.Fragment key={id}>
          <ListItem className={classes.categoryHeader}>
            <ListItemText
              classes={{
                primary: classes.categoryHeaderPrimary
              }}
            >
              {id}
            </ListItemText>
          </ListItem>
          {children.map(({ active, icon: Icon, layout, name, path }) => (
            <Link
              key={path}
              onClick={onChangeRoute}
              style={{ textDecoration: 'none' }}
              to={layout + path}
            >
              <ListItem
                button
                dense
                className={classNames(
                  classes.item,
                  classes.itemActionable,
                  active && classes.itemActiveItem
                )}
              >
                <ListItemIcon>
                  <Icon />
                </ListItemIcon>
                <ListItemText
                  classes={{
                    primary: classes.itemPrimary,
                    textDense: classes.textDense
                  }}
                >
                  {name}
                </ListItemText>
              </ListItem>
            </Link>
          ))}
          <Divider className={classes.divider} />
        </React.Fragment>
      ))}
    </List>
  </Drawer>
)

Navigator.propTypes = {
  classes: t.object.isRequired,
  onChangeRoute: t.func.isRequired,
  routes: t.node.isRequired,
  smDown: t.bool
}

export default withStyles(styles)(Navigator)
