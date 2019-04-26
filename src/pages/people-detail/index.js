import React, { useCallback, useEffect, useState } from 'react'
import t from 'prop-types'
import LinearProgress from '@material-ui/core/LinearProgress'
import ArrowBack from '@material-ui/icons/ArrowBack'

import Fab from 'components/fab'

const Fetch = (endpoint) => (Component) => (props) => {
  const [data, setData] = useState()
  const [loading, setState] = useState(true)

  useEffect(() => {
    setTimeout(() => {
      setData(endpoint)
      setState(false)
    }, 2500)
  }, [])

  return (
    <>
      {loading && <LinearProgress color='secondary' />}
      {!loading && <Component data={data} {...props} />}
    </>
  )
}

function PeopleDetail ({ data, history }) {
  const goBack = useCallback(() => history.goBack())

  return (
    <>
      <Fab
        InnerIcon={ArrowBack}
        onClick={goBack}
      />
      <div>
        <h1>{data}</h1>
      </div>
    </>
  )
}

PeopleDetail.propTypes = {
  data: t.string.isRequired,
  history: t.object.isRequired
}

export default Fetch('/endpoint')(PeopleDetail)
