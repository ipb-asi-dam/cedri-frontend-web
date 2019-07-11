import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Form from 'react-vanilla-form'
import Grid from '@material-ui/core/Grid'

// components
import Checkbox from 'components/checkbox'
import RFTextField from 'components/text-field'

// utils
import { checkDate, required, url } from 'utils/validations'
import format from 'date-fns/format'

function ProjectsForm ({
  children,
  data,
  isSubmiting,
  onSubmit,
  setValid
}) {
  const [image, setImage] = useState()

  function handleOnImageChange (e) {
    setImage(e.target.files[0])
  }

  data = {
    ...data,
    endDate: format((data.endDate || new Date()), 'YYYY-MM'),
    isAccepted: data.isAccepted || true,
    startDate: format((data.startDate || new Date()), 'YYYY-MM'),
    type: data.type || 'international'
  }

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(_, errors) => {
        setValid(Boolean(!Object.keys(errors).length))
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
        description: [required],
        endDate: [
          required,
          checkDate
        ],
        fundedBy: [required],
        startDate: [
          required,
          checkDate
        ],
        title: [required],
        type: [required],
        webPage: [url]
      }}
    >
      <Grid container spacing={2}>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Title'
            name='title'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Description'
            multiline
            name='description'
            required
            rows={3}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Consortium'
            multiline
            name='consortium'
            rows={3}
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Funded by'
            name='fundedBy'
            required
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Web page'
            name='webPage'
          />
        </Grid>
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Start Date'
            name='startDate'
            type='month'
            required
            shrink
          />
        </Grid>
        <Grid item xs={6}>
          <RFTextField
            disabled={isSubmiting}
            label='End Date'
            name='endDate'
            type='month'
            required
            shrink
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            disabled={isSubmiting}
            label='Type'
            name='type'
            required
            select
            SelectProps={{ native: true }}
          >
            {[
              { label: 'International', value: 'international' },
              { label: 'National', value: 'national' },
              { label: 'Other', value: 'other' }
            ].map(({ label, value }) => (
              <option key={value} value={value}>
                {label}
              </option>
            ))}
          </RFTextField>
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            label='Image'
            onChange={handleOnImageChange}
            shrink
            type='file'
          />
        </Grid>
        <Grid item xs={12}>
          <Checkbox
            label='Approved?'
            name='isAccepted'
          />
        </Grid>
        {children}
      </Grid>
    </Form>
  )
}

ProjectsForm.propTypes = {
  children: PropTypes.node.isRequired,
  data: PropTypes.object.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired,
  setValid: PropTypes.func.isRequired
}

export default ProjectsForm
