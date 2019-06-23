import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

function Publications ({ location }) {
  const [type, setType] = useState('book')

  useEffect(() => {
    setType(location.pathname.split('/').slice(-1))
  }, [location])

  return (
    <div>
      Publications: {type}
    </div>
  )
}

Publications.propTypes = {
  location: PropTypes.object.isRequired
}

export default Publications
