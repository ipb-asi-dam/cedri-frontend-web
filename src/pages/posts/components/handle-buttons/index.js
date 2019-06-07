import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

function HandleButtons ({ classes, disabled, isSubmiting }) {
  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        color='primary'
        disabled={disabled}
        type='submit'
        variant='contained'
      >
        { !isSubmiting && 'Confirm' }
        { isSubmiting && (
          <div className={classes.submitingLabel}>
            Submiting <CircularProgress color='inherit' size={18} />
          </div>
        ) }
      </Button>
    </div>
  )
}

HandleButtons.defaultProps = {
  disabled: false,
  isSubmiting: false
}

HandleButtons.propTypes = {
  classes: PropTypes.object.isRequired,
  disabled: PropTypes.bool,
  isSubmiting: PropTypes.bool
}

export default withStyles(styles)(HandleButtons)
