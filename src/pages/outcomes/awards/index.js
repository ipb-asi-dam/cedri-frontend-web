import React from 'react'

import { formatMonth } from 'utils'
import Pagination from 'layouts/main/components/pagination'

export default () => (
  <Pagination
    apiEntrypoint='/public/awards'
    render={(a) => (
      <React.Fragment key={a.id}>
        <p>
          {`${a.title}, ${a.event}, ${(a.address ? (a.address + ', ') : '')}${a.prizeWinners}, ${formatMonth(a.date)}.`}
        </p>
      </React.Fragment>
    )}
  />
)
