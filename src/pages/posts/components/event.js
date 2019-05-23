import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'

// components
import Form from 'react-vanilla-form'
import RFTextField from 'components/text-field'

// utils
import { checkDate, required, url } from 'utils/validations'
import format from 'date-fns/format'

const styles = theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase'
  }
})

const minDate = format(new Date(2000, 1, 1), 'YYYY-MM-DD')

const dateProps = { min: minDate }

function EventForm ({ classes }) {
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
          beginDate: data.beginDate,
          endDate: data.endDate
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
        beginDate: [
          required,
          checkDate(data.beginDate, data.endDate)
        ],
        endDate: [required],
        link: [required, url],
        local: required,
        name: required
      }}
    >
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <RFTextField
            autoFocus
            isSubmiting={isSubmiting}
            label='Name'
            name='name'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Local'
            name='local'
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
            inputProps={dateProps}
            isSubmiting={isSubmiting}
            label='Begin Date'
            name='beginDate'
            type='date'
            shrink
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            inputProps={dateProps}
            isSubmiting={isSubmiting}
            label='End Date'
            name='endDate'
            type='date'
            shrink
          />
        </Grid>
      </Grid>
      <Button
        className={classes.button}
        color='secondary'
        disabled={!isValid || isSubmiting}
        fullWidth
        type='submit'
        variant='contained'
      >
        { isSubmiting ? 'In progress' : 'Confirm' }
      </Button>
    </Form>
  )
}

EventForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(EventForm)
