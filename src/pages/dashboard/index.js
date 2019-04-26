import React, { useCallback, useState } from 'react'
import t from 'prop-types'
import withStyles from '@material-ui/core/styles/withStyles'
import AddIcon from '@material-ui/icons/Add'

import Fab from 'components/fab'
import FormDialog from 'components/form-dialog'
import Table from 'components/table'
import ThesesForm from 'pages/forms/theses'

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
  const [showDialog, toggleDialog] = useState(false)

  const handleToggleDialog = useCallback(() => toggleDialog(!showDialog))

  return (
    <>
      <FormDialog
        handleToggleDialog={handleToggleDialog}
        invalidForm
        mode='Save'
        showDialog={showDialog}
        title='Teste'
      >
        <ThesesForm />
      </FormDialog>

      <Table header={tableHeader} rows={tableData} />
      <Fab
        ariaLlabel='Add'
        InnerIcon={AddIcon}
        onClick={handleToggleDialog}
      />
    </>
  )
}

Dashboard.propTypes = {
  classes: t.object.isRequired
}

export default withStyles(styles)(Dashboard)
