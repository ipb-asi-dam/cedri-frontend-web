import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required } from 'utils/validations'
import InputLabel from '@material-ui/core/InputLabel'
import InputBase from '@material-ui/core/InputBase'

function SoftwareForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
  const imageRef = useRef()
  const [image, setImage] = useState()

  function handleOnChangeImage (e) {
    setImage(e.target.files[0])
  }

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(_, errors) => {
        if (!Object.keys(errors).length) setValid(true)
      }}
      onSubmit={(data, errors) => {
        const content = new FormData()

        content.append('image', image)

        Object
          .entries(data)
          .forEach(([key, val]) => {
            content.append(key, val)
          })

        onSubmit(content, errors)
      }}
      validation={{
        description: required,
        title: required
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RFTextField
            autoFocus
            disabled={isSubmiting}
            label='Title'
            margin='normal'
            name='title'
            required
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Description'
            margin='normal'
            multiline
            name='description'
            required
            rows={3}
          />
        </Grid>
        <Grid item xs={12}>
          <InputLabel>Image</InputLabel>
          <InputBase
            onChange={handleOnChangeImage}
            ref={imageRef}
            type='file'
          />
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

SoftwareForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default SoftwareForm
