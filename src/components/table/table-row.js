import React from 'react'
import PropTypes from 'prop-types'
import MuiTableRow from '@material-ui/core/TableRow'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = {
  tableRow: {
    cursor: 'pointer'
  }
}

function TableRow ({ children, classes, hover, ...props }) {
  return (
    <MuiTableRow
      className={hover ? classes.tableRow : ''}
      hover={hover}
      {...props}
    >
      {children}
    </MuiTableRow>
  )
}

TableRow.defaultProps = {
  hover: false
}

TableRow.propTypes = {
  children: PropTypes.node.isRequired,
  classes: PropTypes.object.isRequired,
  hover: PropTypes.bool
}

export default withStyles(styles)(TableRow)
