import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import format from 'date-fns/format'
import { required } from 'utils/validations'

function AwardForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
  data = {
    ...data,
    date: format((data.date || new Date()), 'YYYY-MM')
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
        date: required,
        event: required,
        prizeWinners: required,
        title: required
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Title'
            name='title'
            required
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Event'
            name='event'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Publication Date'
            name='date'
            type='month'
            required
            shrink
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Address'
            name='address'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Prize Winners'
            multiline
            name='prizeWinners'
            rows={2}
            required
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

AwardForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default AwardForm
