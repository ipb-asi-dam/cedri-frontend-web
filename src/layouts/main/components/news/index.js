import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'

import CardMedia from '../card-media'
import { ThemeContext } from 'contexts/theme'
import { getImageURL } from 'utils'

function News ({ newsData }) {
  const { isMobile } = useContext(ThemeContext)

  const [data, setData] = useState({})
  const [isOpen, setModalVisibility] = useState(false)

  function toggleModal () {
    setModalVisibility(!isOpen)
  }

  function openModal (data) {
    return () => {
      setData(data)
      toggleModal()
    }
  }

  return (
    <>
      <Dialog fullScreen={isMobile} open={isOpen} onClose={toggleModal}>
        <DialogContent>
          <Grid container justify='center'>
            <img alt='' src={getImageURL(data.file)} style={{ width: '100%' }} />
            <div dangerouslySetInnerHTML={{ __html: data.descriptionHtml }} />
          </Grid>
        </DialogContent>
      </Dialog>

      <Grid container justify={isMobile ? 'center' : 'flex-start'} spacing={4}>
        {newsData.map(item => (
          <Grid item key={item.id} onClick={openModal(item)}>
            <CardMedia content={item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

News.propTypes = {
  newsData: PropTypes.array.isRequired
}

export default News
