import React, { useContext, useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import format from 'date-fns/format'

import MUIDataTable from 'mui-datatables'

import Button from '@material-ui/core/Button'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import withStyles from '@material-ui/core/styles/withStyles'

import AddIcon from '@material-ui/icons/Add'

import AwardsForm from './components/awards'
import BookForm from './components/book'
import BookChapterForm from './components/book-chapter'
import EditorialForm from './components/editorial'
import EventForm from './components/event'
import JournalForm from './components/journal'
import Link from './components/table-link'
import MediaForm from './components/media'
import NewsForm from './components/news'
import PatentForm from './components/patent'
import ProceedingForm from './components/proceeding'
import SoftwareForm from './components/software'
import ThesisForm from './components/thesis'

import { AuthContext } from 'contexts/auth'

import FormDialog from 'layouts/dashboard/components/form-dialog'

import styles from './styles'

const columns = [
  {
    name: 'id',
    options: { display: 'excluded' }
  },
  {
    name: 'title',
    label: 'Title',
    options: {
      customBodyRender: (value, tableMeta) => {
        const id = tableMeta.rowData[0]
        const type = tableMeta.rowData[4]
        const typeSlugged = type.split(' ').join('-')

        return <Link to={`/${typeSlugged}/${id}`}>{value}</Link>
      }
    }
  },
  {
    name: 'author_id',
    options: { display: 'excluded' }
  },
  {
    name: 'author_name',
    label: 'Author',
    options: {
      customBodyRender: (value, tableMeta) => (
        <Link to={`/authors/${tableMeta.rowData[2]}`}>
          {value}
        </Link>
      )
    }
  },
  { name: 'type', label: 'Type' },
  {
    name: 'created_at',
    label: 'Date',
    options: {
      customBodyRender: (value) => format(value, 'HH:mm DD/MM/YYYY')
    }
  }
]

const options = {
  download: false,
  filter: false,
  print: false,
  responsive: 'scroll',
  rowsPerPage: 5,
  rowsPerPageOptions: [5, 10, 15]
}

const forms = {
  'Awards': { component: AwardsForm, onlyAdmin: false },
  'Book': { component: BookForm, onlyAdmin: false },
  'Book Chapter': { component: BookChapterForm, onlyAdmin: false },
  'Editorial': { component: EditorialForm, onlyAdmin: false },
  'Event': { component: EventForm, onlyAdmin: true },
  'Journal': { component: JournalForm, onlyAdmin: false },
  'Media': { component: MediaForm, onlyAdmin: true },
  'News': { component: NewsForm, onlyAdmin: true },
  'Patent': { component: PatentForm, onlyAdmin: false },
  'Proceeding': { component: ProceedingForm, onlyAdmin: false },
  'Software': { component: SoftwareForm, onlyAdmin: false },
  'Thesis': { component: ThesisForm, onlyAdmin: false }
}

function Posts ({ classes }) {
  const { userInfo: { user } } = useContext(AuthContext)
  const [form, setForm] = useState({
    component: '',
    title: ''
  })
  const [isOpen, handleDialog] = useState(false)
  const [tableData, setData] = useState([])
  const [anchorEl, setAnchor] = useState()

  const handleClick = (e) => {
    if (!anchorEl) setAnchor(e.target)
  }
  const handleClose = () => setAnchor(null)
  const openForm = (name) => () => {
    setForm({
      component: forms[name].component,
      title: name
    })
    handleDialog(true)
  }

  const closeForm = () => handleDialog(false)

  useEffect(() => {
    import('src/data/fake-data.json')
      .then((data) => {
        setData(data.default)
      })
  }, [])

  return (
    <>
      <FormDialog
        showDialog={isOpen}
        handleCloseDialog={closeForm}
        title={form.title}
      >
        <form.component />
      </FormDialog>

      <div className={classes.toolbar}>
        <Button
          color='primary'
          onClick={handleClick}
          variant='outlined'
        >
          Add <AddIcon />
        </Button>

        <Menu
          anchorEl={anchorEl}
          className={classes.menu}
          open={Boolean(anchorEl)}
          onClose={handleClose}
        >
          {Object
            .entries(forms)
            .filter(([_, val]) => !val.onlyAdmin || (val.onlyAdmin && user.isAdmin))
            .map(([key]) => (
              <MenuItem key={key} onClick={openForm(key)}>
                {key}
              </MenuItem>
            ))}
        </Menu>
      </div>

      <MUIDataTable
        columns={columns}
        data={tableData}
        options={options}
        title='Posts'
      />
    </>
  )
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts)
