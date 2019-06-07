import React from 'react'
import PropTypes from 'prop-types'

// Material UI components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    borderRadius: 4
  }
})

function Dashboard ({ classes }) {
  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} style={{ padding: 20 }}>
          <Typography component='p'>
            Some info
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} style={{ padding: 20 }}>
          <Typography component='p'>
            Some info
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <p>TABELA</p>
      </Grid>
    </Grid>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
