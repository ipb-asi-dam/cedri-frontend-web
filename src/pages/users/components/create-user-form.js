import React, { useRef, useState } from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import Grid from '@material-ui/core/Grid'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required, email } from 'utils/validations'

function CreateUserForm ({
  children,
  classes,
  data,
  isEdit,
  isSubmiting,
  onSubmit
}) {
  data = Object.keys(data).length === 0
    ? {
      name: '',
      email: '',
      type: 'im',
      isAdmin: false
    }
    : data

  const imageURL = data.file
    ? `${process.env.REACT_APP_API_URL}/public/images/${data.file.md5}`
    : '//via.placeholder.com/100'

  const imageRef = useRef()
  const [liveImage, setLiveImage] = useState()
  const [image, setImage] = useState()

  function handleOnChangeImage (e) {
    e.persist()

    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0])
      const reader = new FileReader()

      reader.onload = function (base64) {
        setLiveImage(base64.target.result)
      }

      reader.readAsDataURL(e.target.files[0])
    } else {
      setLiveImage()
    }
  }

  function beforeSubmit (data, errors) {
    if (errors) return

    const content = new FormData()

    content.append('image', image)

    Object
      .entries(data)
      .forEach(([key, val]) => {
        content.append(key, val)
      })

    return content
  }

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onSubmit={(data, errors) => {
        onSubmit(beforeSubmit(data, errors), errors)
      }}
      validation={{
        name: [required],
        email: [required, email]
      }}
    >
      <Grid container spacing={2}>
        {isEdit && <Grid container justify='center' style={{ paddingBottom: 20 }}>
          <Avatar
            alt=''
            className={classes.avatar}
            src={liveImage || imageURL}
          />
          <input
            accept='image/gif, image/jpeg, image/png'
            className={classes.avatarBtn}
            onChange={handleOnChangeImage}
            ref={imageRef}
            style={{ width: 100, height: 100 }}
            type='file'
          />
        </Grid>}
        <Grid item xs={12}>
          <RFTextField
            autoFocus
            disabled={isSubmiting}
            label='Name'
            name='name'
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Email'
            name='email'
          />
        </Grid>
        <Grid item xs={12}>
          <RFTextField
            disabled={isSubmiting}
            label='Type'
            name='type'
            select
            SelectProps={{ native: true }}
          >
            <option value='im'>Integrated Members</option>
            <option value='rf'>Research Fellowships</option>
            <option value='c'>Collaborators</option>
            <option value='vr'>Visiting Researchers</option>
          </RFTextField>
        </Grid>
        <Grid item xs={12}>
          <label htmlFor='isAdmin'>
            <input
              disabled={isSubmiting}
              type='checkbox'
              name='isAdmin'
            />
            Is Administrator?
          </label>
        </Grid>
      </Grid>
      {children}
    </Form>
  )
}

CreateUserForm.propTypes = {
  children: PropTypes.node,
  classes: PropTypes.object,
  data: PropTypes.object,
  isEdit: PropTypes.bool.isRequired,
  isSubmiting: PropTypes.bool.isRequired,
  onSubmit: PropTypes.func.isRequired
}

export default CreateUserForm
