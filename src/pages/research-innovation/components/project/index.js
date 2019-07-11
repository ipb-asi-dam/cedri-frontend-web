import React from 'react'
import PropTypes from 'prop-types'

import NavLink from 'components/nav-link'

import { formatDateProject, getImageURL } from 'utils'

function Project ({
  consortium,
  description,
  endDate,
  file,
  fundedBy,
  title,
  startDate,
  webPage,
  isLast
}) {
  return (
    <>
      {file && <p><img alt='' src={getImageURL(file)} /></p>}
      <h3>{title}</h3>
      <p>{description}</p>
      <p><strong>Funded by: </strong>{fundedBy}</p>
      {consortium && <p><strong>Consortium: </strong>{consortium}</p>}
      <p><strong>Duration: </strong>{formatDateProject(startDate, endDate)}</p>
      {webPage && (
        <p>
          <strong>Web page: </strong>
          <NavLink to={webPage} rel='noopener noreferrer' target='_blank'>
            {webPage}
          </NavLink>
        </p>
      )}
      <p />
      <br />
      {isLast && (
        <>
          <hr />
          <br />
        </>
      )}
    </>
  )
}

Project.propTypes = {
  consortium: PropTypes.string,
  description: PropTypes.string.isRequired,
  endDate: PropTypes.string.isRequired,
  file: PropTypes.object,
  fundedBy: PropTypes.string.isRequired,
  isLast: PropTypes.bool,
  startDate: PropTypes.string.isRequired,
  title: PropTypes.string.isRequired,
  webPage: PropTypes.string
}

export default Project
