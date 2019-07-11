import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'config/axios'
import { VictoryPie, VictoryTooltip } from 'victory'

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
  const [projectData, setProjectsData] = useState([])
  const [outcomesData, setOutcomesData] = useState([])

  async function getChartData (route) {
    const response = await axios.get(`/private/statistics/${route}`)
    const { total, ...res } = response.data.data
    return Object.entries(res).map(([k, v]) => ({ x: k, y: v }))
  }

  useEffect(() => {
    (async () => {
      const outcomes = await getChartData('outcomes')
      const projects = await getChartData('projects')
      setOutcomesData(outcomes)
      setProjectsData(projects)
    })()
  }, [])

  return (
    <Grid className={classes.root} container spacing={3}>
      {outcomesData.length > 0 && <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} style={{ padding: 20 }}>
          <Typography>Outcomes</Typography>
          <VictoryPie
            colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            data={outcomesData}
            labels={(d) => `${d.x}: ${d.y}`}
            labelComponent={<VictoryTooltip />}
          />
        </Paper>
      </Grid>}

      {projectData.length > 0 && <Grid item xs={12} sm={6}>
        <Paper className={classes.paper} style={{ padding: 20 }}>
          <Typography>Projects</Typography>
          <VictoryPie
            colorScale={['tomato', 'orange', 'gold', 'cyan', 'navy']}
            data={projectData}
            labels={(d) => `${d.x}: ${d.y}`}
            labelComponent={<VictoryTooltip />}
          />
        </Paper>
      </Grid>}
    </Grid>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
