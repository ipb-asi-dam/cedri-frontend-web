import React from 'react'
import PropTypes from 'prop-types'

import { Link } from 'react-router-dom'
import classnames from 'clsx'

import Form from 'react-vanilla-form'

import Button from '@material-ui/core/Button'

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
    <>
      <h2>Login to your account</h2>
      <Form
        customErrorProp='error'
        keepErrorOnFocus
        onChange={(_, errors) => setValid(Object.keys(errors).length === 0)}
        onSubmit={onSubmit}
        validation={{
          email: [required, email],
          password: [required, passwordLength, strongPassword]
        }}
      >
        <div className={classes.flex}>
          <RFTextField
            autoComplete='email'
            autoFocus
            disabled={isSubmitting}
            label='Email'
            margin='normal'
            name='email'
          />
          <TextFieldVisibility
            autoComplete='password'
            disabled={isSubmitting}
            label='Password'
            margin='normal'
            name='password'
            type='password'
          />
          <Link
            className={classnames('forget-password', classes.link)}
            to='/recover-password'
          >
            Forgot your password?
          </Link>
          <Button
            className={classes.button}
            color='primary'
            disabled={!isValid || isSubmitting}
            size='large'
            type='submit'
            variant='contained'
          >
            Login
          </Button>
          <Link className={classes.link} to='/'>
            Back to home page
          </Link>
        </div>
      </Form>
    </>
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
