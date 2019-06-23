import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'

import InnerSidebar from 'layouts/main/components/inner-sidebar'
import LazyRoutes from 'components/lazy-routes'

function ResearchInnovation ({ routes }) {
  return (
    <Grid container>
      <Grid item md={3}>
        <nav>
          {InnerSidebar(routes)}
        </nav>
      </Grid>
      <Grid item md={9}>
        <LazyRoutes renderNested routes={routes} />
      </Grid>
    </Grid>
  )
}

ResearchInnovation.propTypes = {
  routes: PropTypes.array.isRequired
}

export default ResearchInnovation
