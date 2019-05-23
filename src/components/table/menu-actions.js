import React, { useCallback, useState } from 'react'
import t from 'prop-types'
import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import Typography from '@material-ui/core/Typography'

import MoreVertIcon from '@material-ui/icons/MoreVert'

const menuItems = ['Edit', 'Delete']

function MenuActions ({ handleOnEdit, handleOnDelete }) {
  const [anchorEl, setState] = useState(null)
  const open = Boolean(anchorEl)

  const handleClick = useCallback(e => setState(e.currentTarget), [])
  const handleClose = useCallback(() => setState(null), [])

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
          <MenuItem
            key={key}
            onClick={item === 'Edit' ? handleOnEdit : handleOnDelete}
          >
            <Typography variant='inherit'>
              {item}
            </Typography>
          </MenuItem>
        ))}
      </Menu>
    </>
  )
}

MenuActions.defaultProps = {
  handleOnEdit: () => window.alert('Edit'),
  handleOnDelete: () => window.alert('Delete')
}

MenuActions.propTypes = {
  handleOnEdit: t.func.isRequired,
  handleOnDelete: t.func.isRequired
}

export default MenuActions
