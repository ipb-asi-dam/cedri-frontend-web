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
    marginTop: theme.spacing.unit * 3,
    marginBottom: theme.spacing.unit * 2,
    textTransform: 'uppercase'
  }
})

function SignUp ({ classes }) {
  const [isValid, setValid] = useState(true)
  const [isSubmiting, setSubmiting] = useState(false)
  const [data, setFormData] = useState({})

  const resetForm = useCallback(() => {
    setSubmiting(false)
    setValid(true)
    setFormData({})
  })

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
        description: required,
        prizeWinners: required,
        title: required,
        year: required
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
            label='Description'
            margin='normal'
            name='description'
          />
        </Grid>
        <Grid item xs={12} md={6}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Prize Winners'
            margin='normal'
            name='prizeWinners'
            placeholder='The prizes must be separated by comma'
          />
        </Grid>
        <Grid item xs={6} sm={4}>
          <RFTextField
            isSubmiting={isSubmiting}
            label='Year'
            name='year'
            type='number'
            inputProps={{
              min: 2000,
              max: new Date().getFullYear()
            }}
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

SignUp.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(SignUp)
