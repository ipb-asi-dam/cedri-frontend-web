import React, { lazy, Suspense, useCallback, useContext, useEffect, useState } from 'react'

import format from 'date-fns/format'
import axios from 'config/axios'

import MUIDataTable from 'mui-datatables'

import Button from '@material-ui/core/Button'
import CircularProgress from '@material-ui/core/CircularProgress'
import Grid from '@material-ui/core/Grid'
import IconButton from '@material-ui/core/IconButton'
import LinearProgress from '@material-ui/core/LinearProgress'
import Typography from '@material-ui/core/Typography'

import { ic_add as AddIcon } from 'react-icons-kit/md/ic_add'
import { ic_delete as DeleteIcon } from 'react-icons-kit/md/ic_delete'
import { ic_edit as EditIcon } from 'react-icons-kit/md/ic_edit'

import Icon from 'components/icon'
import HandleButtons from './components/handle-buttons'
import TextField from 'components/text-field'

import { AuthContext } from 'contexts/auth'
import { SnackbarContext } from 'contexts/snackbar'
import { ThemeContext } from 'contexts/theme'

import FormDialog from 'layouts/dashboard/components/form-dialog'

import useStyles from './styles'

const columns = [
  {
    name: 'id',
    options: { display: 'excluded' }
  },
  { name: 'title', label: 'Title' },
  { name: 'author', label: 'Author' },
  {
    name: 'createdAt',
    label: 'Created At',
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
  rowsPerPageOptions: [5],
  selectableRows: 'none',
  serverSide: true
}

const forms = {
  'award': {
    component: lazy(() => import('./components/awards')),
    onlyAdmin: false,
    apiRoute: '/private/awards'
  },
  'event': {
    component: lazy(() => import('./components/event')),
    onlyAdmin: true,
    apiRoute: '/private/events'
  },
  'media': {
    component: lazy(() => import('./components/media')),
    onlyAdmin: true,
    apiRoute: '/private/medias'
  },
  'news': {
    component: lazy(() => import('./components/news')),
    onlyAdmin: true,
    apiRoute: '/private/news'
  },
  'patent': {
    component: lazy(() => import('./components/patent')),
    onlyAdmin: false,
    apiRoute: '/private/patents'
  },
  'project': {
    component: lazy(() => import('./components/projects')),
    onlyAdmin: false,
    apiRoute: '/private/projects'
  },
  'publication': {
    component: lazy(() => import('./components/publication')),
    onlyAdmin: false,
    apiRoute: '/private/publications'
  },
  'software': {
    component: lazy(() => import('./components/software')),
    onlyAdmin: false,
    apiRoute: '/private/software'
  },
  'thesis': {
    component: lazy(() => import('./components/thesis')),
    onlyAdmin: false,
    apiRoute: '/private/theses'
  }
}

const toTitleCase = (string) => string.charAt(0).toUpperCase() + string.slice(1)

const getForm = (name) => ({
  apiRoute: forms[name].apiRoute,
  component: forms[name].component,
  title: toTitleCase(name)
})

function Posts () {
  const classes = useStyles()

  const { userInfo: { user } } = useContext(AuthContext)
  const { showNotification } = useContext(SnackbarContext)
  const { isMobile } = useContext(ThemeContext)

  const [mode, setMode] = useState('ADD')
  const [formData, setFormData] = useState({})
  const [isFormValid, setFormValid] = useState(true)
  const [isSubmittingForm, setSubmittingForm] = useState(false)
  const [isLoading, setIsLoading] = useState(false)
  const [isOpen, handleDialog] = useState(false)
  const [tableData, setTableData] = useState([])
  const [count, setCount] = useState(1)
  const [page, setPage] = useState(0)
  const [lastPage, setLastPage] = useState(0)
  const [selectedForm, setSelectedForm] = useState('award')
  const [form, setForm] = useState(getForm(selectedForm))
  const [allowedResources, setAllowedResources] = useState([])

  function handleSelectForm (e) {
    const { value } = e.target

    setSelectedForm(value)
    setForm(getForm(value))
    setTableData([])
    setPage(1)
  }

  const fetchPosts = useCallback(async () => {
    try {
      setIsLoading(true)
      const response = await axios.get(`${form.apiRoute}?page=${page}&limit=5`)
      setCount(response.data.data.countTotal)
      setLastPage(response.data.data.pagesTotal)
      setTableData(response.data.data.elements)
    } catch (e) {
      showNotification(e.message)
    } finally {
      setIsLoading(false)
    }
  }, [form.apiRoute, page, showNotification])

  function onChangePage (currentPage) {
    if ((currentPage + 1) > lastPage) return

    setPage(() => {
      fetchPosts()
      return currentPage + 1
    })
  }

  const handleClick = (e) => {
    setMode('ADD')
    openForm()
  }

  const openForm = useCallback(() => handleDialog(true), [])

  const closeForm = useCallback(() => {
    handleDialog(false)
    setFormValid(true)
    setFormData({})
  }, [])

  const fetchData = useCallback(async (id) => {
    try {
      setSubmittingForm(true)
      const response = await axios.get(`${form.apiRoute}/${id}`)
      setFormData(response.data.data)
      openForm()
    } catch {
      showNotification('There was an error during table data fetching')
    } finally {
      setSubmittingForm(false)
    }
  }, [form, openForm, showNotification])

  const addRow = useCallback((data) => {
    const { id, title, author, createdAt } = data
    setTableData(tableData => [
      { id, title, author, createdAt },
      ...tableData
    ])
    setCount(count + 1)
  }, [count])

  const editRow = useCallback((data) => {
    setTableData(tableData => (
      tableData.map(row => {
        return row.id === data.id
          ? data
          : row
      })
    ))
  }, [])

  function handleEdit (id) {
    return () => {
      setMode('EDIT')
      fetchData(id)
    }
  }

  const deleteRow = useCallback((id) => async () => {
    if (!window.confirm('Are you sure?')) return

    try {
      await axios.delete(`${form.apiRoute}/${id}`)
      setTableData(tableData => tableData.filter(row => row.id !== id))
      setCount(count - 1)
    } catch {
      showNotification('There was an error during the post deleting')
    }
  }, [count, form.apiRoute, showNotification])

  const submitForm = useCallback(async (data, errors) => {
    if (errors !== undefined) return setFormValid(false)

    const method = mode === 'ADD' ? 'post' : 'put'

    try {
      setSubmittingForm(true)
      const response = await axios[method](
        `${form.apiRoute}/${mode === 'EDIT' ? formData.id : ''}`,
        data
      )

      if (mode === 'ADD') {
        addRow(response.data.data)
        showNotification('Post added successfully')
      } else {
        editRow(response.data.data)
        showNotification('Post edited successfully')
      }
    } catch {
      showNotification('There was an error during form submitting')
    } finally {
      setSubmittingForm(false)
      closeForm()
    }
  }, [mode, form.apiRoute, formData.id, addRow, showNotification, editRow, closeForm])

  useEffect(() => {
    fetchPosts()
  }, [fetchPosts])

  useEffect(() => {
    setAllowedResources(Object
      .entries(forms)
      .filter(([_, val]) => !val.onlyAdmin || (val.onlyAdmin && user.isAdmin))
    )
  }, [user])

  return (
    <>
      <FormDialog
        showDialog={isOpen}
        handleCloseDialog={closeForm}
        title={form.title}
      >
        <Suspense fallback={<LinearProgress />}>
          <form.component
            data={formData}
            isMobile={isMobile}
            isSubmiting={isSubmittingForm}
            onSubmit={submitForm}
            setValid={setFormValid}
          >
            <HandleButtons
              disabled={!isFormValid || isSubmittingForm}
              isSubmiting={isSubmittingForm}
            />
          </form.component>
        </Suspense>
      </FormDialog>

      <Grid container spacing={2} className={classes.toolbar}>
        <Grid item xs={9}>
          <TextField
            disabled={isLoading || isSubmittingForm}
            onChange={handleSelectForm}
            select
            SelectProps={{ native: true }}
            value={selectedForm}
          >
            {allowedResources.map(([key]) => (
              <option key={key} value={key}>
                {toTitleCase(key)}
              </option>
            ))}
          </TextField>
        </Grid>
        <Grid item xs={3}>
          <Button
            color='primary'
            disabled={isLoading || isSubmittingForm}
            fullWidth
            onClick={handleClick}
            variant='outlined'
          >
            Add <Icon icon={AddIcon} />
          </Button>
        </Grid>
      </Grid>

      <MUIDataTable
        data={tableData}
        options={{
          ...options,
          count,
          onChangePage,
          page
        }}
        title={(
          <div style={{ display: 'flex' }}>
            <Typography style={{ marginRight: 12 }}>
              Posts of {selectedForm}
            </Typography>
            {isLoading && <CircularProgress size={24} />}
          </div>
        )}
        columns={[
          ...columns,
          {
            name: 'actions',
            label: 'Actions',
            options: {
              search: false,
              sort: false,
              customBodyRender: (_, tableMeta) => {
                if (!tableMeta.rowData) return
                return (
                  <>
                    <IconButton onClick={handleEdit(tableMeta.rowData[0])}>
                      <Icon icon={EditIcon} />
                    </IconButton>
                    <IconButton onClick={deleteRow(tableMeta.rowData[0])}>
                      <Icon icon={DeleteIcon} />
                    </IconButton>
                  </>
                )
              }
            }
          }
        ]}
      />
    </>
  )
}

export default Posts
