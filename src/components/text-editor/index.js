import React, { useCallback, useState } from 'react'
import ReactQuill from 'react-quill'

import 'react-quill/dist/quill.snow.css'

function TextEditor () {
  const [text, handleChange] = useState('')
  const handleEditorChange = useCallback((value) => handleChange(value))

  return (
    <>
      <ReactQuill
        modules={{
          toolbar: [
            [{ 'header': [false, 1, 2, 3, 4, 5, 6] }],
            ['bold', 'italic', 'underline', 'strike', 'blockquote'],
            [
              { list: 'ordered' },
              { list: 'bullet' },
              { indent: '-1' },
              { indent: '+1' },
              { align: 'right' },
              { align: 'center' },
              { align: 'justify' }
            ],
            ['link', 'image']
          ]
        }}
        placeholder='Type here your text'
        onChange={handleEditorChange}
        value={text}
      />
      <div className='ql-editor' dangerouslySetInnerHTML={{ __html: text }} />
    </>
  )
}

export default TextEditor
