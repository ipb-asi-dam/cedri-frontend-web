import React from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import TextEditor from 'components/text-editor'
import RFTextField from 'components/text-field'

// utils
import { required } from 'utils/validations'

function PatentForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
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
        authors: required,
        patentNumbers: required,
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
            label='Authors'
            margin='normal'
            name='authors'
            placeholder='The authors must be separated by comma'
          />
        </Grid>
        <Grid item xs={12}>
          <TextEditor
            disabled={isSubmiting}
            label='Patent Numbers'
            name='patentNumbers'
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

PatentForm.defaultProps = {
  data: {}
}

PatentForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default PatentForm
