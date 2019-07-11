import React, { useContext, useState } from 'react'
import PropTypes from 'prop-types'

import Dialog from '@material-ui/core/Dialog'
import DialogContent from '@material-ui/core/DialogContent'
import Grid from '@material-ui/core/Grid'

import ProfileCard from 'components/profile-card'
import { ThemeContext } from 'contexts/theme'

function Profile ({ profileData }) {
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
      {data.image && data.bio && (
        <Dialog open={isOpen} onClose={toggleModal}>
          <DialogContent>
            <Grid container justify='center'>
              <img
                alt='Profile detail'
                src={data.image}
                style={{ borderRadius: '50%' }}
              />
              <data.bio />
            </Grid>
          </DialogContent>
        </Dialog>
      )}

      <Grid container justify={isMobile ? 'center' : 'flex-start'} spacing={4}>
        {profileData.map(item => (
          <Grid item key={item.title}>
            <ProfileCard data={item} navigate={openModal} />
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
