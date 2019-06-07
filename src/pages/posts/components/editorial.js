import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required, url } from 'utils/validations'

function EditorialForm ({
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
        authors: required,
        date: required,
        edition: required,
        link: [required, url],
        journal: required,
        number: required,
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
        <Grid item xs={12} sm={4}>
          <RFTextField
            disabled={isSubmiting}
            label='Journal'
            name='journal'
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

EditorialForm.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  setSubmiting: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default EditorialForm
