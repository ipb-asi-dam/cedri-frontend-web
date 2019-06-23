import React from 'react'

import NavLink from 'components/nav-link'

import algoritmiLogo from 'assets/images/algoritmi.png'
import inesctecLogo from 'assets/images/inesctec.png'
import feupLogo from 'assets/images/feup.png'
import uabLogo from 'assets/images/uab.png'
import uleonLogo from 'assets/images/uleon.png'

function PartnersNetworks () {
  return (
    <>
      <p>
        <NavLink
          to='http://algoritmi.uminho.pt/'
          title='Algoritmi'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={algoritmiLogo} className='img-fluid' alt='Algoritmi' />
        </NavLink>
      </p>
      <h5>
        <NavLink
          to='http://algoritmi.uminho.pt/'
          title='Algoritmi'
          rel='noopener noreferrer'
          target='_blank'
        >
          Algoritmi Research Center
        </NavLink>
      </h5>
      <p>University of Minho, Portugal</p>
      <br />
      <br />
      <p />
      <p>
        <NavLink
          to='http://inesctec.pt/'
          title='INESCTEC'
          rel='noopener noreferrer'
          target='_blank'
        >
          <img src={inesctecLogo} className='img-fluid' alt='INESCTEC' />
        </NavLink>
      </p>
      <h5>
        <NavLink
          to='http://inesctec.pt/'
          title='INESCTEC'
          rel='noopener noreferrer'
          target='_blank'
        >
          Institute for Systems and Computer Engineering, Technology and Science
        </NavLink>
      </h5>
      <p>Portugal</p>
      <br />
      <br />
      <p />

      <p>
        <NavLink
          rel='noopener noreferrer'
          target='_blank'
          title='FEUP'
          to='https://sigarra.up.pt/feup'
        >
          <img src={feupLogo} className='img-fluid' alt='FEUP' />
        </NavLink>
      </p>
      <h5>
        <NavLink
          rel='noopener noreferrer'
          target='_blank'
          title='FEUP'
          to='https://sigarra.up.pt/feup'
        >
          Faculty of Engineering of the University of Porto
        </NavLink>
      </h5>
      <p>Doctoral Program in Electrical and Computer Engineering (PDEEC), Portugal</p>
      <p />
      <br />

      <p><img src={uabLogo} className='img-fluid' alt='UAB' /></p>
      <h5>
        <NavLink
          rel='noopener noreferrer'
          target='_blank'
          title='ASAC'
          to='http://asac-uab.cat/'
        >
          ASAC (Advanced Systems for Automation and Control) Research Group
        </NavLink>
      </h5>
      <p>Universitat Autónoma de Barcelona, Spain</p>
      <br />
      <h5>
        <NavLink
          to='http://win.uab.cat/'
          title='WIN'
          rel='noopener noreferrer'
          target='_blank'
        >
          WIN (Wireless Information Networking) Research Group
        </NavLink>
      </h5>
      <p>Universitat Autónoma de Barcelona, Spain</p>
      <br />
      <p />
      <p>
        <NavLink
          rel='noopener noreferrer'
          target='_blank'
          title='SUPPRESS'
          to='https://www.unileon.es/grupos-investigacion/detalles-grupo.php?id=3&grp=414'
        >
          <img src={uleonLogo} className='img-fluid' alt='León' />
        </NavLink>
      </p>
      <h5>
        <NavLink
          rel='noopener noreferrer'
          target='_blank'
          title='SUPPRESS'
          to='https://www.unileon.es/grupos-investigacion/detalles-grupo.php?id=3&grp=414'
        >
          SUPPRESS Research Group
        </NavLink>
      </h5>
      <p>University of León, Spain</p>
      <br />
    </>
  )
}

export default PartnersNetworks
