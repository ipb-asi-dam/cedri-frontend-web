import React, { useState } from 'react'

import Project from 'pages/research-innovation/components/project'

import Pagination from 'layouts/main/components/pagination'

export default () => {
  const [type, setType] = useState('international')

  const onTypeChange = (e) => setType(e.target.value)

  return (
    <Pagination
      apiEntrypoint={`/public/projects/${type}`}
      render={(proj) => <Project key={proj.id} {...proj} />}
    >
      <select defaultValue={type} onChange={onTypeChange}>
        <option value='international'>International</option>
        <option value='national'>National</option>
        <option value='other'>Other</option>
      </select>
      {/* !isFetching && apiData.elements.map(proj =>  */}
    </Pagination>
  )
}
