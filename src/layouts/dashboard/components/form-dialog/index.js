import React, { forwardRef } from 'react'
import t from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'

import Icon from 'components/icon'
import { ic_close as CloseIcon } from 'react-icons-kit/md/ic_close'

import useStyles from './styles'

const Transition = forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />)

function FormDialog ({
  children,
  handleCloseDialog,
  showDialog,
  title
}) {
  const classes = useStyles()

  return (
    <Dialog
      classes={{ paperFullScreen: classes.dialog }}
      fullScreen
      open={showDialog}
      onClose={handleCloseDialog}
      title={title}
      TransitionComponent={Transition}>
      <Toolbar className={classes.toolbar}>
        <IconButton
          aria-label='Close'
          color='inherit'
          onClick={handleCloseDialog}
        >
          <Icon icon={CloseIcon} />
        </IconButton>

        <Typography variant='h3'>
          {title}
        </Typography>
      </Toolbar>
      <div className={classes.content}>
        {children}
      </div>
    </Dialog>
  )
}

FormDialog.propTypes = {
  children: t.node.isRequired,
  handleCloseDialog: t.func.isRequired,
  showDialog: t.bool,
  title: t.string.isRequired
}

export default FormDialog
