import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'
import TextEditor from 'components/text-editor'

// utils
import { checkDate, required } from 'utils/validations'
import format from 'date-fns/format'

const minDate = format(new Date(2000, 0), 'YYYY-MM-DD')

const dateProps = { min: minDate }

function EventForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
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
        address: required,
        endDate: required,
        links: required,
        startDate: [
          required,
          checkDate(data.startDate, data.endDate)
        ]
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
            label='Address'
            name='address'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            inputProps={dateProps}
            disabled={isSubmiting}
            label='Start Date'
            name='startDate'
            required
            shrink
            type='date'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            inputProps={dateProps}
            label='End Date'
            name='endDate'
            required
            shrink
            type='date'
          />
        </Grid>
        <Grid item xs={12}>
          <TextEditor
            disabled={isSubmiting}
            label='Links'
            name='links'
            required
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

EventForm.defaultProps = {
  data: {}
}

EventForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default EventForm
