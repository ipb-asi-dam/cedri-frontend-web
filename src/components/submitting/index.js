import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'

export default () => (
  <>
    <h2>Sending request...</h2>
    <CircularProgress color='secondary' size={48} />
  </>
)
