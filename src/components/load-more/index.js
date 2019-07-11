import React from 'react'

import Button from '@material-ui/core/Button'
import Icon from 'components/icon'
import { ic_keyboard_arrow_down as ArrowDownIcon } from 'react-icons-kit/md/ic_keyboard_arrow_down'

export default (props) => (
  <Button {...props}>
    <Icon icon={ArrowDownIcon} /> Load more
  </Button>
)
