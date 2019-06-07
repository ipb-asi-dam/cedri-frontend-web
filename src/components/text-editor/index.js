import React from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'
import InputLabel from '@material-ui/core/InputLabel'

import 'react-quill/dist/quill.snow.css'

function TextEditor ({ disabled, ...props }) {
  const { name, label } = props

  return (
    <>
      <InputLabel htmlFor={name}>
        {label}
      </InputLabel>
      <ReactQuill
        modules={{
          toolbar: [
            ['bold', 'italic'],
            ['link', 'image']
          ]
        }}
        placeholder='Type here your text'
        readOnly={disabled}
        style={{ marginTop: 10 }}
        {...props}
      />
      <input hidden {...props} />
    </>
  )
}

TextEditor.defaultProps = {
  disabled: false,
  value: ''
}

TextEditor.propTypes = {
  disabled: PropTypes.bool,
  name: PropTypes.string.isRequired,
  label: PropTypes.string.isRequired
}

export default TextEditor
