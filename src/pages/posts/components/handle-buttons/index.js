import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

function HandleButtons ({ classes, disabled }) {
  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        color='primary'
        disabled={disabled}
        type='submit'
        variant='contained'
      >
        Confirm
      </Button>
    </div>
  )
}

HandleButtons.defaultProps = {
  disabled: false
}

HandleButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool
}

export default withStyles(styles)(HandleButtons)
