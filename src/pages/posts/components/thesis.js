import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required } from 'utils/validations'

function ThesisForm ({
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
      validation={{
        course: required,
        date: required,
        instituion: required,
        studentName: required,
        supervisors: required,
        theseType: required,
        title: required
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
            label='Course'
            margin='normal'
            name='course'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Student Name'
            margin='normal'
            name='studentName'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Instituion'
            margin='normal'
            name='instituion'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='These Type'
            margin='normal'
            name='theseType'
            select
            SelectProps={{ native: true }}
            shrink
          >
            {[
              { label: 'Msc', value: 'msc' },
              { label: 'PhD', value: 'phd' }
            ].map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </RFTextField>
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Delivery Date'
            margin='normal'
            name='date'
            type='month'
            shrink
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Supervisors'
            margin='normal'
            name='supervisors'
            placeholder='The supervisors must be separated by comma'
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

ThesisForm.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  setSubmiting: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default ThesisForm
