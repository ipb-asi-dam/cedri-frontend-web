import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'
import TextEditor from 'components/text-editor'

// utils
import { required, url } from 'utils/validations'

function NewsForm ({
  children,
  initialData,
  isSubmiting,
  setSubmiting,
  setValid
}) {
  const [data, setFormData] = useState(initialData)

  const resetForm = useCallback(() => {
    setSubmiting(false)
    setValid(true)
    setFormData(initialData)
  }, [initialData, setSubmiting, setValid])

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(data, errors) => {
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
        link: [required, url],
        name: required
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12} md={6}>
          <RFTextField
            autoFocus
            disabled={isSubmiting}
            label='Name'
            name='name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Link'
            name='link'
          />
        </Grid>
        <Grid item xs={12}>
          <TextEditor
            disabled={isSubmiting}
            label='Description'
            name='description'
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

NewsForm.defaultProps = {
  initialData: {}
}

NewsForm.propTypes = {
  children: PropTypes.node.isRequired,
  initialData: PropTypes.object,
  isSubmiting: PropTypes.bool.isRequired,
  setSubmiting: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default NewsForm
