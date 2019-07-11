import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import useStyles from './styles'

function ProfileCard ({ data, navigate }) {
  const classes = useStyles()

  return (
    <Card className={classes.card}>
      <CardActionArea onClick={navigate(data)}>
        {data.image && <CardMedia
          className={classes.media}
          component='img'
          src={data.image}
          title={`${data.title} profile photo`}
        />}
        <CardContent>
          <Typography
            className={classes.cardTitle}
            component='h2'
            gutterBottom
            variant='h6'
          >
            {data.title}
          </Typography>
          <Typography align='left' component='p'>
            {data.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

ProfileCard.propTypes = {
  data: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
}

export default ProfileCard
