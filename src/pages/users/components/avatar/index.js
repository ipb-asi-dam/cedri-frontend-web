import React from 'react'
import PropTypes from 'prop-types'

import MuiAvatar from '@material-ui/core/Avatar'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

import styles from './styles'

function Avatar ({ classes, src, userName }) {
  return (
    <div className={classes.tableCellInner}>
      <MuiAvatar className={classes.avatar} src={src} />
      <Typography className={classes.nameText} variant='body1'>
        {userName}
      </Typography>
    </div>
  )
}

Avatar.propTypes = {
  classes: PropTypes.object.isRequired,
  src: PropTypes.string.isRequired,
  userName: PropTypes.string.isRequired
}

export default withStyles(styles)(Avatar)
