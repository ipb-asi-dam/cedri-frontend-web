import React from 'react'
import PropTypes from 'prop-types'
import { Link } from 'react-router-dom'
import MuiTableCell from '@material-ui/core/TableCell'
import withStyles from '@material-ui/core/styles/withStyles'
import format from 'date-fns/format'

const styles = theme => ({
  cell: {
    textTransform: 'capitalize'
  },
  link: {
    color: theme.palette.primary.main,
    textDecoration: 'none',
    '&:hover': {
      textDecoration: 'underline'
    }
  }
})

function TableCell ({ classes, dataType, linkTo, value, ...props }) {
  return (
    <MuiTableCell className={classes.cell} {...props}>
      {dataType === 'string' && value}
      {dataType === 'date' && format(value, 'HH:mm DD/MM/YYYY')}
      {dataType === 'link' && <Link className={classes.link} to={linkTo}>{value}</Link>}
    </MuiTableCell>
  )
}

TableCell.defaultProps = {
  dataType: 'string'
}

TableCell.propTypes = {
  classes: PropTypes.object.isRequired,
  dataType: PropTypes.oneOf(['string', 'number', 'date', 'link']),
  linkTo: PropTypes.string,
  value: PropTypes.any
}

export default withStyles(styles)(TableCell)
