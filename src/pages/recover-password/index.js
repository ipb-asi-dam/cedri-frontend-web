import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'config/axios'

import Grid from '@material-ui/core/Grid'

import { SnackbarContext } from 'contexts/snackbar'

import RecoverPasswordForm from './components/form'
import Submitting from 'components/submitting'
import TimeoutRedirect from 'components/timeout-redirect'
import TextField from 'components/text-field'
import TextFieldVisibility from 'components/text-field-visibility'

import { email, passwordLength, required, strongPassword } from 'utils/validations'

import useStyles from './styles'

const queryParamsRegex = /\??(token+=.+)&?/g

function RecoverPassword ({ location }) {
  const classes = useStyles()
  const { showNotification } = useContext(SnackbarContext)

  const [isValid, setValid] = useState(true)
  const [queryParam, setQueryParam] = useState('')
  const [isSubmitting, setSubmitting] = useState(false)
  const [wasSent, setSent] = useState(false)
  const [validation, setValidation] = useState({})

  useEffect(() => {
    const query = location.search || ''
    const matchedQuery = query.match(queryParamsRegex)
    setQueryParam(matchedQuery ? matchedQuery.join('') : '')

    if (matchedQuery) {
      setValidation({ password: [required, passwordLength, strongPassword] })
    } else {
      setValidation({ email: [required, email] })
    }
  }, [location])

  async function onSubmit (data, errors) {
    if (errors !== undefined) return setValid(false)

    try {
      const method = queryParam ? 'put' : 'post'
      setSubmitting(true)

      const response = await axios[method](`/public/recover?${queryParam}`, data)

      setSent(true)
      showNotification(response.data.data.message)
    } catch {
      showNotification('There was an error, please try again!')
    } finally {
      setSubmitting(false)
      setSent(false)
    }
  }

  const formsChildren = (
    <>
      {queryParam && (
        <TextFieldVisibility
          autoFocus
          className={classes.textField}
          disabled={isSubmitting}
          label='New Password'
          margin='normal'
          name='password'
        />
      )}
      {!queryParam && (
        <TextField
          autoComplete='email'
          autoFocus
          className={classes.textField}
          disabled={isSubmitting}
          label='Email'
          margin='normal'
          name='email'
        />
      )}
    </>
  )

  return (
    <div className={classes.root}>
      <Grid className={classes.grid} container justify='center'>
        <Grid className={classes.content} item xs={12}>
          {wasSent && (
            <TimeoutRedirect>
              Your request was sent, please check your email.
            </TimeoutRedirect>
          )}
          {(isSubmitting && !wasSent) && <Submitting />}
          {(!isSubmitting && !wasSent) && (
            <RecoverPasswordForm
              children={formsChildren}
              classes={classes}
              isSubmitting={isSubmitting}
              isValid={isValid}
              onSubmit={onSubmit}
              queryParam={queryParam}
              setValid={setValid}
              validation={validation}
            />
          )}
        </Grid>
      </Grid>
    </div>
  )
}

RecoverPassword.propTypes = {
  location: PropTypes.object.isRequired
}

export default RecoverPassword
