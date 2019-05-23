import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

function TimeoutRedirect ({ children, to }) {
  const [timeRemaining, setTimeRemaining] = useState(5)

  useEffect(() => {
    setInterval(() => {
      setTimeRemaining((state) => state - 1)
    }, 1000)
  }, [])

  return timeRemaining > 0
    ? (
      <Typography variant='h3'>
        You'll be redirected in {timeRemaining}s
        <Typography variant='h3'>
          {children}
        </Typography>
      </Typography>
    ) : <Redirect to={to} />
}

TimeoutRedirect.defaultProps = {
  to: '/login'
}

TimeoutRedirect.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string
}

export default TimeoutRedirect
