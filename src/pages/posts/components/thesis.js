import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required } from 'utils/validations'

function ThesisForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
  data = Object.keys(data).length === 0 ? {
    ...data,
    type: 'msc',
    completed: false
  } : data

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(_, errors) => {
        if (!Object.keys(errors).length) setValid(true)
      }}
      onSubmit={onSubmit}
      validation={{
        grade: required,
        date: required,
        institute: required,
        student: required,
        supervisors: required,
        type: required,
        title: required
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <RFTextField
            autoFocus
            disabled={isSubmiting}
            label='Title'
            margin='normal'
            name='title'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Grade'
            margin='normal'
            name='grade'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Student Name'
            margin='normal'
            name='student'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Institute'
            margin='normal'
            name='institute'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Type'
            margin='normal'
            name='type'
            required
            select
            SelectProps={{ native: true }}
            shrink
          >
            <option value='msc'>Msc</option>
            <option value='phd'>PhD</option>
          </RFTextField>
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Date'
            margin='normal'
            name='date'
            type='month'
            shrink
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Supervisors'
            margin='normal'
            name='supervisors'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <label htmlFor='completed'>
            <input
              disabled={isSubmiting}
              type='checkbox'
              name='completed'
            />
            Completed?
          </label>
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

ThesisForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default ThesisForm
