import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'config/axios'

import CircularProgress from '@material-ui/core/CircularProgress'
import Paper from '@material-ui/core/Paper'
import Slide from '@material-ui/core/Slide'

import { SnackbarContext } from 'contexts/snackbar'

import TimeoutRedirect from 'components/timeout-redirect'
import TextField from 'components/text-field'
import TextFieldVisibility from 'components/text-field-visibility'

import RecoverPasswordForm from './components/form'

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
          disabled={isSubmitting}
          label='Email'
          margin='normal'
          name='email'
        />
      )}
    </>
  )

  return (
    <div className={classes.container}>
      <Slide in mountOnEnter unmountOnExit>
        <Paper className={classes.card} elevation={3}>
          {wasSent && (
            <TimeoutRedirect>
              Your request was sent, please check your email.
            </TimeoutRedirect>
          )}
          {(isSubmitting && !wasSent) && (
            <>
              <h2>Sending request...</h2>
              <CircularProgress color='secondary' size={48} />
            </>
          )}
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
        </Paper>
      </Slide>
    </div>
  )
}

RecoverPassword.propTypes = {
  location: PropTypes.object.isRequired
}

export default RecoverPassword
