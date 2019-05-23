import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'

// Material UI components
import Grid from '@material-ui/core/Grid'
import Paper from '@material-ui/core/Paper'
import Typography from '@material-ui/core/Typography'
import withStyles from '@material-ui/core/styles/withStyles'
import TableRow from '@material-ui/core/TableRow'

// custom components
import Table from 'components/table'
import TableCell from 'components/table/table-cell'

const header = [
  { id: 'title', label: 'Title' },
  { id: 'author_name', label: 'Author' },
  { id: 'type', label: 'Type' },
  { id: 'created_at', label: 'Date' }
]

function renderRow ({
  id,
  author_id: authorId,
  author_name: authorName,
  created_at: createdAt,
  title,
  type
}) {
  const typeSlugged = type.split(' ').join('-')
  return (
    <TableRow key={id}>
      <TableCell
        dataType='link'
        linkTo={`/${typeSlugged}/${id}`}
        value={title}
      />
      <TableCell
        dataType='link'
        linkTo={`/authors/${authorId}`}
        value={authorName}
      />
      <TableCell value={type} />
      <TableCell dataType='date' value={createdAt} />
    </TableRow>
  )
}

renderRow.propTypes = {
  id: PropTypes.number,
  author_id: PropTypes.number,
  author_name: PropTypes.string,
  created_at: PropTypes.number,
  title: PropTypes.string,
  type: PropTypes.string
}

const styles = theme => ({
  root: {
    ...theme.mixins.gutters(),
    paddingTop: theme.spacing(2),
    paddingBottom: theme.spacing(2)
  },
  paper: {
    borderRadius: 4
  }
})

function Dashboard ({ classes }) {
  const [tableData, setData] = useState([])

  useEffect(() => {
    import('src/data/fake-data.json')
      .then((data) => {
        setData(data.default)
      })
  }, [])

  return (
    <Grid className={classes.root} container spacing={3}>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography component='p'>
            Blá blá blá
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12} sm={6}>
        <Paper className={classes.paper}>
          <Typography component='p'>
            Blá blá blá
          </Typography>
        </Paper>
      </Grid>
      <Grid item xs={12}>
        <Table
          header={header}
          renderRow={renderRow}
          rowsData={tableData}
        />
      </Grid>
    </Grid>
  )
}

Dashboard.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Dashboard)
