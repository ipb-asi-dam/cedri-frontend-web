import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import format from 'date-fns/format'
import subDays from 'date-fns/sub_days'
import { checkDate, required, url } from 'utils/validations'

const minDate = format(new Date(1980, 1, 1), 'YYYY-MM-DD')
const today = format(new Date(), 'YYYY-MM-DD')
const yesterday = format(subDays(new Date(), 1), 'YYYY-MM-DD')

const dateProps = { min: minDate, max: today }
const datePrevProps = { min: minDate, max: yesterday }

function BookForm ({
  children,
  closeForm,
  data,
  isSubmiting,
  onSubmit,
  setFormData,
  setSubmiting,
  setValid
}) {
  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(data, errors) => {
        setFormData(data)
        if (!Object.keys(errors).length) setValid(true)
      }}
      onSubmit={onSubmit}
      validation={{
        address: required,
        authors: required,
        closingDate: required,
        date: required,
        edition: required,
        link: [required, url],
        number: required,
        openingDate: [
          required,
          checkDate(data.openingDate, data.closingDate)
        ],
        pages: required,
        publisher: required,
        title: required,
        volume: required
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
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Authors'
            margin='normal'
            name='authors'
            placeholder='The names must be separated by comma'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Link'
            name='link'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Pages'
            name='pages'
            type='number'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Publication Date'
            name='date'
            type='month'
            shrink
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            inputProps={datePrevProps}
            disabled={isSubmiting}
            label='Opening Date'
            name='openingDate'
            type='date'
            shrink
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            inputProps={dateProps}
            disabled={isSubmiting}
            label='Closing Date'
            name='closingDate'
            type='date'
            shrink
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Address'
            name='address'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Publisher'
            name='publisher'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Edition'
            name='edition'
            type='number'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Number'
            name='number'
            type='number'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Volume'
            name='volume'
            type='number'
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

BookForm.propTypes = {
  children: PropTypes.node.isRequired,
  closeForm: PropTypes.func.isRequired,
  data: PropTypes.object.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setFormData: PropTypes.func.isRequired,
  setSubmiting: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default BookForm
