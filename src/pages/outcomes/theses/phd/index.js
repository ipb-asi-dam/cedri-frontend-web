import React from 'react'
import Typography from '@material-ui/core/Typography'
import { formatYear } from 'utils'
import Pagination from 'layouts/main/components/pagination'

function ThesesPhD () {
  return (
    <div>
      <Pagination
        apiEntrypoint='/public/theses/phd'
        render={(p) => (
          <React.Fragment key={p.id}>
            <Typography variant='body1'>
              {`${p.student}. ${p.title}. ${`Doutorado em ${p.grade}`}. Supervisor: ${p.supervisors}. ${p.institute}. ${formatYear(p.date)}.`}
            </Typography>
            <br />
          </React.Fragment>
        )}
      />
    </div>
  )
}

export default ThesesPhD
