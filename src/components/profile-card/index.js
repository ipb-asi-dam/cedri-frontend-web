import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

function ProfileCard ({ classes, data, navigate }) {
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={navigate(data)}>
        <CardMedia
          component='img'
          className={classes.media}
          image={data.image}
          height='140'
          title={`${data.title} profile photo`}
        />
        <CardContent>
          <Typography
            className={classes.cardTitle}
            component='h2'
            gutterBottom
            variant='h6'
          >
            {data.title}
          </Typography>
          <Typography component='p'>
            {data.subtitle}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

ProfileCard.defaultProps = {
  classes: {}
}

ProfileCard.propTypes = {
  classes: PropTypes.object,
  data: PropTypes.object.isRequired,
  navigate: PropTypes.func.isRequired
}

export default ProfileCard
