import React, { useState } from 'react'
import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'

import ProfileCard from 'components/profile-card'

function Profile ({ profileData }) {
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
      <Dialog open={isOpen} onClose={toggleModal}>
        <DialogContent>
          <Grid container justify='center'>
            <img alt='Profile detail' src={data.image} style={{ borderRadius: '50%' }} />
            <data.bio />
          </Grid>
        </DialogContent>
      </Dialog>

      <Grid container justify='space-around'>
        {profileData.map(item => (
          <Grid
            key={item.title}
            item
            xs={12}
            sm={4}
            md={3}
            xl={2}
          >
            <ProfileCard navigate={openModal} data={item} />
          </Grid>
        ))}
      </Grid>
    </>
  )
}

Profile.propTypes = {
  profileData: PropTypes.array.isRequired
}

export default Profile
