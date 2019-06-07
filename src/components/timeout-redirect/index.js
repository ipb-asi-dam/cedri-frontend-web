import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

function TimeoutRedirect ({ children, to, variant }) {
  const [timeRemaining, setTimeRemaining] = useState(5)

  useEffect(() => {
    setInterval(() => {
      setTimeRemaining((state) => state - 1)
    }, 1000)
  }, [])

  return timeRemaining > 0
    ? (
      <Typography variant={variant}>
        <Typography variant={variant}>
          {children}
        </Typography>
        You'll be redirected in {timeRemaining}s
      </Typography>
    ) : <Redirect to={to} />
}

TimeoutRedirect.defaultProps = {
  to: '/login',
  variant: 'h5'
}

TimeoutRedirect.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  variant: PropTypes.string
}

export default TimeoutRedirect
