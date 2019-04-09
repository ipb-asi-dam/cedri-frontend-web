import React, { useCallback } from 'react'
import t from 'prop-types'
import TableCell from '@material-ui/core/TableCell'
import TableHead from '@material-ui/core/TableHead'
import TableRow from '@material-ui/core/TableRow'
import TableSortLabel from '@material-ui/core/TableSortLabel'

function Header ({ data, sort = false, onRequestSort, order, orderBy }) {
  const createSortHandler = useCallback(property => () => {
    onRequestSort(property)
  })

  return (
    <TableHead>
      <TableRow>
        {data.map(item => (
          <TableCell
            key={item.id}
            align={item.numeric ? 'right' : 'left'}
            padding={item.disablePadding ? 'none' : 'default'}
            {...sort && { sortDirection: orderBy === item.id ? order : false }}
          >
            {sort && (
              <TableSortLabel
                active={orderBy === item.id}
                direction={order}
                onClick={createSortHandler(item.id)}
              >
                {item.label}
              </TableSortLabel>
            )}
            {!sort && item.label}
          </TableCell>
        ))}
      </TableRow>
    </TableHead>
  )
}

Header.propTypes = {
  data: t.arrayOf(t.shape({
    id: t.string.isRequired,
    numeric: t.bool,
    disablePadding: t.bool,
    label: t.string.isRequired
  })),
  sort: t.bool,
  onRequestSort: t.func,
  order: t.string,
  orderBy: t.string
}

export default Header
