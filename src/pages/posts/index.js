import React, { lazy, Suspense, useCallback, useContext, useState } from 'react'
import PropTypes from 'prop-types'

import format from 'date-fns/format'
import axios from 'config/axios'

import MUIDataTable from 'mui-datatables'
import Button from '@material-ui/core/Button'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import Menu from '@material-ui/core/Menu'
import MenuItem from '@material-ui/core/MenuItem'
import withStyles from '@material-ui/core/styles/withStyles'

import { ic_add as AddIcon } from 'react-icons-kit/md/ic_add'
import { ic_delete as DeleteIcon } from 'react-icons-kit/md/ic_delete'
import { ic_edit as EditIcon } from 'react-icons-kit/md/ic_edit'

import Icon from 'components/icon'
import Link from './components/table-link'
import HandleButtons from './components/handle-buttons'

import { AuthContext } from 'contexts/auth'
import { SnackbarContext } from 'contexts/snackbar'

import FormDialog from 'layouts/dashboard/components/form-dialog'

import styles from './styles'

const columns = [
  {
    name: 'id',
    options: { display: 'excluded' }
  },
  { name: 'title', label: 'Title' },
  {
    name: 'authorId',
    options: { display: 'excluded' }
  },
  {
    name: 'authorName',
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
    name: 'createdAt',
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
  'Awards': {
    component: lazy(() => import('./components/awards')),
    onlyAdmin: false,
    apiRoute: '/private/awards'
  },
  'Event': {
    component: lazy(() => import('./components/event')),
    onlyAdmin: true,
    apiRoute: '/private/events'
  },
  'Media': {
    component: lazy(() => import('./components/media')),
    onlyAdmin: true,
    apiRoute: '/private/medias'
  },
  'News': {
    component: lazy(() => import('./components/news')),
    onlyAdmin: true,
    apiRoute: '/private/news'
  },
  'Patent': {
    component: lazy(() => import('./components/patent')),
    onlyAdmin: false,
    apiRoute: '/private/patents'
  },
  'Project': {
    component: lazy(() => import('./components/projects')),
    onlyAdmin: false,
    apiRoute: '/private/projects'
  },
  'Publication': {
    component: lazy(() => import('./components/publication')),
    onlyAdmin: false,
    apiRoute: '/private/publications'
  },
  'Software': {
    component: lazy(() => import('./components/software')),
    onlyAdmin: false,
    apiRoute: '/private/software'
  },
  'Thesis': {
    component: lazy(() => import('./components/thesis')),
    onlyAdmin: false,
    apiRoute: '/private/theses'
  }
}

function Posts ({ classes }) {
  const { userInfo: { user } } = useContext(AuthContext)
  const { showNotification } = useContext(SnackbarContext)
  const [form, setForm] = useState({
    apiRoute: null,
    component: '',
    title: ''
  })
  const [mode, setMode] = useState('ADD')
  const [formData, setFormData] = useState({})
  const [isFormValid, setFormValid] = useState(true)
  const [isSubmittingForm, setSubmittingForm] = useState(false)
  const [isOpen, handleDialog] = useState(false)
  const [tableData, setTableData] = useState([])
  const [anchorEl, setAnchor] = useState()

  const handleClick = (e) => {
    if (!anchorEl) setAnchor(e.target)
    setMode('ADD')
  }

  const handleClose = () => setAnchor(null)

  const openForm = (name) => () => {
    setForm({
      apiRoute: forms[name].apiRoute,
      component: forms[name].component,
      title: name
    })
    handleDialog(true)
  }

  const closeForm = () => {
    handleDialog(false)
    setFormValid(true)
    setFormData({})
  }

  const fetchData = useCallback(async (id) => {
    try {
      const response = await axios.get(`${form.apiRoute}/${id}`).data
      setFormData(response.data)
    } catch {
      showNotification('There was an error during table data fetching')
    }
  }, [form.apiRoute, showNotification])

  const addRow = useCallback((data) => {
    const { id, title, authorId, authorName, createdAt } = data
    setTableData(tableData => [
      { id, title, authorId, authorName, createdAt },
      ...tableData
    ])
  }, [])

  const editRow = useCallback((data) => {
    setTableData(tableData => (
      tableData.map(row => {
        return row.id === data.id
          ? data
          : row
      })
    ))
  }, [])

  const deleteRow = useCallback(async (data) => {
    try {
      await axios.delete(`${form.apiRoute}/${data.id}`)
      setTableData(tableData => tableData.filter(row => row.id !== data.id))
    } catch {
      showNotification('There was an error during the post deleting')
    }
  }, [form.apiRoute, showNotification])

  const submitForm = useCallback(async (data, errors) => {
    if (errors !== undefined) return setFormValid(false)

    const method = mode === 'ADD' ? 'post' : 'put'

    try {
      setSubmittingForm(true)
      const response = await axios[method](form.apiRoute, data).data

      if (mode === 'ADD') {
        addRow(response.data)
      } else {
        editRow(response.data)
      }
    } catch {
      showNotification('There was an error during form submitting')
    } finally {
      setSubmittingForm(false)
      closeForm()
    }
  }, [mode, form.apiRoute, addRow, editRow, showNotification])

  return (
    <>
      <FormDialog
        showDialog={isOpen}
        handleCloseDialog={closeForm}
        title={form.title}
      >
        <Suspense fallback={<LinearProgress />}>
          <form.component
            closeForm={closeForm}
            data={formData}
            isSubmiting={isSubmittingForm}
            isValid={isFormValid}
            onSubmit={submitForm}
            setFormData={setFormData}
            setSubmiting={setSubmittingForm}
            setValid={setFormValid}
          >
            <HandleButtons
              disabled={!isFormValid || isSubmittingForm}
              isSubmiting={isSubmittingForm}
            />
          </form.component>
        </Suspense>
      </FormDialog>

      <div className={classes.toolbar}>
        <Button
          color='primary'
          onClick={handleClick}
          variant='outlined'
        >
          Add <Icon icon={AddIcon} />
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
        data={tableData}
        options={options}
        title='Posts'
        columns={[
          ...columns,
          {
            name: 'actions',
            label: 'Actions',
            options: {
              search: false,
              customBodyRender: (_, tableMeta) => (
                <>
                  <IconButton onClick={() => {
                    setMode('EDIT')
                    setSubmittingForm(true)
                    fetchData(tableMeta.rowsData[0])
                    setSubmittingForm(false)
                  }}>
                    <Icon icon={EditIcon} />
                  </IconButton>
                  <IconButton onClick={() => deleteRow(tableMeta.rowData[0])}>
                    <Icon icon={DeleteIcon} />
                  </IconButton>
                </>
              )
            }
          }
        ]}
      />
    </>
  )
}

Posts.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Posts)
