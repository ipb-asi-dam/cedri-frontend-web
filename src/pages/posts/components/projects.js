import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { checkDate, required, url } from 'utils/validations'
import format from 'date-fns/format'

const minDate = format(new Date(2000, 0), 'YYYY-MM-DD')
const dateProps = { min: minDate }

function ProjectsForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
  data = Object.keys(data).length === 0 ? {
    type: 'international',
    isAccepted: true
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
        consortium: [required],
        description: [required],
        endDate: [required],
        fundedBy: [required],
        startDate: [
          required,
          checkDate(data.startDate, data.endDate)
        ],
        title: [required],
        type: [required],
        url: [url]
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
            label='Description'
            margin='normal'
            name='description'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Consortium'
            name='consortium'
            required
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='URL'
            name='url'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Funded by'
            name='fundedBy'
            required
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            inputProps={dateProps}
            disabled={isSubmiting}
            label='Start Date'
            name='startDate'
            type='date'
            required
            shrink
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            inputProps={dateProps}
            disabled={isSubmiting}
            label='End Date'
            name='endDate'
            type='date'
            required
            shrink
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Type'
            name='type'
            required
            select
            SelectProps={{ native: true }}
            shrink
          >
            {[
              { label: 'International', value: 'international' },
              { label: 'National', value: 'national' },
              { label: 'Other', value: 'other' }
            ].map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </RFTextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <label htmlFor='isAccepted'>
            <input type='checkbox' name='isAccepted' />
            Approved?
          </label>
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

ProjectsForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default ProjectsForm
