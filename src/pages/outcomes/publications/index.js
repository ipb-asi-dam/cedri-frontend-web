import React, { useState } from 'react'
import PropTypes from 'prop-types'

import CircularProgress from '@material-ui/core/CircularProgress'
import TextField from 'components/text-field'

import { formatYear } from 'utils'
import { useApiData } from 'utils/hooks'

function Publications ({ location }) {
  const [type, setType] = useState('j')
  const [entrypoint] = useState(`/public/publications/${type}?page=1&limit=5`)
  const [{ apiData, isFetching }, setApiEntrypoint] = useApiData(entrypoint, '')

  const onChangeType = (e) => {
    const { value } = e.target
    setType(value)
    setApiEntrypoint(`/public/publications/${value}?page=1&limit=5`)
  }

  return (
    <div>
      <div>
        <TextField
          label='Type'
          onChange={onChangeType}
          select
          SelectProps={{ native: true }}
          shrink
          value={type}
        >
          <option value='b'>Book</option>
          <option value='bc'>Book Chapter</option>
          <option value='e'>Editorial</option>
          <option value='j'>Journal</option>
          <option value='p'>Proceeding</option>
        </TextField>
      </div>
      <div>
        {isFetching && <CircularProgress size={36} />}
        {!isFetching && !apiData.elements.length && <h1>There is no register :/</h1>}
        {!isFetching && apiData.elements.map((p) => (
          <p key={p.id}>
            {p.authors} ({formatYear(p.date)}). <a href={p.url} rel='noopener noreferrer' target='_blank'>{p.title}</a>. {p.sourceTitle}. {p.volume && p.volume} {p.issue && `(${p.issue}),`} {p.artNumber && ` ${p.artNumber}.`} {p.startPage && `${p.startPage} - ${p.endPage}.`}
          </p>
        ))}
      </div>
    </div>
  )
}

Publications.propTypes = {
  location: PropTypes.object.isRequired
}

export default Publications
