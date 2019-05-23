import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import TableRow from '@material-ui/core/TableRow'

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

function Notifications () {
  const [tableData, setData] = useState([])

  useEffect(() => {
    import('src/data/fake-data.json')
      .then((data) => {
        setData(data.default)
      })
  }, [])

  return (
    <Table
      header={header}
      renderRow={renderRow}
      rowsData={tableData}
    />
  )
}

Notifications.propTypes = {}

export default Notifications
