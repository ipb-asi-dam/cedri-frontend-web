import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Form from 'react-vanilla-form'
import Button from '@material-ui/core/Button'

function RecoverPasswordRequestForm ({
  children,
  classes,
  isSubmitting,
  isValid,
  onSubmit,
  setValid,
  validation
}) {
  return (
    <>
      <h2>Recover your password</h2>
      <Form
        customErrorProp='error'
        keepErrorOnFocus
        onChange={(_, errors) => {
          if (!Object.keys(errors).length) setValid(true)
        }}
        onSubmit={onSubmit}
        validation={validation}
      >
        <div className={classes.flex}>
          {children}
          <Button
            className={classes.button}
            color='primary'
            disabled={!isValid || isSubmitting}
            size='large'
            type='submit'
            variant='contained'
          >
            Submit
          </Button>
          <Link className={classes.link} to='/login'>
            Back to login
          </Link>
        </div>
      </Form>
    </>
  )
}

RecoverPasswordRequestForm.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired,
  validation: PropTypes.object.isRequired
}

export default RecoverPasswordRequestForm
