import React from 'react'
import PropTypes from 'prop-types'

import NavLink from 'components/nav-link'

function Project ({
  consortium,
  description,
  duration,
  fundedBy,
  image,
  name,
  webpage
}) {
  return (
    <>
      {image && <p><img src={image} className='img-fluid' alt='Mathe' /></p>}
      <h3>{name}</h3>
      <p>{description}</p>
      <p><strong>Funded by:</strong>{fundedBy}</p>
      <p><strong>Consortium:</strong>{consortium}</p>
      <p><strong>Duration:</strong>{duration}</p>
      {webpage && (
        <p>
          <strong>Web page:</strong>
          <NavLink to={webpage} rel='noopener noreferrer' target='_blank'>
            {webpage}
          </NavLink>
        </p>
      )}
      <p />
      <br />
      <hr />
      <br />
    </>
  )
}

Project.propTypes = {
  consortium: PropTypes.string.isRequired,
  description: PropTypes.string.isRequired,
  duration: PropTypes.string.isRequired,
  fundedBy: PropTypes.string.isRequired,
  image: PropTypes.string,
  name: PropTypes.string.isRequired,
  webpage: PropTypes.string
}

export default Project
