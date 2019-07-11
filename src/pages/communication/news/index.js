import React from 'react'

import Grid from '@material-ui/core/Grid'
import CardMedia from 'layouts/main/components/card-media'
import Pagination from 'layouts/main/components/pagination'

export default () => (
  <Grid container spacing={6} alignItems='center' justify='space-between'>
    <Pagination
      apiEntrypoint='/public/news'
      render={(item) => (
        <Grid item key={item.id} xs={6} lg={4} style={{ marginBottom: 16 }}>
          <CardMedia content={item} style={{ height: 'fit-content' }} />
        </Grid>
      )}
    />
  </Grid>
)
