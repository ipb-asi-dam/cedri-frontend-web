import React from 'react'
import PropTypes from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
/*
import Icon from 'components/icon'
import { facebook as FacebookIcon } from 'react-icons-kit/fa/facebook'
import { twitter as TwitterIcon } from 'react-icons-kit/fa/twitter'
import { youtube as YouTubeIcon } from 'react-icons-kit/fa/youtube'
import { ic_mail as EmailIcon } from 'react-icons-kit/md/ic_mail'
import { ic_smartphone as PhoneIcon } from 'react-icons-kit/md/ic_smartphone'
*/

// assets
import IPBLogo from 'assets/ipb.png'
import FooterLogo from 'assets/logo_rodape.png'

import styles from './styles'

function Footer ({ classes }) {
  return (
    <footer className={classes.footer}>
      <div className={classes.firstLine}>
        <div>
          <img alt='CeDRI' src={FooterLogo} />
        </div>
        <div>
          <img alt='IPB' src={IPBLogo} />
        </div>
      </div>
      {/* <div className={classes.secondLine}>
        <div className='contacts'>
          <div>
            <a href='tel:+351273303200'>
              <Icon icon={PhoneIcon} /> (+351) 273-303-200
            </a>
          </div>
          <div>
            <a href='mailto:cedri@ipb.pt'>
              <Icon icon={EmailIcon} /> cedri@ipb.pt
            </a>
          </div>
        </div>
        <div className='social'>
          <a className={classes.icon} href='//facebook.com/cedri.ipb.pt' target='__blank' rel='noopener'>
            <Icon icon={FacebookIcon} />
          </a>
          <a className={classes.icon} href='//twitter.com/cedri_ipb' target='__blank' rel='noopener'>
            <Icon icon={TwitterIcon} />
          </a>
          <a className={classes.icon} href='//youtube.com/channel/UC-gSrKGgTiir3YlpqeBM3dg' target='__blank' rel='noopener'>
            <Icon icon={YouTubeIcon} />
          </a>
        </div>
      </div> */}
    </footer>
  )
}

Footer.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Footer)
