import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'
import TextEditor from 'src/components/text-editor'

// utils
import { required, url } from 'utils/validations'

const styles = theme => ({
  button: {
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    textTransform: 'uppercase'
  }
})

function Media ({ classes, initialData }) {
  const [isValid, setValid] = useState(true)
  const [isSubmiting, setSubmiting] = useState(false)
  const [data, setFormData] = useState(initialData)

  const resetForm = useCallback(() => {
    setSubmiting(false)
    setValid(true)
    setFormData(initialData)
  })

  return (
    <Form
      customErrorProp='error'
      data={data}
      keepErrorOnFocus
      onChange={(data, errors) => {
        console.log(data)
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
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <RFTextField
            autoFocus
            isSubmiting={isSubmiting}
            label='Name'
            name='name'
          />
        </Grid>
        <Grid item xs={12} sm={6}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Link'
            name='link'
          />
        </Grid>
        <Grid item xs={12}>
          <TextEditor
            isSubmiting={isSubmiting}
            label='Description'
            name='description'
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

Media.defaultProps = {
  initialData: {}
}

Media.propTypes = {
  classes: PropTypes.object.isRequired,
  initialData: PropTypes.object
}

export default withStyles(styles)(Media)
