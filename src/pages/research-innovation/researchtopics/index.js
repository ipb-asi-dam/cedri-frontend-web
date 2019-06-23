import React from 'react'

import iecpsLogo from 'assets/images/iecps_botao.png'
import isdaLogo from 'assets/images/isda_botao.png'
import icrsLogo from 'assets/images/icrs_botao.png'
import msodsLogo from 'assets/images/msods_botao.png'

function ResearchTopics () {
  return (
    <div className='row_researchtopics'>
      <div className='col-md-3' />
      <div className='col-md-2'>
        <a href='iecps.html' title='Industrial Embedded And Cyber-physical Systems'>
          <img src={iecpsLogo} className='img-fluid' alt='Industrial Embedded And Cyber-physical Systems' />
        </a>
      </div>
      <div className='col-md-2'>
        <a href='isda.html' title='Intelligent Systems And Data Analytics'>
          <img src={isdaLogo} className='img-fluid' alt='Intelligent Systems And Data Analytics' />
        </a>
      </div>
      <div className='col-md-2'>
        <a href='icrs.html' title='Intelligent And Collaborative Robotic Systems'>
          <img src={icrsLogo} className='img-fluid' alt='Intelligent And Collaborative Robotic Systems' />
        </a>
      </div>
      <div className='col-md-2'>
        <a href='msods.html' title='Modelling, Simulation And Optimization For Decision Support'>
          <img src={msodsLogo} className='img-fluid' alt='Modelling, Simulation And Optimization For Decision Support' />
        </a>
      </div>
      <div className='col-md-1' />
    </div>
  )
}

export default ResearchTopics
