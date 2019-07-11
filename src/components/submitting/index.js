import React from 'react'

import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

function Submitting () {
  const classes = useStyles()
  return (
    <div className={classes.sendingRequest}>
      <Typography variant='h2'>
        Sending request...
      </Typography>
      <div style={{ marginTop: 16 }}>
        <CircularProgress size={48} />
      </div>
    </div>
  )
}

export default Submitting
