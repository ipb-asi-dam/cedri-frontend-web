import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required } from 'utils/validations'

function SoftwareForm ({
  children,
  isSubmiting,
  setSubmiting,
  setValid
}) {
  const [data, setFormData] = useState({})

  const resetForm = useCallback(() => {
    setSubmiting(false)
    setValid(true)
    setFormData({})
  }, [setSubmiting, setValid])

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(_, errors) => {
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
        description: required,
        prizeWinners: required,
        title: required,
        year: required
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
            label='Description'
            margin='normal'
            name='description'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Prize Winners'
            name='prizeWinners'
            placeholder='The prizes must be separated by comma'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Year'
            name='year'
            type='number'
            inputProps={{
              min: 2000,
              max: new Date().getFullYear()
            }}
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

SoftwareForm.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  setSubmiting: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default SoftwareForm
