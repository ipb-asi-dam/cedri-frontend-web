import React from 'react'
import Typography from '@material-ui/core/Typography'
import { formatYear } from 'utils'
import Pagination from 'layouts/main/components/pagination'

function ThesesMsc () {
  return (
    <div>
      <Pagination
        apiEntrypoint='/public/theses/msc'
        render={(p) => (
          <React.Fragment key={p.id}>
            <Typography variant='body1'>
              {`${p.student}. ${p.title}. ${`Mestrado em ${p.grade}`}. Supervisor: ${p.supervisors}. ${p.institute}. ${formatYear(p.date)}.`}
            </Typography>
            <br />
          </React.Fragment>
        )}
      />
    </div>
  )
}

export default ThesesMsc
