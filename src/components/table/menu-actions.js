import React, { useCallback, useState } from 'react'
import t from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import ListItemIcon from '@material-ui/core/ListItemIcon'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'
import MoreVertIcon from '@material-ui/icons/MoreVert'

const styles = {
  menuItem: {
    '& $icon': {
      marginRight: 5
    }
  },
  primary: {},
  icon: {}
}

const menuItems = [
  { text: 'Edit', icon: EditIcon },
  { text: 'Delete', icon: DeleteIcon }
]

function MenuActions ({ classes }) {
  const [anchorEl, setState] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = useCallback(e => setState(e.currentTarget))
  const handleClose = useCallback(() => setState(null))

  return (
    <>
      <IconButton
        aria-label='More'
        aria-owns={open ? 'actions-menu' : undefined}
        aria-haspopup='true'
        onClick={handleClick}
      >
        <MoreVertIcon />
      </IconButton>
      <Menu
        anchorEl={anchorEl}
        open={open}
        onClose={handleClose}
      >
        {menuItems.map((item, key) => (
          <MenuItem key={key} className={classes.menuItem}>
            <ListItemIcon className={classes.icon}>
              <item.icon />
            </ListItemIcon>
            <Typography variant='inherit'>
              {item.text}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

MenuActions.propTypes = {
  classes: t.object.isRequired
}

export default withStyles(styles)(MenuActions)
