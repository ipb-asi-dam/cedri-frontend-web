import React from 'react'
import PropTypes from 'prop-types'

import Typography from '@material-ui/core/Typography'

const Section = ({ children, title, ...props }) => (
  <section {...props}>
    <Typography align='center' variant='h3'>
      {title}
    </Typography>
    {children}
  </section>
)

Section.propTypes = {
  children: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired
}

export default Section
