import React, { useCallback, useContext, useState } from 'react'
import { Link } from 'react-router-dom'

import IconButton from '@material-ui/core/IconButton'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'

import Icon from 'components/icon'
import { ic_account_circle as AccountIcon } from 'react-icons-kit/md/ic_account_circle'

import { AuthContext } from 'contexts/auth'

function AccountMenu () {
  const { logout } = useContext(AuthContext)
  const [anchorEl, setAnchorEl] = useState(null)

  const handleClick = useCallback(e => setAnchorEl(e.currentTarget), [])
  const handleClose = useCallback(() => setAnchorEl(null), [])
  const handleLogout = useCallback(() => {
    handleClose()
    logout()
  }, [logout, handleClose])

  return (
    <>
      <IconButton color='inherit' onClick={handleClick}>
        <Icon icon={AccountIcon} />
      </IconButton>

      <Menu
        anchorEl={anchorEl}
        keepMounted
        open={Boolean(anchorEl)}
        onClose={handleClose}
      >
        <MenuItem component={Link} to='/dashboard'>
          Dashboard
        </MenuItem>
        <MenuItem component={Link} to='/dashboard/account'>
          My account
        </MenuItem>
        <MenuItem onClick={handleLogout}>
          Logout
        </MenuItem>
      </Menu>
    </>
  )
}

export default AccountMenu
