import React from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'

import useStyles from './styles'

function HandleButtons ({ disabled, isSubmiting }) {
  const classes = useStyles()

  return (
    <div className={classes.container}>
      <Button
        className={classes.button}
        color='primary'
        disabled={disabled}
        fullWidth
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
  disabled: PropTypes.bool,
  isSubmiting: PropTypes.bool
}

export default HandleButtons
