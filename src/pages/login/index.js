import React, { useContext, useState } from 'react'

import { AuthContext } from 'contexts/auth'
import { SnackbarContext } from 'contexts/snackbar'

import Grid from '@material-ui/core/Grid'

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
    <div className={classes.root}>
      <Grid className={classes.grid} container>
        <Grid className={classes.content} item xs={12}>
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
        </Grid>
      </Grid>
    </div>
  )
}

export default Login
