import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import { Redirect } from 'react-router-dom'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

function TimeoutRedirect ({
  children,
  to,
  mainVariant,
  secondaryVariant
}) {
  const classes = useStyles()
  const [timeRemaining, setTimeRemaining] = useState(5)

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeRemaining((state) => state - 1)
    }, 1000)

    return () => {
      clearInterval(interval)
    }
  }, [])

  return timeRemaining > 0
    ? (
      <div className={classes.container}>
        <Typography variant={secondaryVariant}>
          {children}
        </Typography>
        <Typography variant={mainVariant}>
          You'll be redirected in {timeRemaining}s
        </Typography>
      </div>
    ) : <Redirect to={to} />
}

TimeoutRedirect.defaultProps = {
  to: '/login',
  mainVariant: 'h5',
  secondaryVariant: 'h4'
}

TimeoutRedirect.propTypes = {
  children: PropTypes.node.isRequired,
  to: PropTypes.string,
  mainVariant: PropTypes.string,
  secondaryVariant: PropTypes.string
}

export default TimeoutRedirect
