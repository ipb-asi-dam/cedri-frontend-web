import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required, url } from 'utils/validations'
import format from 'date-fns/format'

function PublicationForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
  data = {
    ...data,
    date: format((data.date || new Date()), 'YYYY'),
    type: data.type || 'b'
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
        authors: [required],
        date: [required],
        sourceTitle: [required],
        title: [required],
        type: [required],
        url: [required, url]
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RFTextField
            autoFocus
            disabled={isSubmiting}
            label='Title'
            name='title'
            required
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Authors'
            name='authors'
            required
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='URL'
            name='url'
            required
          />
        </Grid>
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            inputProps={{ min: 1990, max: new Date().getFullYear() }}
            label='Year'
            name='date'
            type='number'
            shrink
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
            {[
              { label: 'Book', value: 'b' },
              { label: 'Book chapter', value: 'bc' },
              { label: 'Editorial', value: 'e' },
              { label: 'Journal', value: 'j' },
              { label: 'Proceeding', value: 'p' }
            ].map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </RFTextField>
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Source Title'
            name='sourceTitle'
            required
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <RFTextField
            disabled={isSubmiting}
            label='DOI'
            name='doi'
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Issue'
            name='issue'
          />
        </Grid>
        <Grid item xs={6} md={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Indexed'
            name='indexed'
          />
        </Grid>
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Start Page'
            name='startPage'
          />
        </Grid>
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            label='End Page'
            name='endPage'
          />
        </Grid>
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Volume'
            name='volume'
          />
        </Grid>
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Art. Nº'
            name='artNumber'
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

PublicationForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default PublicationForm
