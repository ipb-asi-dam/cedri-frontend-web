import React, { useEffect } from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import InnerSidebar from 'layouts/main/components/inner-sidebar'
import LazyRoutes from 'components/lazy-routes'

function Container ({ classes, history, rootPath, routes }) {
  useEffect(() => {
    if (routes.length && history.location.pathname === rootPath) {
      history.push(routes[0].path)
    }
  }, [history, rootPath, routes])

  return (
    <Grid className={classes.root} container>
      <Grid item md={3}>
        <ul style={{ listStyle: 'none' }}>
          {InnerSidebar(routes)}
        </ul>
      </Grid>
      <Grid item md={9}>
        <LazyRoutes renderNested routes={routes} />
      </Grid>
    </Grid>
  )
}

Container.defaultProps = {
  classes: {}
}

Container.propTypes = {
  classes: PropTypes.object,
  history: PropTypes.object.isRequired,
  rootPath: PropTypes.string,
  routes: PropTypes.array.isRequired
}

export default Container
