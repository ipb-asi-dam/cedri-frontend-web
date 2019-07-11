import React, { useCallback, useContext, useEffect, useState } from 'react'
import axios from 'config/axios'

import MUIDataTable from 'mui-datatables'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'

import { ic_add as AddIcon } from 'react-icons-kit/md/ic_add'
import { ic_delete as DeleteIcon } from 'react-icons-kit/md/ic_delete'
import { ic_edit as EditIcon } from 'react-icons-kit/md/ic_edit'
import { ic_unarchive as UnarchiveIcon } from 'react-icons-kit/md/ic_unarchive'

import Icon from 'components/icon'
import Avatar from './components/avatar'
import CreateUserForm from './components/create-user-form'

import { AuthContext } from 'contexts/auth'
import { SnackbarContext } from 'contexts/snackbar'

import useStyles from './styles'

const columns = [
  {
    name: 'id',
    options: { display: 'excluded' }
  },
  {
    name: 'fileId',
    options: { display: 'excluded' }
  },
  {
    name: 'name',
    label: 'Name',
    options: {
      customBodyRender: (value, tableMeta) => {
        const imageURL = tableMeta.rowData[1]
          ? `${process.env.REACT_APP_API_URL}/public/files/${tableMeta.rowData[1]}`
          : '//via.placeholder.com/36'

        return (
          <Avatar
            src={imageURL}
            userName={value}
          />
        )
      }
    }
  },
  { name: 'email', label: 'Email' },
  {
    name: 'isAdmin',
    label: 'Administrator',
    options: {
      customBodyRender: (value) => value ? 'Yes' : 'No'
    }
  },
  { name: 'deletedAt', options: { display: 'excluded' } }
]

const options = {
  download: false,
  filter: false,
  print: false,
  responsive: 'scroll',
  rowsPerPage: 5,
  rowsPerPageOptions: [5],
  selectableRows: 'none'
}

const MODE_ADD = 'ADD'
const MODE_EDIT = 'EDIT'

