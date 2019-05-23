import React, { useEffect, useState } from 'react'
import PropTypes from 'prop-types'
import axios from 'config/axios'

import MUIDataTable from 'mui-datatables'

import Button from '@material-ui/core/Button'
import Dialog from '@material-ui/core/Dialog'
import DialogActions from '@material-ui/core/DialogActions'
import DialogContent from '@material-ui/core/DialogContent'
import DialogTitle from '@material-ui/core/DialogTitle'
import IconButton from '@material-ui/core/IconButton'
import withStyles from '@material-ui/core/styles/withStyles'

import AddIcon from '@material-ui/icons/Add'
import DeleteIcon from '@material-ui/icons/Delete'
import EditIcon from '@material-ui/icons/Edit'

import Avatar from './components/avatar'
import CreateUserForm from './components/create-user-form'

import styles from './styles'

const columns = [
  {
    name: 'id',
    options: { display: 'excluded' }
  },
  {
    name: 'avatar',
    label: 'Avatar',
    options: { display: 'excluded' }
  },
  {
    name: 'name',
    label: 'Name',
    options: {
      customBodyRender: (value, tableMeta) => (
        <Avatar
          src={tableMeta.rowData[1] || '//via.placeholder.com/36'}
          userName={value}
        />
      )
    }
  },
  { name: 'email', label: 'Email' },
  {
    name: 'isAdmin',
    label: 'Administrator',
    options: {
      customBodyRender: (value) => value ? 'Yes' : 'No'
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

function Users ({ classes }) {
  const [isOpen, handleDialog] = useState(false)
  const [tableData, setData] = useState([])

  const openForm = () => handleDialog(true)
  const closeForm = () => handleDialog(false)
  const updateData = (data) => {
    const { id, name, isAdmin, user: { avatar, email } } = data
    setData([
      [id, avatar, name, email, isAdmin],
      ...tableData
    ])
  }

  const deleteRow = async (id) => {
    try {
      if (window.confirm('Do you really want to delete this user?')) {
        await axios.delete(`/private/users/${id}`)
        setData(tableData.filter(([userId]) => id !== userId))
      }
    } catch {

    }
  }

  useEffect(() => {
    async function fetchData () {
      try {
        const response = await axios.get('/private/users')
        setData(response.data.data
          .map(({ id, name, isAdmin, user: { avatar, email } }) => (
            [id, avatar, name, email, isAdmin]
          )))
      } catch {

      }
    }

    fetchData()
  }, [])

  return (
    <>
      <Dialog open={isOpen} onClose={closeForm}>
        <DialogTitle>Create an user</DialogTitle>
        <DialogContent>
          <CreateUserForm closeForm={closeForm} setData={updateData}>
            <DialogActions>
              <Button onClick={closeForm} color='primary'>
                Cancel
              </Button>
              <Button type='submit' color='primary'>
                Create
              </Button>
            </DialogActions>
          </CreateUserForm>
        </DialogContent>
      </Dialog>

      <div className={classes.toolbar}>
        <Button
          color='primary'
          onClick={openForm}
          variant='outlined'
        >
          Add <AddIcon />
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
              customBodyRender: (_, tableMeta) => (
                <>
                  <IconButton>
                    <EditIcon />
                  </IconButton>
                  <IconButton onClick={() => deleteRow(tableMeta.rowData[0])}>
                    <DeleteIcon />
                  </IconButton>
                </>
              )
            }
          }
        ]}
        data={tableData}
        options={options}
        title='Users'
      />
    </>
  )
}

Users.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(Users)