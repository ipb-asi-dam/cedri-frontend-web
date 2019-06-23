import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import ListItem from '@material-ui/core/ListItem'
import ListItemText from '@material-ui/core/ListItemText'

import NavLink from 'components/nav-link'
import LazyRoutes from 'components/lazy-routes'

function AboutPage ({ routes }) {
  const classes = {}

  return (
    <Grid container>
      <Grid item md={3}>
        <List component='nav' disablePadding>
          {routes.map(route => route.title && (
            <ListItem
              key={route.path}
              activeClassName={classes.itemActiveItem}
              className={classes.drawerItem}
              component={NavLink}
              exact={route.exact}
              to={route.path}
            >
              <ListItemText
                classes={{ primary: classes.drawerItemText }}
                primary={route.title}
              />
            </ListItem>
          ))}
        </List>
      </Grid>
      <Grid item md={9}>
        <LazyRoutes routes={routes} />
      </Grid>
    </Grid>
  )
}

AboutPage.propTypes = {
  routes: PropTypes.array
}

export default AboutPage
