import React from 'react'
import PropTypes from 'prop-types'

import Card from '@material-ui/core/Card'
import CardContent from '@material-ui/core/CardContent'
import MuiCardMedia from '@material-ui/core/CardMedia'
import Typography from '@material-ui/core/Typography'

import { formatDateMedia, getImageURL } from 'utils'

import useStyles from './styles'

function CardMedia ({ content, ...props }) {
  const classes = useStyles()

  return (
    <div className={classes.container} {...props}>
      <Card className={classes.card}>
        {content.file && (
          <MuiCardMedia
            className={classes.cardImage}
            component='img'
            src={getImageURL(content.file)}
          />
        )}
        <CardContent className={classes.titleContainer}>
          <Typography
            color='textSecondary'
            component='p'
            paragraph
            variant='subtitle2'
          >
            {formatDateMedia(content.createdAt)}
          </Typography>
          <div>
            <Typography
              className={classes.title}
              component='h2'
              variant='h4'
            >
              {content.title}
            </Typography>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}

CardMedia.propTypes = {
  content: PropTypes.object.isRequired
}

export default CardMedia
