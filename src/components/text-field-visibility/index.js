import React, { useState } from 'react'
import IconButton from '@material-ui/core/IconButton'
import InputAdornment from '@material-ui/core/InputAdornment'
import { ic_visibility as Visibility } from 'react-icons-kit/md/ic_visibility'
import { ic_visibility_off as VisibilityOff } from 'react-icons-kit/md/ic_visibility_off'

import Icon from 'components/icon'
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
              <Icon icon={isHidden ? Visibility : VisibilityOff} />
            </IconButton>
          </InputAdornment>
        ) }}
      type={isHidden ? 'password' : 'text'}
    />
  )
}

export default TextFieldVisibility
