import React, { useContext, useState } from 'react'
import { Link } from 'react-router-dom'
import PropTypes from 'prop-types'

import Form from 'react-vanilla-form'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'

import { AuthContext } from 'contexts/auth'

// components
import RFTextField from 'components/text-field'
import TextFieldVisibility from 'components/text-field-visibility'

// utils
import { email, required } from 'utils/validations'

import styles from './styles'

function Login ({ classes }) {
  const { login } = useContext(AuthContext)
  const [isValid, setValid] = useState(true)
  const [isSubmiting, setSubmiting] = useState(false)

  return (
    <div className={classes.container}>
      <Slide direction='right' in mountOnEnter unmountOnExit>
        <Paper className={classes.card} elevation={3}>
          {isSubmiting
            ? (
              <>
                <h2>Sending request...</h2>
                <CircularProgress color='secondary' size={48} />
              </>
            )
            : (
              <>
                <h2>Login to your account</h2>
                <Form
                  customErrorProp='error'
                  keepErrorOnFocus
                  onChange={(_, errors) => {
                    if (!Object.keys(errors).length) setValid(true)
                  }}
                  onSubmit={async (data, errors) => {
                    if (errors !== undefined) return setValid(false)

                    setSubmiting(true)
                    await login(data)
                  }}
                  validateOn='change'
                  validation={{
                    email: [required, email],
                    password: required
                  }}
                >
                  <div className={classes.flex}>
                    <RFTextField
                      autoComplete='email'
                      autoFocus
                      isSubmiting={isSubmiting}
                      label='Email'
                      margin='normal'
                      name='email'
                    />
                    <TextFieldVisibility
                      autoComplete='password'
                      isSubmiting={isSubmiting}
                      label='Password'
                      margin='normal'
                      name='password'
                      type='password'
                    />
                    <Link className={classes.link} to='/recover-password'>
                      Forgot your password?
                    </Link>
                    <Button
                      className={classes.button}
                      color='primary'
                      disabled={!isValid || isSubmiting}
                      size='large'
                      type='submit'
                      variant='contained'
                    >
                      Login
                    </Button>
                  </div>
                </Form>
              </>
            )}
        </Paper>
      </Slide>
    </div>
  )
}

Login.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Login)
