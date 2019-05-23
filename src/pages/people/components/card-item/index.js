import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

function CardItem ({ classes, id, name, navigate, areaOfStudy }) {
  return (
    <Card className={classes.card}>
      <CardActionArea onClick={navigate(id)}>
        <CardMedia
          className={classes.media}
          image='//via.placeholder.com/220x200'
          title={`${name} photo`}
        />
        <CardContent>
          <Typography
            className={classes.cardTitle}
            component='h2'
            gutterBottom
            variant='h6'
          >
            {name}
          </Typography>
          <Typography component='p'>
            {areaOfStudy}
          </Typography>
        </CardContent>
      </CardActionArea>
    </Card>
  )
}

CardItem.propTypes = {
  classes: PropTypes.object.isRequired,
  id: PropTypes.number.isRequired,
  name: PropTypes.string.isRequired,
  navigate: PropTypes.func.isRequired,
  areaOfStudy: PropTypes.string.isRequired
}

export default CardItem
