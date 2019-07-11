import React from 'react'

import { getImageURL } from 'utils'
import Pagination from 'layouts/main/components/pagination'

function Software () {
  return (
    <Pagination
      apiEntrypoint='/public/software'
      render={(s, index, arr) => (
        <React.Fragment key={s.id}>
          {index !== 0 && <br />}
          {s.file && (
            <>
              <img alt='' src={getImageURL(s.file)} />
              <p />
            </>
          )}
          <h2>{s.title}</h2>
          <p>{s.description}</p>
          <br />
          {(index + 1) < arr.length && <hr />}
        </React.Fragment>
      )}
    />
  )
}

export default Software
