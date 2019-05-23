import React, { forwardRef } from 'react'
import t from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import CloseIcon from '@material-ui/icons/Close'

const styles = theme => ({
  appBar: {
    position: 'relative'
  },
  content: {
    padding: theme.spacing(2, 24)
  },
  dialog: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    backgroundColor: theme.palette.background.paper
  },
  paperWrapper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(0, 4)
  },
  label: {
    textTransform: 'uppercase'
  }
})

const Transition = forwardRef((props, ref) => <Slide direction='up' ref={ref} {...props} />)

const FormDialog = ({
  children,
  classes,
  handleCloseDialog,
  showDialog,
  title
}) => (
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
        <CloseIcon />
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

FormDialog.propTypes = {
  children: t.node.isRequired,
  classes: t.object.isRequired,
  handleCloseDialog: t.func.isRequired,
  showDialog: t.bool,
  title: t.string.isRequired
}

export default withStyles(styles)(FormDialog)
