import React, { Component } from 'react'
import t from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableCell from '@material-ui/core/TableCell'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import withStyles from '@material-ui/core/styles/withStyles'

import TableHead from './header'
import TablePaginationActions from './pagination'

import { getSorting, stableSort } from 'utils/sort'
import MenuActions from './menu-actions'

const styles = theme => ({
  root: {
    width: '100%'
  },
  table: {
    minWidth: 500
  },
  tableRow: {
    cursor: 'pointer'
  },
  tableWrapper: {
    overflowX: 'auto'
  }
})

class CustomTable extends Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 5,
    order: 'asc',
    orderBy: 'calories'
  }

  componentDidMount () {
    this.setState({ rows: this.props.rows })
  }

  handleRequestSort = (property) => {
    const orderBy = property
    let order = 'desc'

    if (this.state.orderBy === property && this.state.order === 'desc') {
      order = 'asc'
    }

    this.setState({ order, orderBy })
  };

  handleChangePage = (page) => () => this.setState({ page })

  handleChangeRowsPerPage = event => {
    this.setState({ page: 0, rowsPerPage: event.target.value })
  }

  render () {
    const { header, classes } = this.props
    const { order, orderBy, page, rows, rowsPerPage } = this.state
    const emptyRows = rowsPerPage - Math.min(rowsPerPage, rows.length - page * rowsPerPage)

    return (
      <Paper className={classes.root}>
        <div className={classes.tableWrapper}>
          <Table className={classes.table}>
            <TableHead
              sort
              data={header}
              order={this.state.order}
              orderBy={this.state.orderBy}
              onRequestSort={this.handleRequestSort}
            />
            <TableBody>
              {stableSort(rows, getSorting(order, orderBy))
                .slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage)
                .map((row, id) => (
                  <TableRow className={classes.tableRow} hover key={id}>
                    <TableCell component='th' scope='row'>
                      {row.name}
                    </TableCell>
                    <TableCell align='right'>{row.calories}</TableCell>
                    <TableCell align='right'>{row.fat}</TableCell>
                    <TableCell align='center' style={{ width: 115 }} >
                      <MenuActions />
                    </TableCell>
                  </TableRow>
                ))}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            <TableFooter>
              <TableRow>
                <TablePagination
                  rowsPerPageOptions={[5, 10, 25]}
                  colSpan={3}
                  count={rows.length}
                  rowsPerPage={rowsPerPage}
                  page={page}
                  SelectProps={{ native: true }}
                  onChangePage={this.handleChangePage}
                  onChangeRowsPerPage={this.handleChangeRowsPerPage}
                  ActionsComponent={TablePaginationActions}
                />
              </TableRow>
            </TableFooter>
          </Table>
        </div>
      </Paper>
    )
  }
}

CustomTable.propTypes = {
  classes: t.object.isRequired,
  header: t.array,
  rows: t.array
}

export default withStyles(styles)(CustomTable)
