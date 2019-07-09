import React from 'react'

import Typography from '@material-ui/core/Typography'

import Profile from 'layouts/main/components/profile'

import collaborators from 'src/data/people/collaborators'
import integratedMembers from 'src/data/people/integrated-members'
import researchFellowships from 'src/data/people/research-fellowships'
import visitingResearchers from 'src/data/people/visiting-researchers'

const people = {
  'Integrated Members': integratedMembers,
  'Research Fellowships': researchFellowships,
  'Collaborators': collaborators,
  'Visiting Researchers': visitingResearchers
}

function People () {
  return (
    <>
      {Object
        .entries(people)
        .map(([k, v]) => (
          <React.Fragment key={k}>
            <Typography component='h1' variant='h1'>
              {k}
            </Typography>
            <br />
            <Profile profileData={v} />
            <br />
            <br />
          </React.Fragment>
        ))}
    </>
  )
}

export default People
