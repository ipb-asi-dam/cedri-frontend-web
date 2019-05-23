import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import Button from '@material-ui/core/Button'
import Grid from '@material-ui/core/Grid'
import withStyles from '@material-ui/core/styles/withStyles'
import Form from 'react-vanilla-form'

// components
import RFTextField from 'components/text-field'

// utils
import { required } from 'utils/validations'

const styles = theme => ({
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase'
  }
})

function PatentForm ({ classes }) {
  const [isValid, setValid] = useState(true)
  const [isSubmiting, setSubmiting] = useState(false)
  const [data, setFormData] = useState({})

  const resetForm = useCallback(() => {
    setSubmiting(false)
    setValid(true)
    setFormData({})
  }, [])

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
        authors: required,
        patentNumbers: required,
        title: required
      }}
    >
      <Grid container spacing={16}>
        <Grid item xs={12} md={6}>
          <RFTextField
            autoFocus
            isSubmiting={isSubmiting}
            label='Title'
            margin='normal'
            name='title'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Authors'
            margin='normal'
            name='authors'
            placeholder='The authors must be separated by comma'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Patent Numbers'
            margin='normal'
            name='patentNumbers'
            placeholder='The patent numbers must be separated by comma'
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

PatentForm.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(PatentForm)
