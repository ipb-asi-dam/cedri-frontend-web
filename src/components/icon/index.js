import React from 'react'
import PropTypes from 'prop-types'

import RikIcon from 'react-icons-kit/Icon'

const Icon = (props) => <RikIcon {...props} />

Icon.defaultProps = {
  size: 22
}

Icon.propTypes = {
  icon: PropTypes.object.isRequired,
  size: PropTypes.number
}

export default Icon
