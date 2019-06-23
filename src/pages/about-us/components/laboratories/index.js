import React from 'react'

import Grid from '@material-ui/core/Grid'

import NavLink from 'components/nav-link'

// assets
import l2iequipa from 'assets/images/l2iequipa.jpg'
import l2i2 from 'assets/images/l2i2.jpg'
import l2irasperry from 'assets/images/l2irasperry.JPG'
import l2imotor from 'assets/images/l2imotor.jpg'
import l2i4 from 'assets/images/l2i4.jpg'
import robo from 'assets/images/robo.jpg'
import l2i5 from 'assets/images/l2i5.jpg'
import brigantia from 'assets/images/brigantia.jpg'

function Laboratories () {
  return (
    <Grid item>
      <h4>CeDRI has an integrated and multifunctional R&amp;I environment, comprising several laboratorial facilities:</h4>
      <p>
        - Covering different scientific areas<br />
        - Combining laboratorial classes and development of final BsC and MSc projects<br />
        - One lab fully dedicated for R&amp;I activities<br />
      </p>

      <p>
        This ecosystem allows to integrate senior researchers, PhD students and young researchers running moderate to advanced R&amp;I activities, also contributing for the initiation of young students in R&amp;D activities.
        <br />
      </p>
      <p>
        The Research and Innovation Laboratory (L2I) is the laboratory space fully dedicated to R&amp;I activities, comprising individual work spaces for model or SW-based research as also a set of equipment and infrastructures to support a more HW-based research, namely, robots, automation controllers, artificial vision systems and IoT technologies.
      </p>
      <br />

      <Grid item md={4}>
        <img src={l2iequipa} alt='L2I' />
      </Grid>
      <Grid item md={4}>
        <img src={l2i2} alt='L2I' />
      </Grid>
      <Grid item md={4}>
        <img src={l2irasperry} alt='L2I' />
      </Grid>
      <Grid item md={4}>
        <img src={l2imotor} alt='L2I' />
      </Grid>

      <p>
        The flexible production cell and the data cluster and are key platforms to support the development of R&amp;I activities.
      </p>
      <p>
        The small-scale production unit allows the circulation of parts in a flexible production system, providing the necessary experimentation of developed prototype solutions. This production unit is composed by several conveyor belts, one IRB 1400 ABB robot, two punching machine, two indexed line with 2 machining stations, one pneumatic processing center, all from Fischertecnhiks, and several RFID readers as also several buffers. These automation devices are controlled with Omron and Schneider PLCs.
      </p>
      <br />

      <Grid item md={4}>
        <img src={l2i4} alt='L2I' />
      </Grid>
      <Grid item md={4}>
        <img src={robo} alt='Robo' />
      </Grid>

      <p>
        The cluster infrastructure allows to run highly-complex data analysis applications demanding for high-processing capabilities,
        namely supporting the employment of Big data techniques and deploying deep learning algorithms.
        The cluster is being maintained by CeDRI researchers and might be used internally by other research groups or externally by the community.
      </p>
      <br />
      <img src={l2i5} alt='L2I' />
      <br />
      <p>
        Additionally, CeDRI has a laboratorial space in the Brigantia EcoPark that contributes to boost the science and technology transfer, particularly the development of R&amp;I activities closer to installed companies.
      </p>
      <br />
      <img src={brigantia} alt='L2I' />
      <br />

      <h4>Other Laboratories:</h4>
      <p>
        <NavLink to='/about-us/laboratories/lca' title='Advanced Computing Laboratory (LCA)'>
          Advanced Computing Laboratory (LCA)
        </NavLink>
      </p>
      <p>
        <NavLink to='/about-us/laboratories/lcgav' title='Computer Graphics and Virtual Environments Laboratory (LCGAV)'>
          Computer Graphics and Virtual Environments Laboratory (LCGAV)
        </NavLink>
      </p>
      <p>
        <NavLink to='/about-us/laboratories/lcar' title='Control, Automation and Robotics Laboratory (LCAR)'>
          Control, Automation and Robotics Laboratory (LCAR)
        </NavLink>
      </p>
      <p>
        <NavLink to='/about-us/laboratories/le' title='Electrical Engineering Laboratory (LE)'>
          Electrical Engineering Laboratory (LE)
        </NavLink>
      </p>
      <p>
        <NavLink to='/about-us/laboratories/lic' title='Infrastructures and Communications Laboratory (LIC)'>
          Infrastructures and Communications Laboratory (LIC)
        </NavLink>
      </p>
      <p>
        <NavLink to='/about-us/laboratories/lse' title='Electro Mechatronics Systems Laboratory (LSE)'>
          Electro Mechatronics Systems Laboratory (LSE)
        </NavLink>
      </p>
    </Grid>
  )
}

export default Laboratories
