import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Form from 'react-vanilla-form'
import Grid from '@material-ui/core/Grid'

// components
import RFTextField from 'components/text-field'

// utils
import { required, url } from 'utils/validations'

function JournalForm ({
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
        articleNumber: required,
        authors: required,
        date: required,
        link: [required, url],
        journal: required,
        journalNumber: required,
        pages: required,
        title: required,
        volume: required
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Title'
            name='title'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Authors'
            name='authors'
            placeholder='The names must be separated by comma'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Link'
            name='link'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Publication Date'
            name='date'
            type='month'
            shrink
          />
        </Grid>
        <Grid item xs={12} sm={6} md={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Journal'
            name='journal'
          />
        </Grid>
        <Grid item xs={6} sm={6} md={3}>
          <RFTextField
            disabled={isSubmiting}
            label='Journal Number'
            name='journalNumber'
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <RFTextField
            disabled={isSubmiting}
            label='Pages'
            name='pages'
            type='number'
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <RFTextField
            disabled={isSubmiting}
            label='Article Number'
            name='articleNumber'
          />
        </Grid>
        <Grid item xs={6} sm={4} md={3}>
          <RFTextField
            disabled={isSubmiting}
            label='Volume'
            name='volume'
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

JournalForm.propTypes = {
  children: PropTypes.node.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  setSubmiting: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default JournalForm
