import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import subDays from 'date-fns/sub_days'
import format from 'date-fns/format'
import { checkDate, required, url } from 'utils/validations'

const minDate = format(new Date(1980, 1, 1), 'YYYY-MM-DD')
const today = format(new Date(), 'YYYY-MM-DD')
const yesterday = format(subDays(new Date(), 1), 'YYYY-MM-DD')

const dateProps = { min: minDate, max: today }
const datePrevProps = { min: minDate, max: yesterday }

function BookChapterForm ({
  children,
  isSubmiting,
  setSubmiting,
  setValid
}) {
  const [data, setFormData] = useState({
    openingDate: undefined,
    closingDate: undefined
  })

  const resetForm = useCallback(() => {
    setSubmiting(false)
    setValid(true)
    setFormData({
      openingDate: undefined,
      closingDate: undefined
    })
  }, [setSubmiting, setValid])

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(data, errors) => {
        setFormData({
          openingDate: data.openingDate,
          closingDate: data.closingDate
        })

        if (!Object.keys(errors).length) setValid(true)
      }}
      onSubmit={(data, errors) => {
        if (errors !== undefined) return setValid(false)

        setSubmiting(true)
        setTimeout(() => {
          setFormData(data)
          resetForm()
        }, 2500)
      }}
      validateOn='change'
      validation={{
        address: required,
        authors: required,
        bookTitle: required,
        chapter: required,
        closingDate: [required],
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
        series: required,
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
            label='Book Title'
            name='bookTitle'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Series'
            name='series'
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
            label='Chapter'
            name='chapter'
            type='number'
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

BookChapterForm.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  setSubmiting: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default BookChapterForm
