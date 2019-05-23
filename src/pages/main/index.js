import React, { useState } from 'react'
import PropTypes from 'prop-types'
import Chip from '@material-ui/core/Chip'
import Paper from '@material-ui/core/Paper'
import TextField from '@material-ui/core/TextField'
import withStyles from '@material-ui/core/styles/withStyles'

const styles = theme => ({
  root: {
    display: 'flex',
    justifyContent: 'center',
    flexWrap: 'wrap',
    padding: theme.spacing(0.5)
  },
  chip: {
    margin: theme.spacing(0.5)
  },
  input: {
    width: '100%'
  }
})

function ChipsArray ({ classes }) {
  const [text, setText] = useState('')
  const [chipData, setState] = useState([
    { key: 0, label: 'Angular' },
    { key: 1, label: 'jQuery' },
    { key: 2, label: 'Polymer' },
    { key: 3, label: 'React' },
    { key: 4, label: 'Vue.js' }
  ])

  const addChip = (label) => setState([...chipData, { key: new Date().getTime(), label }])

  const handleDelete = (data) => () => {
    setState(chipData.filter(({ key }) => key !== data.key))
  }

  const handleTextChange = (e) => setText(e.target.value)
  const createChip = (e) => {
    if (e.keyCode === 13 && text) {
      addChip(text)
      setText('')
    }
  }
  return (
    <Paper className={classes.root}>
      <div>
        {chipData.map(data => {
          return (
            <Chip
              key={data.key}
              label={data.label}
              onDelete={handleDelete(data)}
              className={classes.chip}
            />
          )
        })}
        <TextField
          className={classes.input}
          onChange={handleTextChange}
          onKeyUp={createChip}
          value={text}
        />
      </div>
    </Paper>
  )
}

ChipsArray.propTypes = {
  classes: PropTypes.object.isRequired
}

export default withStyles(styles)(ChipsArray)
