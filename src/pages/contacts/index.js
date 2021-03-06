import React from 'react'

import Grid from '@material-ui/core/Grid'

import { bus as BusIcon } from 'react-icons-kit/fa/bus'
import { plane as PlaneIcon } from 'react-icons-kit/fa/plane'
import { facebook as FacebookIcon } from 'react-icons-kit/fa/facebook'
import { twitter as TwitterIcon } from 'react-icons-kit/fa/twitter'
import { youtube as YouTubeIcon } from 'react-icons-kit/fa/youtube'

import Icon from 'components/icon'
import Typography from '@material-ui/core/Typography'

import logoIPB from 'assets/images/ipb.png'
import logoCeDRI from 'assets/images/logo_rodape.png'

function Contacts () {
  return (
    <>
      <br />

      <Grid container justify='space-between'>
        <Grid item xs={12} md={6}>
          <img alt='' src={logoCeDRI} />
          <br />
          <p>
            Centro de Investigação em Digitalização e Robótica Inteligente<br />
            Escola Superior de Tecnologia e Gestão<br />
            Instituto Politécnico de Bragança<br />
            Campus de Santa Apolónia<br />
            5300-253 Bragança<br />
            Portugal
          </p>
          <p />

        </Grid>
        <Grid item xs={12} md={6}>
          <a
            href='http://www.ipb.pt'
            rel='noopener noreferrer'
            target='_blank'
            title='Instituto Politécnico de Bragança'
          >
            <img alt='' src={logoIPB} />
          </a>
          <br />
          <p>phone: (+351)273303200</p>
          <p>e-mail: <a href='mailto:cedri@ipb.pt'>cedri@ipb.pt</a></p>
          <p>
            <a href='https://www.facebook.com/cedri.ipb.pt/' rel='noopener noreferrer' target='_blank' title='Facebook'>
              <Icon icon={FacebookIcon} />
            </a>&nbsp;&nbsp;
            <a href='https://twitter.com/cedri_ipb' rel='noopener noreferrer' target='_blank' title='Twitter'>
              <Icon icon={TwitterIcon} />
            </a>&nbsp;&nbsp;
            <a href='https://www.youtube.com/channel/UC-gSrKGgTiir3YlpqeBM3dg' rel='noopener noreferrer' title='Youtube' target='_blank'>
              <Icon icon={YouTubeIcon} />
            </a>
          </p>
        </Grid>
      </Grid>

      <br />

      <Typography variant='h2'>
        Directions
      </Typography>

      <br />

      <Grid container justify='space-between'>
        <Grid item xs={12} md={6}>
          <p><Icon icon={PlaneIcon} /> By plane</p>
          <p>
            The nearest airport is <a href='https://www.aeroportoporto.pt/' rel='noopener noreferrer' target='_blank'>Porto Airport (OPO)</a> (211 Km).
          </p>
          <p>
            <a href='http://www.aeropuertomadrid-barajas.com' rel='noopener noreferrer' target='_blank'>Madrid - Barajas Airport (MAD)</a> (373 Km) is another convenient option.
          </p>
          <p>
            Another possibility is the <a href='https://www.aeroportolisboa.pt/pt/lis/home' rel='noopener noreferrer' target='_blank'>Lisbon Airport (LIS)</a> (477 Km).
          </p>
          <p>
            Airline Connection Cascais (Lisbon) - Bragança: Daily flights operated by <a href='https://bookings.sevenair.com' rel='noopener noreferrer' target='_blank'>AeroVip</a>
          </p>
        </Grid>
        <Grid item xs={12} md={6}>
          <p>
            <Icon icon={BusIcon} /> By bus
          </p>
          <p>
            In case you decide to travel by bus to Bragança, here you can find information about the companies that provide bus travel services:
          </p>
          <p>Rede Expressos</p>
          <p>
            Schedules available at: <a href='https://www.rede-expressos.pt/' rel='noopener noreferrer' target='_blank'>www.rede-expressos.pt</a>
          </p>
          <p>Tel.: <a href='tel:+351217524524'>+351 217 524 524</a></p>
          <p>Santos/Rodonorte Schedules available at: <a href='http://www.santosviagensturismo.pt' rel='noopener noreferrer'
            target='_blank'>www.santosviagensturismo.pt</a>
          </p>
          <p>Tel: <a href='tel:+351259340710'>+351 259 340 710</a></p>
          <br />
        </Grid>
      </Grid>
      <Grid item xs={12}>
        <iframe
          allowFullScreen
          src='https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d2501.2410318346!2d-6.769023011100284!3d41.79612539050923!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0xd3a4a1f1fcd5a59%3A0x107495b20d9bde77!2sEscola+Superior+de+Tecnologia+e+Gest%C3%A3o!5e0!3m2!1spt-PT!2spt!4v1522696575815'
          style={{
            border: 0,
            height: '-webkit-fill-available',
            width: '100%'
          }}
          title='Estig'
        />
      </Grid>
    </>
  )
}

Contacts.propTypes = {
}

export default Contacts
