import React from 'react'
import Typography from '@material-ui/core/Typography'
import useStyles from './styles'
import Pagination from 'layouts/main/components/pagination'

function Patents () {
  const classes = useStyles()

  return (
    <Pagination
      apiEntrypoint='/public/patents'
      render={(p, index, arr) => (
        <React.Fragment key={p.id}>
          {index !== 0 && <br />}
          <Typography variant='body1'>
            <strong>Title:</strong> {p.title}
          </Typography>
          <p><strong>Authors:</strong> {p.authors}</p>
          <div><strong>Patent Number(s):</strong> <span className={classes.htmlContainer} dangerouslySetInnerHTML={{ __html: p.patentNumbersHtml }} /></div>
          <br />
          {(index + 1) < arr.length && <hr />}
        </React.Fragment>
      )}
    />
  )
}

export default Patents
