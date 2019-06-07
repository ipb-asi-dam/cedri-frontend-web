import React, { useCallback } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import { ReactComponent as NotFoundSVG } from 'assets/page_not_found.svg'

import styles from './styles'

function PageNotFound ({ classes, history }) {
  const goBack = useCallback(() => {
    history.goBack()
  }, [history])

  return (
    <div className={classes.container}>
      <Typography className={classes.text} variant='h4'>
          Error 404: The page you're looking for isn't here
        <Button variant='outlined' onClick={goBack}>Back to previous page</Button>
      </Typography>
      <NotFoundSVG className={classes.image} />
    </div>
  )
}

PageNotFound.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired
}

export default withStyles(styles)(PageNotFound)
