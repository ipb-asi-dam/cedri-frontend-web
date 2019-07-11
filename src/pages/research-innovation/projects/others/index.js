import React from 'react'

import Pagination from 'layouts/main/components/pagination'
import Project from 'pages/research-innovation/components/project'

export default () => (
  <Pagination
    apiEntrypoint={`/public/projects/other`}
    render={(proj, index, arr) => (
      <Project
        isLast={(index + 1) < arr.length}
        key={proj.id}
        {...proj}
      />
    )}
  />
)
