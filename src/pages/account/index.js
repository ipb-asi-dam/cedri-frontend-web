import React, { useContext, useRef, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'config/axios'

import Form from 'react-vanilla-form'
import Avatar from '@material-ui/core/Avatar'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'

import TextField from 'components/text-field'

// contexts
import { AuthContext } from 'contexts/auth'
import { SnackbarContext } from 'contexts/snackbar'

import { email, required } from 'utils/validations'

import useStyles from './styles'

function Account ({ history }) {
  const classes = useStyles()

  const { showNotification } = useContext(SnackbarContext)
  const { userInfo: { user }, updateUserInfo } = useContext(AuthContext)

  const [isValid, setValid] = useState(false)
  const [isSubmitting, setSubmitting] = useState(false)
  const imageRef = useRef()
  const [liveImage, setLiveImage] = useState()
  const [image, setImage] = useState()

  function handleOnChangeImage (e) {
    e.persist()

    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
      const reader = new FileReader()

      reader.onload = function (base64) {
        setLiveImage(base64.target.result)
      }

      reader.readAsDataURL(e.target.files[0])
    } else {
      setLiveImage()
    }

    setValid(true)
  }

  async function onSubmit (data, errors) {
    if (errors) return

    const content = new FormData()

    content.append('image', image)

    Object
      .entries(data)
      .forEach(([key, val]) => {
        content.append(key, val)
      })

    try {
      setSubmitting(true)
      await axios.put(`/private/users/${user.id}`, content)
      await updateUserInfo(user.id)
      showNotification('User successfully updated')
      setSubmitting(false)
    } catch {
      showNotification('Error during user update')
    } finally {
      history.push('/dashboard')
    }
  }

  return (
    <div className={classes.root}>
      <Grid container justify='center' spacing={4}>
        <Paper style={{ padding: 20 }}>
          <div style={{ paddingBottom: 20 }}>
            <Typography variant='h4'>
              Profile
            </Typography>
          </div>
          <Form
            data={{ ...user }}
            onChange={(_, errors) => setValid(Object.keys(errors).length === 0)}
            onSubmit={onSubmit}
            validations={{
              name: required,
              email: [required, email]
            }}
          >
            <Grid container spacing={3}>
              <Grid container justify='center' style={{ paddingBottom: 20 }}>
                <Avatar
                  alt=''
                  className={classes.avatar}
                  src={liveImage || user.imageURL}
                />
                <input
                  accept='image/gif, image/jpeg, image/png'
                  className={classes.avatarBtn}
                  onChange={handleOnChangeImage}
                  ref={imageRef}
                  style={{ width: 100, height: 100 }}
                  type='file'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  disabled={isSubmitting}
                  label='Name'
                  name='name'
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  disabled={isSubmitting}
                  label='Email'
                  name='email'
                  required
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  disabled={isSubmitting}
                  label='Occupation'
                  name='occupation'
                />
              </Grid>
              <Grid item xs={12} md={6}>
                <TextField
                  disabled={isSubmitting}
                  label='Bio'
                  name='bio'
                />
              </Grid>
              <Divider />
              <Grid className={classes.formBtn} item xs={12}>
                <Button
                  color='primary'
                  disabled={!isValid || isSubmitting}
                  fullWidth
                  type='submit'
                  variant='contained'
                >
                  Update
                </Button>
              </Grid>
            </Grid>
          </Form>
        </Paper>
      </Grid>
    </div>
  )
}

Account.propTypes = {
  history: PropTypes.object.isRequired
}

export default Account