function Users () {
  const classes = useStyles()
  const { userInfo: { user }, updateUserInfo } = useContext(AuthContext)
  const { showNotification } = useContext(SnackbarContext)

  const [isSubmiting, setSubmiting] = useState(false)
  const [isOpen, handleDialog] = useState(false)
  const [tableData, setTableData] = useState([])
  const [formData, setFormData] = useState({})
  const [count, setCount] = useState(0)
  const [page, setPage] = useState(0)
  const [lastPage, setLastPage] = useState(0)
  const [mode, setMode] = useState(MODE_ADD)

  const openForm = useCallback(() => handleDialog(true), [])
  const closeForm = useCallback(() => {
    handleDialog(false)
    setFormData({})
  }, [])

  const getUsers = useCallback(async () => {
    try {
      const response = await axios.get(`/private/users?page=${page}&limit=5`)
      setTableData(response.data.data.elements
        .map(({ id, name, isAdmin, file, email, deletedAt }) => {
          const fileId = file ? file.md5 : null
          return [id, fileId, name, email, isAdmin, deletedAt]
        }))
      setCount(response.data.data.countTotal)
      setLastPage(response.data.data.pagesTotal)
    } catch (e) {
      showNotification(e.message)
    }
  }, [page, showNotification])

  const fetchData = useCallback(async (id) => {
    try {
      const response = await axios.get(`/private/users/${id}`)
      setFormData(response.data.data)
      openForm()
    } catch (e) {
      showNotification(e.message)
    }
  }, [openForm, showNotification])

  function onChangePage (currentPage) {
    if ((currentPage + 1) > lastPage) return

    setPage(() => {
      getUsers()
      return currentPage + 1
    })
  }

  const handleClick = () => {
    setMode(MODE_ADD)
    openForm()
  }

  const addRow = useCallback((data) => {
    const { id, name, isAdmin, file: { md5: fileId }, email } = data
    setTableData([
      [id, fileId, name, email, isAdmin],
      ...tableData
    ])
  }, [tableData])

  const editRow = useCallback((id) => {
    setMode(MODE_EDIT)
    fetchData(id)
  }, [fetchData])

  const updateRow = useCallback((data) => {
    if (data.id === user.id) {
      updateUserInfo()
    }

    setTableData((tableData) => {
      return tableData.map((row) => {
        if (row[0] !== data.id) return row

        const { id, name, isAdmin, file, email, deletedAt } = data
        const fileId = file ? file.md5 : null

        return [id, fileId, name, email, isAdmin, deletedAt]
      })
    })
  }, [updateUserInfo, user.id])

  const onSubmit = useCallback(async (data, errors) => {
    if (errors !== undefined) return

    const method = mode === MODE_ADD ? 'post' : 'put'

    try {
      setSubmiting(true)
      const response = await axios[method](
        `/private/users/${mode === MODE_EDIT ? formData.id : ''}`,
        data
      )

      if (mode === MODE_ADD) {
        addRow(response.data.data)
        showNotification('User added successfully')
      } else {
        updateRow(response.data.data)
        showNotification('User updated successfully')
      }
    } catch (e) {
      showNotification(e.message)
    } finally {
      setSubmiting(false)
      closeForm()
    }
  }, [addRow, closeForm, formData.id, mode, showNotification, updateRow])

  const deleteRow = async (id) => {
    try {
      if (window.confirm('Do you really want to archive this user?')) {
        await axios.delete(`/private/users/${id}`)
        setTableData((tableData) => tableData.filter(([userId]) => id !== userId))
        showNotification('User archived successfully!')
      }
    } catch (e) {
      showNotification(e.message)
    }
  }

  async function unarchiveUser (id) {
    try {
      const response = await axios.post(`/private/users/${id}/undelete`)
      updateRow(response.data.data)
      showNotification('User unarchived successfully!')
    } catch (e) {
      showNotification(e.message)
    }
  }

  useEffect(() => {
    getUsers()
  }, [getUsers, page, showNotification])

  return (
    <>
      <Dialog open={isOpen} onClose={closeForm}>
        <DialogTitle>Create an user</DialogTitle>
        <DialogContent>
          <CreateUserForm
            classes={classes}
            data={formData}
            isEdit={mode === MODE_EDIT}
            isSubmiting={isSubmiting}
            onSubmit={onSubmit}
            setData={addRow}
          >
            <DialogActions>
              <Button onClick={closeForm} color='primary'>
                Cancel
              </Button>
              <Button type='submit' color='primary' disabled={isSubmiting}>
                Confirm
              </Button>
            </DialogActions>
          </CreateUserForm>
        </DialogContent>
      </Dialog>

      <div className={classes.toolbar}>
        <Button
          color='primary'
          onClick={handleClick}
          variant='outlined'
        >
          Add <Icon icon={AddIcon} />
        </Button>
      </div>

      <MUIDataTable
        classeName={classes.root}
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
                return tableMeta.rowData && !tableMeta.rowData[5]
                  ? (
                    <>
                      <IconButton onClick={() => editRow(tableMeta.rowData[0])}>
                        <Icon icon={EditIcon} />
                      </IconButton>
                      {tableMeta.rowData[0] !== user.id && (
                        <IconButton onClick={() => deleteRow(tableMeta.rowData[0])}>
                          <Icon icon={DeleteIcon} />
                        </IconButton>
                      )}
                    </>
                  )
                  : (
                    <IconButton onClick={() => unarchiveUser(tableMeta.rowData[0])}>
                      <Icon icon={UnarchiveIcon} />
                    </IconButton>
                  )
              }
            }
          }
        ]}
        data={tableData}
        options={{
          ...options,
          count,
          onChangePage,
          page
        }}
        title='Users'
      />
    </>
  )
}

export default Users
