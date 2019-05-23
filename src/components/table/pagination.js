import React, { useCallback } from 'react'
import PropTypes from 'prop-types'
import { withStyles } from '@material-ui/core/styles'
import IconButton from '@material-ui/core/IconButton'
import FirstPageIcon from '@material-ui/icons/FirstPage'
import KeyboardArrowLeft from '@material-ui/icons/KeyboardArrowLeft'
import KeyboardArrowRight from '@material-ui/icons/KeyboardArrowRight'
import LastPageIcon from '@material-ui/icons/LastPage'

const styles = theme => ({
  root: {
    flexShrink: 0,
    color: theme.palette.text.secondary,
    marginLeft: theme.spacing(2.5)
  }
})

function TablePaginationActions ({ classes, count, onChangePage, page, rowsPerPage }) {
  const handleFirstPageButtonClick = useCallback(onChangePage(0))

  const handleBackButtonClick = useCallback(onChangePage(page - 1))

  const handleNextButtonClick = useCallback(onChangePage(page + 1))

  const handleLastPageButtonClick = useCallback(
    onChangePage(Math.max(0, Math.ceil(count / rowsPerPage) - 1))
  )

  return (
    <div className={classes.root}>
      <IconButton
        onClick={handleFirstPageButtonClick}
        disabled={page === 0}
        aria-label='First Page'
      >
        <FirstPageIcon />
      </IconButton>
      <IconButton
        onClick={handleBackButtonClick}
        disabled={page === 0}
        aria-label='Previous Page'
      >
        <KeyboardArrowLeft />
      </IconButton>
      <IconButton
        onClick={handleNextButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='Next Page'
      >
        <KeyboardArrowRight />
      </IconButton>
      <IconButton
        onClick={handleLastPageButtonClick}
        disabled={page >= Math.ceil(count / rowsPerPage) - 1}
        aria-label='Last Page'
      >
        <LastPageIcon />
      </IconButton>
    </div>
  )
}

TablePaginationActions.propTypes = {
  classes: PropTypes.object.isRequired,
  count: PropTypes.number.isRequired,
  onChangePage: PropTypes.func.isRequired,
  page: PropTypes.number.isRequired,
  rowsPerPage: PropTypes.number.isRequired
}

const TablePaginationActionsWrapped = withStyles(styles, { withTheme: true })(
  TablePaginationActions
)

export default TablePaginationActionsWrapped
