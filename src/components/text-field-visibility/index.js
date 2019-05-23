import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import Visibility from '@material-ui/icons/Visibility'
import VisibilityOff from '@material-ui/icons/VisibilityOff'

import TextField from 'components/text-field'

function TextFieldVisibility (props) {
  const [isHidden, setVisibility] = useState(true)

  const toggleVisibility = () => setVisibility(!isHidden)

  return (
    <TextField
      {...props}
      InputProps={{
        endAdornment: (
          <InputAdornment position='end'>
            <IconButton
              aria-label='Toggle password visibility'
              onClick={toggleVisibility}
            >
              {isHidden ? <Visibility /> : <VisibilityOff />}
            </IconButton>
          </InputAdornment>
        ) }}
      type={isHidden ? 'password' : 'text'}
    />
  )
}

export default TextFieldVisibility
