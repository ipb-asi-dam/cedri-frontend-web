import React, { useState } from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import axios from 'config/axios'

import Form from 'react-vanilla-form'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'
import withStyles from '@material-ui/core/styles/withStyles'

// components
import RFTextField from 'components/text-field'
import TimeoutRedirect from 'components/timeout-redirect'

// utils
import { email, required } from 'utils/validations'

import styles from './styles'

function RecoverPassword ({ classes }) {
  const [isValid, setValid] = useState(true)
  const [isSubmiting, setSubmiting] = useState(false)
  const [wasSent, setSent] = useState(false)

  return (
    <div className={classes.container}>
      <Slide in mountOnEnter unmountOnExit>
        <Paper className={classes.card} elevation={3}>
          {wasSent && (
            <TimeoutRedirect>
              Your request was sent, please check your email.
            </TimeoutRedirect>
          )}
          {(isSubmiting && !wasSent) && (
            <>
              <h2>Sending request...</h2>
              <CircularProgress color='secondary' size={48} />
            </>
          )}
          {(!isSubmiting && !wasSent) && (
            <>
              <h2>Recover your password</h2>
              <Form
                customErrorProp='error'
                keepErrorOnFocus
                onChange={(_, errors) => {
                  if (!Object.keys(errors).length) setValid(true)
                }}
                onSubmit={async (data, errors) => {
                  if (errors !== undefined) return setValid(false)

                  try {
                    setSubmiting(true)
                    await axios.post('/public/recovery', data)
                    setSubmiting(false)
                    setSent(true)
                  } catch {

                  }
                }}
                validation={{
                  email: [required, email]
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
                  <Button
                    className={classes.button}
                    color='primary'
                    disabled={!isValid || isSubmiting}
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
          )}
        </Paper>
      </Slide>
    </div>
  )
}

RecoverPassword.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(RecoverPassword)
