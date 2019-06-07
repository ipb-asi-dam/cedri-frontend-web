import React from 'react'
import PropTypes from 'prop-types'
import TextField from '@material-ui/core/TextField'

function RFTextField ({
  children,
  disabled,
  error,
  inputProps,
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
      disabled={disabled}
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
  disabled: false,
  required: true,
  shrink: undefined,
  type: 'text'
}

RFTextField.propTypes = {
  children: PropTypes.node,
  disabled: PropTypes.bool,
  error: PropTypes.string,
  inputProps: PropTypes.object,
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
