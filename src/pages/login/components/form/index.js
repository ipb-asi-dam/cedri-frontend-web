import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'

import classnames from 'clsx'
import Form from 'react-vanilla-form'

import Button from '@material-ui/core/Button'
import Typography from '@material-ui/core/Typography'

// components
import RFTextField from 'components/text-field'
import TextFieldVisibility from 'components/text-field-visibility'

// utils
import { email, passwordLength, required, strongPassword } from 'utils/validations'

function LoginForm ({
  classes,
  isSubmitting,
  isValid,
  onSubmit,
  setValid
}) {
  return (
    <div className={classes.content}>
      <div className={classes.contentBody}>
        <Form
          className={classes.form}
          customErrorProp='error'
          keepErrorOnFocus
          onChange={(_, errors) => setValid(Object.keys(errors).length === 0)}
          onSubmit={onSubmit}
          validation={{
            email: [required, email],
            password: [required, passwordLength, strongPassword]
          }}
        >
          <Typography className={classes.title} variant='h2'>
            Sign in
          </Typography>
          <div className={classes.fields}>
            <RFTextField
              autoComplete='email'
              autoFocus
              className={classes.textField}
              disabled={isSubmitting}
              label='Email'
              margin='normal'
              name='email'
            />
            <TextFieldVisibility
              autoComplete='password'
              className={classes.textField}
              disabled={isSubmitting}
              label='Password'
              margin='normal'
              name='password'
              type='password'
            />
            <Typography className={classnames(classes.signUp, classes.alignRight)} variant='body1'>
              <Link className={classes.url} to='/recover-password'>
                Forgot your password?
              </Link>
            </Typography>
            <Button
              className={classes.signInButton}
              color='primary'
              disabled={!isValid || isSubmitting}
              size='large'
              type='submit'
              variant='contained'
            >
              { !isSubmitting ? 'Sign in' : 'Submitting...' }
            </Button>
          </div>
          <Typography className={classes.signUp} variant='body1'>
            <Link className={classes.url} to='/'>
              Back to home page
            </Link>
          </Typography>
        </Form>
      </div>
    </div>
  )
}

LoginForm.propTypes = {
  classes: PropTypes.object.isRequired,
  isSubmitting: PropTypes.bool.isRequired,
  isValid: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default LoginForm
