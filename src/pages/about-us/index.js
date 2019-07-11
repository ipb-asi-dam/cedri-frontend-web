import React from 'react'
import Container from 'layouts/main/components/container'

import useStyles from './styles'

export default (props) => {
  const classes = useStyles()

  return (
    <Container
      classes={classes}
      rootPath='/about-us'
      {...props}
    />
  )
}
