import React from 'react'
import Typography from '@material-ui/core/Typography'

import { ic_arrow_back as ArrowBackIcon } from 'react-icons-kit/md/ic_arrow_back'

import Icon from 'components/icon'
import NavLink from 'components/nav-link'

export default () => (
  <>
    <Typography variant='h3'>
      <NavLink to='/r&d/researchtopics'>
        <Icon icon={ArrowBackIcon} style={{ color: 'black' }} />
      </NavLink>
      Modelling, Simulation and Optimization for Decision Support
    </Typography>
    <p>It is being noticed a control paradigm shift from centralization into decentralization to face the increasingly complexity associated to industrial systems. The development of distributed system solutions, considering the symbiosis of cyber and physical counterparts, is a promising approach to overcome these requirements. Furthermore, when these distributed nodes are enhanced by employing emergent techniques and technologies, such as multi-agent systems, Internet of Things and Services, ontologies, edge and cloud computing, as well as self- organization mechanisms, innovative industrial solutions can be built to solve real-world complex problems, namely in shop floor control, zero defect manufacturing, reconfigurable manufacturing, machine and systems health monitoring, smart electrical grids and smart agriculture.</p>
    <p>This research topic includes the following topics/technologies:</p>
    <p>
      - Cyber-physical systems<br />
      - Internet of Things<br />
      - Cloud, fog and edge computing<br />
      - Multi-agent systems<br />
    </p>
    <p>The on-going R&amp;D projects in this research topic are <a href='http://go0dman-project.eu/' title='GOODMAN' rel='noopener noreferrer' target='_blank'>GO0DMAN</a>, <a href='http://www.horizon2020-perform.eu/' title='PERFoRM' rel='noopener noreferrer' target='_blank'>PERFoRM</a>, FIT4FoF, <a href='http://i40tmad.ipb.pt/' title='I40@TMAD' rel='noopener noreferrer' target='_blank'>I40@TMAD</a>, <a href='http://maintenance40.ipb.pt' title='Maintenance 4.0' rel='noopener noreferrer' target='_blank'>Maintenance 4.0</a>, SmartParking, SilkHouse, <a href='http://www.biourb.ipb.pt/' rel='noopener noreferrer' title='BIOURB' target='_blank'>BIOURB</a> and SAFe.</p>
    <p />
    <br />
  </>
)
