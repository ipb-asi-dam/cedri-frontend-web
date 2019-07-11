import React from 'react'
import { Link } from 'react-router-dom'

import Grid from '@material-ui/core/Grid'

import iecpsLogo from 'assets/images/iecps_botao.png'
import isdaLogo from 'assets/images/isda_botao.png'
import icrsLogo from 'assets/images/icrs_botao.png'
import msodsLogo from 'assets/images/msods_botao.png'

function ResearchTopics () {
  return (
    <Grid container spacing={2}>
      <Grid item>
        <Link to='/r&d/researchtopics/iecps' title='Industrial Embedded And Cyber-physical Systems'>
          <img src={iecpsLogo} alt='Industrial Embedded And Cyber-physical Systems' />
        </Link>
      </Grid>
      <Grid item>
        <Link to='/r&d/researchtopics/isda' title='Intelligent Systems And Data Analytics'>
          <img src={isdaLogo} alt='Intelligent Systems And Data Analytics' />
        </Link>
      </Grid>
      <Grid item>
        <Link to='/r&d/researchtopics/icrs' title='Intelligent And Collaborative Robotic Systems'>
          <img src={icrsLogo} alt='Intelligent And Collaborative Robotic Systems' />
        </Link>
      </Grid>
      <Grid item>
        <Link to='/r&d/researchtopics/msods' title='Modelling, Simulation And Optimization For Decision Support'>
          <img src={msodsLogo} alt='Modelling, Simulation And Optimization For Decision Support' />
        </Link>
      </Grid>
    </Grid>
  )
}

export default ResearchTopics
