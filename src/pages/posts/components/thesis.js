import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import Checkbox from 'components/checkbox'
import RFTextField from 'components/text-field'

// utils
import { required } from 'utils/validations'
import format from 'date-fns/format'

function ThesisForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
  data = {
    ...data,
    date: format((data.date || new Date()), 'YYYY-MM'),
    type: data.type || 'msc',
    completed: data.completed
  }

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
            name='title'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Grade'
            name='grade'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Student Name'
            name='student'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Institute'
            name='institute'
            required
          />
        </Grid>
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Type'
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
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Date'
            name='date'
            required
            shrink
            type='month'
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Supervisors'
            name='supervisors'
            required
          />
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            disabled={isSubmiting}
            label='Completed?'
            name='completed'
          />
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
