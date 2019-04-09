import React, { useCallback, useState } from 'react'
import t from 'prop-types'
import Fab from '@material-ui/core/Fab'
import withStyles from '@material-ui/core/styles/withStyles'
import AddIcon from '@material-ui/icons/Add'
import { ValidatorForm, TextValidator } from 'react-material-ui-form-validator'

import FormDialog from 'components/form-dialog'
import Table from 'components/table'

const tableHeader = [
  { id: 'name', numeric: false, disablePadding: false, label: 'Dessert (100g serving)' },
  { id: 'calories', numeric: true, disablePadding: false, label: 'Calories' },
  { id: 'fat', numeric: true, disablePadding: false, label: 'Fat (g)' },
  { id: 'actions', numeric: false, disablePadding: false, label: 'Actions' }
]

const tableData = [
  { name: 'Cupcake', calories: 305, fat: 3.7 },
  { name: 'Donut', calories: 452, fat: 25.0 },
  { name: 'Eclair', calories: 262, fat: 16.0 },
  { name: 'Frozen yoghurt', calories: 159, fat: 6.0 },
  { name: 'Gingerbread', calories: 356, fat: 16.0 },
  { name: 'Honeycomb', calories: 408, fat: 3.2 },
  { name: 'Ice cream sandwich', calories: 237, fat: 9.0 },
  { name: 'Jelly Bean', calories: 375, fat: 0.0 },
  { name: 'KitKat', calories: 518, fat: 26.0 },
  { name: 'Lollipop', calories: 392, fat: 0.2 },
  { name: 'Marshmallow', calories: 318, fat: 0 },
  { name: 'Nougat', calories: 360, fat: 19.0 },
  { name: 'Oreo', calories: 437, fat: 18.0 }
]

const styles = theme => ({
  fab: {
    bottom: 45,
    margin: theme.spacing.unit,
    marginBottom: 0,
    position: 'fixed',
    right: 24,
    zIndex: 997
  },
  extendedIcon: {
    marginRight: theme.spacing.unit
  },
  appBar: {
    position: 'relative'
  },
  flex: {
    flex: 1
  },
  container: {
    display: 'flex',
    flexWrap: 'wrap'
  },
  textField: {
    marginLeft: theme.spacing.unit,
    marginRight: theme.spacing.unit,
    width: 200
  }
})

function Dashboard ({ classes }) {
  const [fields, setFieldState] = useState({ name: '', email: '', isValid: null })
  const [showDialog, toggleDialog] = useState(false)

  const handleChange = useCallback((name) => (e) => {
    setFieldState({ ...fields, [name]: e.target.value })
  })
  const handleToggleDialog = useCallback(() => toggleDialog(!showDialog))

  return (
    <>
      <FormDialog
        handleToggleDialog={handleToggleDialog}
        invalidForm={!!fields.isValid}
        mode='Save'
        showDialog={showDialog}
        title='Teste'
      >
        <ValidatorForm
          className={classes.container}
          onError={errors => console.log(errors)}
          onSubmit={() => {}}
        >
          <TextValidator
            className={classes.textField}
            errorMessages={['This field is required']}
            label='Name'
            margin='normal'
            name='Name'
            onChange={handleChange('name')}
            value={fields.name}
            validators={['required']}
          />

          <TextValidator
            className={classes.textField}
            errorMessages={['This field is required', 'Email is not valid']}
            label='Email'
            margin='normal'
            name='Email'
            onChange={handleChange('email')}
            value={fields.email}
            validators={['required', 'isEmail']}
          />
        </ValidatorForm>
      </FormDialog>

      <Table header={tableHeader} rows={tableData} />
      <div style={{ display: 'flex', justifyContent: 'flex-end' }}>
        <Fab
          aria-label='Add'
          className={classes.fab}
          color='primary'
          onClick={handleToggleDialog}>
          <AddIcon />
        </Fab>
      </div>
    </>
  )
}

Dashboard.propTypes = {
  classes: t.object.isRequired
}

export default withStyles(styles)(Dashboard)
