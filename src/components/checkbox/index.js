import React from 'react'
import PropTypes from 'prop-types'

import MuiCheckbox from '@material-ui/core/Checkbox'
import FormControlLabel from '@material-ui/core/FormControlLabel'

function Checkbox ({ onChange, value, ...props }) {
  return (
    <FormControlLabel
      checked={value}
      control={(
        <MuiCheckbox
          color='primary'
          onChange={(_, isChecked) => onChange(isChecked)}
        />
      )}
      {...props}
    />
  )
}

Checkbox.defaultProps = {
  labelPlacement: 'start',
  value: false
}

Checkbox.propTypes = {
  checked: PropTypes.oneOfType([PropTypes.string, PropTypes.bool]),
  labelPlacement: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.bool
}

export default Checkbox
