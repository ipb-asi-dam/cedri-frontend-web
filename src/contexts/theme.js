import React, { createContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import useTheme from '@material-ui/core/styles/useTheme'
import withWidth from '@material-ui/core/withWidth'

export const ThemeContext = createContext()

function Theme ({ children, width }) {
  const theme = useTheme()
  const [isMobile, setIsMobile] = useState(false)

  useEffect(() => {
    setIsMobile(theme.breakpoints.keys.indexOf(width) < 2)
  }, [theme.breakpoints, width])

  return (
    <ThemeContext.Provider value={{ isMobile }}>
      {children}
    </ThemeContext.Provider>
  )
}

Theme.propTypes = {
  children: PropTypes.node.isRequired,
  width: PropTypes.string
}

export default withWidth()(Theme)
