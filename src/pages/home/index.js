import React from 'react'
import { Link } from 'react-router-dom'

// import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import makeStyles from '@material-ui/core/styles/makeStyles'

import CardMedia from 'layouts/main/components/card-media'
// import News from 'layouts/main/components/news'

import iecpsLogo from 'assets/images/iecps_botao.png'
import isdaLogo from 'assets/images/isda_botao.png'
import icrsLogo from 'assets/images/icrs_botao.png'
import msodsLogo from 'assets/images/msods_botao.png'

import { useApiData } from 'utils/hooks'

const researchTopics = [
  {
    logo: iecpsLogo,
    url: '/r&d/researchtopics/iecps'
  },
  {
    logo: isdaLogo,
    url: '/r&d/researchtopics/isda'
  },
  {
    logo: icrsLogo,
    url: '/r&d/researchtopics/icrs'
  },
  {
    logo: msodsLogo,
    url: '/r&d/researchtopics/msods'
  }
]

const useStyles = makeStyles((theme) => ({
  researchTopicContainer: {
    '&:not(:last-child)': {
      marginRight: 10
    }
  },
  researchTopicImage: {
    backgroundColor: 'lightgray',
    width: 250
  }
}))

function HomePage () {
  const classes = useStyles()
  const [{ apiData }] = useApiData('/public/news?page=1&limit=3')

  return (
    <>
      <div>
        <div style={{ display: 'flex', justifyContent: 'space-between' }}>
          <Typography component='h2' variant='h2'>
            Latest news
          </Typography>
          <Typography
            color='primary'
            component={Link}
            style={{
              cursor: 'pointer',
              textDecoration: 'none'
            }}
            to='/communication/news'
            variant='h5'
          >
            See more
          </Typography>
        </div>
        <div style={{
          display: 'flex',
          minHeight: 205,
          overflowX: 'auto',
          paddingBottom: 12,
          paddingTop: 12,
          paddingRight: 24
        }}>
          {apiData.elements.map(i => <CardMedia key={i.id} content={i} />)}
        </div>
      </div>

      <hr style={{ margin: '72px auto', width: '75%' }} />

      <div>
        <Typography component='h2' variant='h2'>
          Research topics
        </Typography>
        <div style={{
          display: 'flex',
          overflowX: 'auto',
          paddingBottom: 12,
          paddingTop: 12,
          paddingRight: 24
        }}>
          {researchTopics.map((rt) => (
            <div className={classes.researchTopicContainer} key={rt.logo}>
              <Link to={rt.url}>
                <img alt='' className={classes.researchTopicImage} src={rt.logo} />
              </Link>
            </div>
          ))}
        </div>
      </div>
    </>
  )
}

HomePage.propTypes = {

}

export default HomePage
