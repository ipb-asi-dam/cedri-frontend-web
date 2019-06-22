import React from 'react'
import PropTypes from 'prop-types'

import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required, email } from 'utils/validations'

function CreateUserForm ({ children, isSubmiting, onSubmit }) {
  return (
    <Form
      customErrorProp='error'
      data={{
        name: '',
        email: '',
        type: 'im',
        isAdmin: false
      }}
      keepErrorOnFocus
      onSubmit={onSubmit}
      validation={{
        name: [required],
        email: [required, email]
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RFTextField
            autoFocus
            disabled={isSubmiting}
            label='Name'
            name='name'
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Email'
            name='email'
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Type'
            name='type'
            select
            SelectProps={{ native: true }}
          >
            <option value='im'>Integrated Members</option>
            <option value='rf'>Research Fellowships</option>
            <option value='c'>Collaborators</option>
            <option value='vr'>Visiting Researchers</option>
          </RFTextField>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor='isAdmin'>
            <input
              disabled={isSubmiting}
              type='checkbox'
              name='isAdmin'
            />
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
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default CreateUserForm
