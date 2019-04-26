import React from 'react'
import t from 'prop-types'
import Fab from '@material-ui/core/Fab'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  fab: {
    bottom: 45,
    margin: theme.spacing.unit,
    marginBottom: 0,
    position: 'fixed',
    right: 24,
    zIndex: 997
  }
})

const CustomFab = ({ ariaLabel, classes, color, InnerIcon, onClick }) => (
  <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
    <Fab
      aria-label={ariaLabel}
      className={classes.fab}
      color={color}
      onClick={onClick}>
      <InnerIcon />
    </Fab>
  </div>
)

CustomFab.defaultProps = {
  ariaLabel: '',
  color: 'primary'
}

CustomFab.propTypes = {
  ariaLabel: t.string,
  classes: t.object.isRequired,
  color: t.string,
  InnerIcon: t.func.isRequired,
  onClick: t.func.isRequired
}

export default withStyles(styles)(CustomFab)
