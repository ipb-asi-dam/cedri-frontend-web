import React from 'react'
import PropTypes from 'prop-types'

import NavLink from 'components/nav-link'

function Laboratory ({
  children,
  timeTableFile,
  timeTableFileName,
  title,
  subtitle
}) {
  return (
    <>
      {title && <h3>{title}</h3>}
      {subtitle && <h4>{subtitle}</h4>}

      {children}

      <br />

      <h4>Timetable:</h4>

      <div id='wrapper'>
        <object data={timeTableFile} style={{ width: '100%' }}>
          <p>
            Your web browser doesn't have a PDF Plugin. Instead you can
            <a download={timeTableFileName} href={timeTableFile}>
              Click here to download the PDF
            </a>.
          </p>
        </object>
      </div>

      <br />
      <br />
      <a download={timeTableFileName} href={timeTableFile} title='Download timetable'>
        Download timetable
      </a>
      <br />
      <br />
      <br />
      <NavLink to='/about-us/laboratories' title='Laboratories'>
        Back
      </NavLink>
    </>
  )
}

Laboratory.propTypes = {
  children: PropTypes.node.isRequired,
  timeTableFile: PropTypes.string.isRequired,
  timeTableFileName: PropTypes.string.isRequired,
  title: PropTypes.string,
  subtitle: PropTypes.string
}

export default Laboratory
