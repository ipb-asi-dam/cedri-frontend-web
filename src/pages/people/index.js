import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import compose from 'recompose/compose'

import Grid from '@material-ui/core/Grid'
import List from '@material-ui/core/List'
import withStyles from '@material-ui/core/styles/withStyles'
import withWidth from '@material-ui/core/withWidth'
import Zoom from '@material-ui/core/Zoom'

import CardItem from './components/card-item'
import MobileItem from './components/mobile-item'

import styles from './styles'

const people = [
  { id: 1, name: 'Ângela Ferreira', areaOfStudy: 'Electrical Engineering' },
  { id: 2, name: 'Ana Isabel Pereira', areaOfStudy: 'Mathematics' },
  { id: 3, name: 'Fernando Monteiro', areaOfStudy: 'Electrical Engineering' },
  { id: 4, name: 'Florbela Fernandes', areaOfStudy: 'Mathematics' },
  { id: 5, name: 'José Barbosa', areaOfStudy: 'Electrical Engineering' },
  { id: 6, name: 'José Gonçalves', areaOfStudy: 'Electrical Engineering' }
]

function MediaCard ({ classes, history, location, width }) {
  const navigate = useCallback((id) => () => {
    history.push(`${location.pathname}/${id}`)
  }, [history, location.pathname])

  const isMobile = width === 'xs'
  const props = isMobile ? { className: classes.root } : {}
  const Wrapper = isMobile ? List : React.Fragment

  return (
    <Grid container justify={isMobile ? 'center' : 'flex-start'} spacing={3}>
      <Wrapper {...props}>
        {people.map((person, index) => (
          <Zoom key={person.id} in style={{ transitionDelay: `${index * 80}ms` }}>
            {isMobile ? (
              <MobileItem
                classes={classes}
                navigate={navigate}
                {...person}
              />
            ) : (
              <Grid
                item
                container
                justify='center'
                xs={12}
                sm={4}
                md={3}
                xl={2}
              >
                <CardItem classes={classes} navigate={navigate} {...person} />
              </Grid>
            )}
          </Zoom>
        ))}
      </Wrapper>
    </Grid>
  )
}

MediaCard.propTypes = {
  classes: PropTypes.object.isRequired,
  history: PropTypes.object.isRequired,
  location: PropTypes.object.isRequired,
  width: PropTypes.string.isRequired
}

export default compose(
  withStyles(styles),
  withWidth()
)(MediaCard)
