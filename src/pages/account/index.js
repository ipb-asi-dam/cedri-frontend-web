import React, { useContext, useEffect, useState } from 'react'
import axios from 'config/axios'
import PropTypes from 'prop-types'

import Form from 'react-vanilla-form'
import Button from '@material-ui/core/Button'
import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import TextField from 'components/text-field'
import { AuthContext } from 'contexts/auth'

import styles from './styles'

function Account ({ classes }) {
  const [formData, setFormData] = useState({})
  const { userInfo: { user } } = useContext(AuthContext)

  useEffect(() => {
    (async () => {
      const response = await axios.get(`/private/users/${user.id}`)
      setFormData({
        ...response.data.data,
        ...response.data.data.user
      })
    })()
  }, [user.id])

  return (
    <div className={classes.root}>
      <Grid
        container
        justify='center'
        spacing={4}
      >
        <Paper style={{ padding: 20 }}>
          <div style={{ paddingBottom: 20 }}>
            <Typography variant='h4'>
              Profile
            </Typography>
          </div>
          <Form data={formData}>
            <Grid container spacing={3}>
              <Grid container justify='center' style={{ paddingBottom: 20 }}>
                <img
                  alt=''
                  style={{ borderRadius: '50%', cursor: 'pointer' }}
                  src='//via.placeholder.com/100'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Name'
                  name='name'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Email'
                  name='email'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Occupation'
                  name='occupation'
                />
              </Grid>
              <Grid item xs={6}>
                <TextField
                  label='Bio'
                  name='bio'
                />
              </Grid>
              <Divider />
              <div style={{
                display: 'flex',
                justifyContent: 'flex-end',
                paddingRight: 10,
                paddingTop: 10,
                width: '100%'
              }}>
                <Button color='primary' type='submit'>
                  Update
                </Button>
              </div>
            </Grid>
          </Form>
        </Paper>
      </Grid>
    </div>
  )
}

Account.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Account)
