import React from 'react'
import Typography from '@material-ui/core/Typography'
import { formatYear } from 'utils'
import Pagination from 'layouts/main/components/pagination'

export default () => (
  <Pagination
    apiEntrypoint='/public/publications/bc'
    render={(p) => (
      <React.Fragment key={p.id}>
        <Typography variant='body1'>
          {p.authors} ({formatYear(p.date)}). <a href={p.url} rel='noopener noreferrer' target='_blank'>{p.title}</a>. {p.sourceTitle}. {p.volume && p.volume} {p.issue && `(${p.issue}),`} {p.artNumber && ` ${p.artNumber}.`} {p.startPage && `${p.startPage} - ${p.endPage}.`}
        </Typography>
        <br />
      </React.Fragment>
    )}
  />
)
