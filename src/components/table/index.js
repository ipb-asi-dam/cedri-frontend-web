import React, { Component } from 'react'
import t from 'prop-types'
import Paper from '@material-ui/core/Paper'
import Table from '@material-ui/core/Table'
import TableBody from '@material-ui/core/TableBody'
import TableFooter from '@material-ui/core/TableFooter'
import TablePagination from '@material-ui/core/TablePagination'
import TableRow from '@material-ui/core/TableRow'
import withStyles from '@material-ui/core/styles/withStyles'

import TableCell from './table-cell'
import TableHead from './header'
import TablePaginationActions from './pagination'
// import MenuActions from './menu-actions'

import { getSorting, stableSort } from 'utils/sort'

const styles = {
  root: {
    borderRadius: 4,
    width: '100%'
  },
  table: {
    minWidth: 500
  },
  tableWrapper: {
    overflowX: 'auto'
  }
}

class CustomTable extends Component {
  state = {
    rows: [],
    page: 0,
    rowsPerPage: 5,
    order: 'asc',
    orderBy: null
  }

  componentDidMount () {
    this.setState({ rows: this.props.rowsData })
  }

  componentWillReceiveProps (props) {
    this.setState({ rows: props.rowsData })
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
    this.setState({ page: 0, rowsPerPage: +event.target.value })
  }

  render () {
    const { classes, header, paginate, renderRow } = this.props
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
                .map(renderRow)}
              {emptyRows > 0 && (
                <TableRow style={{ height: 48 * emptyRows }}>
                  <TableCell colSpan={6} />
                </TableRow>
              )}
            </TableBody>
            {paginate && (
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
            )}
          </Table>
        </div>
      </Paper>
    )
  }
}

CustomTable.defaultProps = {
  paginate: false
}

CustomTable.propTypes = {
  classes: t.object.isRequired,
  header: t.array,
  paginate: t.bool,
  renderRow: t.func.isRequired,
  rowsData: t.array
}

export default withStyles(styles)(CustomTable)
