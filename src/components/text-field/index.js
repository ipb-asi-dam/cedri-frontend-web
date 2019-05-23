import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

function RFTextField ({
  children,
  error,
  inputProps,
  isSubmiting,
  required,
  shrink,
  title,
  value,
  ...props
}) {
  return (
    <TextField
      error={Boolean(error)}
      fullWidth
      helperText={error}
      InputProps={{ inputProps }}
      InputLabelProps={{ required, shrink }}
      disabled={isSubmiting}
      label={title}
      value={value || ''}
      variant='outlined'
      {...props}
    >
      {children}
    </TextField>
  )
}

RFTextField.defaultProps = {
  isSubmiting: false,
  required: true,
  shrink: undefined,
  type: 'text'
}

RFTextField.propTypes = {
  children: PropTypes.node,
  error: PropTypes.string,
  inputProps: PropTypes.object,
  isSubmiting: PropTypes.bool,
  name: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  shrink: PropTypes.bool,
  title: PropTypes.string,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default RFTextField
