import React from 'react'
import t from 'prop-types'
import AppBar from '@material-ui/core/AppBar'
import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import IconButton from '@material-ui/core/IconButton'
import Slide from '@material-ui/core/Slide'
import Toolbar from '@material-ui/core/Toolbar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import CloseIcon from '@material-ui/icons/Close'

const styles = {
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  },
  label: {
    textTransform: 'uppercase'
  }
}

const Transition = (props) => <Slide direction='up' {...props} />

const FormDialog = ({
  children,
  classes,
  handleToggleDialog,
  invalidForm,
  mode,
  showDialog,
  title
}) => (
  <Dialog
    fullScreen
    open={showDialog}
    onClose={handleToggleDialog}
    TransitionComponent={Transition}>
    <AppBar className={classes.appBar}>
      <Toolbar>
        <IconButton color='inherit' onClick={handleToggleDialog} aria-label='Close'>
          <CloseIcon />
        </IconButton>
        <Typography variant='h6' color='inherit' className={classes.flex}>
          {title}
        </Typography>
        <Button
          classes={{ label: classes.label }}
          color='inherit'
          disabled={!invalidForm}
          onClick={() => console.log('click')}
          type='submit'
        >
          {mode}
        </Button>
      </Toolbar>
    </AppBar>
    {children}
  </Dialog>
)

FormDialog.propTypes = {
  children: t.node.isRequired,
  classes: t.object.isRequired,
  handleToggleDialog: t.func.isRequired,
  invalidForm: t.bool,
  mode: t.string.isRequired,
  showDialog: t.bool,
  title: t.string.isRequired
}

export default withStyles(styles)(FormDialog)
