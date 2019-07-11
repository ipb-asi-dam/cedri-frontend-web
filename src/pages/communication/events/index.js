import React from 'react'

import { formatDateCommunication } from 'utils'
import Pagination from 'layouts/main/components/pagination'

export default () => (
  <Pagination
    apiEntrypoint='/public/events'
    render={(item, index, arr) => (
      <React.Fragment key={item.id}>
        <h3>{item.title}</h3>
        <p>{formatDateCommunication(item.startDate, item.endDate)}</p>
        <p>{item.address}</p>
        <div dangerouslySetInnerHTML={{ __html: item.linksHtml }} />
        {(index + 1) < arr.length && <hr />}
      </React.Fragment>
    )}
  />
)
