import React, { useContext, useState } from 'react'

import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'

import { AuthContext } from 'contexts/auth'
import { SnackbarContext } from 'contexts/snackbar'

import LoginForm from './components/form'
import Submitting from 'components/submitting'

import useStyles from './styles'

function Login () {
  const classes = useStyles()
  const { login } = useContext(AuthContext)
  const { showNotification } = useContext(SnackbarContext)

  const [isValid, setValid] = useState(true)
  const [isSubmitting, setSubmitting] = useState(false)

  async function onSubmit (data, errors) {
    if (errors !== undefined) return setValid(false)

    try {
      setSubmitting(true)
      await login(data)
    } catch {
      showNotification('There was something wrong, please try again')
      setSubmitting(false)
    }
  }

  return (
    <div className={classes.container}>
      <Slide direction='right' in mountOnEnter unmountOnExit>
        <Paper className={classes.card} elevation={3}>
          {isSubmitting && <Submitting />}
          {!isSubmitting && (
            <LoginForm
              classes={classes}
              isSubmitting={isSubmitting}
              isValid={isValid}
              onSubmit={onSubmit}
              setValid={setValid}
            />
          )}
        </Paper>
      </Slide>
    </div>
  )
}

export default Login
