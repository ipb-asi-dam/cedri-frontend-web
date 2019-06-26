import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import InputLabel from '@material-ui/core/InputLabel'

import 'react-quill/dist/quill.snow.css'

function TextEditor ({ disabled, value, withImage, ...props }) {
  const { name, label } = props

  return (
    <>
      <InputLabel htmlFor={name}>
        {label}
      </InputLabel>
      <ReactQuill
        defaultValue={value}
        modules={{
          toolbar: [
            ['bold', 'italic'],
            ['link', ...withImage && ['image']]
          ]
        }}
        placeholder='Type here your text'
        readOnly={disabled}
        style={{ marginTop: 10 }}
        {...props}
      />
    </>
  )
}

TextEditor.defaultProps = {
  disabled: false,
  value: '',
  withImage: false
}

TextEditor.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired,
  onChange: PropTypes.func,
  value: PropTypes.any,
  withImage: PropTypes.bool
}

export default TextEditor
