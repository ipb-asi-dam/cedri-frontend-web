import React, { useCallback, useState } from 'react'
import PropTypes from 'prop-types'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

function TextEditor ({ content }) {
  const [text, handleChange] = useState(content)
  const handleEditorChange = useCallback((value) => handleChange(value))

  return (
    <ReactQuill
      modules={{
        toolbar: [
          ['bold', 'italic'],
          ['link', 'image']
        ]
      }}
      placeholder='Type here your text'
      onChange={handleEditorChange}
      value={text}
    />
  )
}

TextEditor.defaultProps = {
  content: ''
}

TextEditor.propTypes = {
  content: PropTypes.string
}

export default TextEditor
