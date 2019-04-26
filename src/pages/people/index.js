import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import Card from '@material-ui/core/Card'
import CardActionArea from '@material-ui/core/CardActionArea'
import CardContent from '@material-ui/core/CardContent'
import CardMedia from '@material-ui/core/CardMedia'
import Grid from '@material-ui/core/Grid'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  card: {
    width: 220
  },
  cardTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  media: {
    height: 200
  }
}

const people = [
  { id: 1, name: 'Ângela Ferreira', areaOfStudy: 'Electrical Engineering' },
  { id: 2, name: 'Ana Isabel Pereira', areaOfStudy: 'Mathematics' },
  { id: 3, name: 'Fernando Monteiro', areaOfStudy: 'Electrical Engineering' },
  { id: 4, name: 'Florbela Fernandes', areaOfStudy: 'Mathematics' },
  { id: 5, name: 'José Barbosa', areaOfStudy: 'Electrical Engineering' },
  { id: 6, name: 'José Gonçalves', areaOfStudy: 'Electrical Engineering' }
]

function MediaCard ({ classes, history, location, ...props }) {
  const navigate = useCallback((id) => () => {
    history.push(`${location.pathname}/${id}`)
  })

  return (
    <Grid container spacing={24}>
      {people.map(({ id, name, areaOfStudy }) => (
        <Grid
          key={id}
          item
          container
          justify='center'
          xs={12}
          sm={4}
          md={3}
          xl={2}
        >
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
        </Grid>
      ))}
    </Grid>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired
}

export default withStyles(styles)(MediaCard)
