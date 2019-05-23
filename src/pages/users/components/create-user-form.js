import React from 'react'
import PropTypes from 'prop-types'
import axios from 'config/axios'

import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required, email } from 'utils/validations'

const styles = theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase'
  }
})

function CreateUserForm ({ children, closeForm, setData }) {
  return (
    <Form
      customErrorProp='error'
      data={{
        name: '',
        email: '',
        isAdmin: false
      }}
      keepErrorOnFocus
      onSubmit={async (data, errors) => {
        if (errors !== undefined) return

        const user = await axios.post('/private/users', data)

        setData(user.data.data)
        closeForm()
      }}
      validation={{
        name: [required],
        email: [required, email]
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RFTextField
            autoFocus
            label='Name'
            name='name'
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            label='Email'
            name='email'
          />
        </Grid>
        <Grid item xs={12}>
          <label htmlFor='isAdmin'>
            <input type='checkbox' name='isAdmin' />
            Is Administrator?
          </label>
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

CreateUserForm.propTypes = {
  children: PropTypes.node,
  closeForm: PropTypes.func.isRequired,
  setData: PropTypes.func.isRequired
}

export default withStyles(styles)(CreateUserForm)
