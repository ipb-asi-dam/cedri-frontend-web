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

function EventForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
  data = {
    ...data,
    startDate: format((data.startDate || new Date()), 'YYYY-MM-DD'),
    endDate: format((data.endDate || new Date()), 'YYYY-MM-DD')
  }

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(_, errors) => {
        setValid(Boolean(!Object.keys(errors).length))
      }}
      onSubmit={onSubmit}
      validation={{
        address: required,
        endDate: [
          required,
          checkDate
        ],
        linksHtml: required,
        startDate: [
          required,
          checkDate
        ],
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
            label='Address'
            name='address'
            required
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Start Date'
            name='startDate'
            required
            shrink
            type='date'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RFTextField
            disabled={isSubmiting}
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
            name='linksHtml'
            required
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

EventForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default EventForm
