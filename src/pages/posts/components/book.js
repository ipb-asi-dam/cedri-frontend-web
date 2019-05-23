import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Divider from '@material-ui/core/Divider'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'
import HandleButtons from './handle-buttons'

// utils
import format from 'date-fns/format'
import subDays from 'date-fns/sub_days'
import { checkDate, required, url } from 'utils/validations'

const styles = theme => ({
  divider: {
    marginTop: theme.spacing(3)
  }
})

const minDate = format(new Date(1980, 1, 1), 'YYYY-MM-DD')
const today = format(new Date(), 'YYYY-MM-DD')
const yesterday = format(subDays(new Date(), 1), 'YYYY-MM-DD')

const dateProps = { min: minDate, max: today }
const datePrevProps = { min: minDate, max: yesterday }

function BookForm ({ classes, handleCloseDialog }) {
  const [isValid, setValid] = useState(true)
  const [isSubmiting, setSubmiting] = useState(false)
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
  }, [])

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
        title: required,
        volume: required
      }}
    >
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <RFTextField
            autoFocus
            isSubmiting={isSubmiting}
            label='Title'
            margin='normal'
            name='title'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Authors'
            margin='normal'
            name='authors'
            placeholder='The names must be separated by comma'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Link'
            name='link'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Pages'
            name='pages'
            type='number'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Publication Date'
            name='date'
            type='month'
            shrink
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            inputProps={datePrevProps}
            isSubmiting={isSubmiting}
            label='Opening Date'
            name='openingDate'
            type='date'
            shrink
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            inputProps={dateProps}
            isSubmiting={isSubmiting}
            label='Closing Date'
            name='closingDate'
            type='date'
            shrink
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Address'
            name='address'
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Publisher'
            name='publisher'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Edition'
            name='edition'
            type='number'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Number'
            name='number'
            type='number'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Volume'
            name='volume'
            type='number'
          />
        </Grid>
      </Grid>
      <Divider className={classes.divider} />
      <HandleButtons disabled={!isValid || isSubmiting} />
    </Form>
  )
}

BookForm.propTypes = {
  classes: PropTypes.object.isRequired,
  handleCloseDialog: PropTypes.func.isRequired
}

export default withStyles(styles)(BookForm)