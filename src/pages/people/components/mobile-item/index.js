import React from 'react'
import PropTypes from 'prop-types'

import Avatar from '@material-ui/core/Avatar'
import ListItem from '@material-ui/core/ListItem'
import ListItemAvatar from '@material-ui/core/ListItemAvatar'
import ListItemText from '@material-ui/core/ListItemText'

function MobileItem ({ id, name, navigate, areaOfStudy }) {
  return (
    <ListItem button onClick={navigate(id)}>
      <ListItemAvatar>
        <Avatar alt={name} src='//via.placeholder.com/32x32' />
      </ListItemAvatar>
      <ListItemText
        primary={name}
        secondary={areaOfStudy}
      />
    </ListItem>
  )
}

MobileItem.propTypes = {
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  areaOfStudy: PropTypes.string.isRequired
}

export default MobileItem
