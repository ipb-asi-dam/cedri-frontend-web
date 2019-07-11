import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

import axios from 'config/axios'

import CircularProgress from '@material-ui/core/CircularProgress'
import Typography from '@material-ui/core/Typography'

import LoadMore from 'components/load-more'

function Pagination ({ apiEntrypoint, children, render }) {
  const [page, setPage] = useState(1)
  const [isFetching, setIsFetching] = useState(false)
  const [isError, setIsError] = useState(false)
  const [apiData, setApiData] = useState({
    countTotal: 0,
    elements: [],
    pagesTotal: 0
  })

  useEffect(() => {
    (async () => {
      try {
        setIsFetching(true)
        const response = await axios.get(`${apiEntrypoint}?page=${page}&limit=5`)
        setApiData((apiData) => ({
          ...response.data.data,
          elements: [
            ...apiData.elements,
            ...response.data.data.elements
          ]
        }))
      } catch (error) {
        setIsError(true)
      } finally {
        setIsFetching(false)
      }
    })()
  }, [apiEntrypoint, page])

  function paginate () {
    setPage(page + 1)
  }

  return (
    <>
      {children}
      {!isFetching && !isError && apiData.elements.map(render)}
      <div style={{
        display: 'flex',
        justifyContent: 'center',
        marginBottom: 16,
        width: '100%'
      }}>
        {isError && <p>Server error</p>}
        {isFetching && !isError && <CircularProgress size={42} />}
        {!isFetching && !isError && !apiData.elements.length && (
          <Typography component='h3' variant='h3'>
            There is no register :/
          </Typography>
        )}
        {!isFetching && !isError && (page < apiData.pagesTotal) && <LoadMore onClick={paginate} />}
      </div>
    </>
  )
}

Pagination.propTypes = {
  apiEntrypoint: PropTypes.string.isRequired,
  children: PropTypes.node,
  render: PropTypes.func
}

export default Pagination
