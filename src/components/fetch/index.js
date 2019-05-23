/* eslint-disable react/prop-types */
/* eslint-disable react-hooks/rules-of-hooks */
import React, { useEffect, useState } from 'react'
import LinearProgress from '@material-ui/core/LinearProgress'

const Fetch = (endpoint) => (Component) => (props) => {
  const [data, setData] = useState(props.defaultValue || null)
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

export default Fetch
