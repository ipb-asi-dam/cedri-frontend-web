import React from 'react'
import PropTypes from 'prop-types'
import { Link as RRLink } from 'react-router-dom'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

function Link ({ children, classes, to }) {
  return (
    <RRLink className={classes.link} to={to}>
      {children}
    </RRLink>
  )
}

Link.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  to: PropTypes.string.isRequired
}

export default withStyles(styles)(Link)
