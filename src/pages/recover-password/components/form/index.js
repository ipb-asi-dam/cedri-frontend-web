import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import Form from 'react-vanilla-form'
import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

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
    <div className={classes.content}>
      <div className={classes.contentBody}>
        <Form
          className={classes.form}
          customErrorProp='error'
          keepErrorOnFocus
          onChange={(_, errors) => {
            if (!Object.keys(errors).length) setValid(true)
          }}
          onSubmit={onSubmit}
          validation={validation}
        >
          <Typography className={classes.title} variant='h2'>
            Recover your password
          </Typography>
          <div className={classes.fields}>
            {children}
            <Button
              className={classes.signInButton}
              color='primary'
              disabled={!isValid || isSubmitting}
              size='large'
              type='submit'
              variant='contained'
            >
              { !isSubmitting ? 'Submit' : 'Submitting...' }
            </Button>
            <Typography className={classes.signUp} variant='body1'>
              <Link className={classes.url} to='/login'>
                Back to login
              </Link>
            </Typography>
          </div>
        </Form>
      </div>
    </div>
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
