import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

function RFTextField ({
  children,
  error,
  inputProps,
  required,
  shrink,
  value,
  ...props
}) {
  return (
    <TextField
      error={Boolean(error)}
      helperText={error}
      InputLabelProps={{ required, shrink }}
      InputProps={{ inputProps }}
      {...props.type !== 'file' && { value: value || '' }}
      {...props}
    >
      {children}
    </TextField>
  )
}

RFTextField.defaultProps = {
  disabled: false,
  fullWidth: true,
  required: false,
  shrink: undefined,
  type: 'text',
  variant: 'outlined'
}

RFTextField.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  inputProps: PropTypes.object,
  name: PropTypes.string,
  onChange: PropTypes.func,
  required: PropTypes.bool,
  shrink: PropTypes.bool,
  type: PropTypes.string.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.number
  ])
}

export default RFTextField
