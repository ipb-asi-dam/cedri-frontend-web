import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  container: {
    display: 'block',
    width: '100%'
  },
  button: {
    height: theme.spacing(5),
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
    '& + &': {
      marginLeft: 10
    }
  },
  submitingLabel: {
    display: 'flex',
    alignItems: 'center',
    '& > .MuiCircularProgress-indeterminate': {
      marginLeft: 10
    }
  }
})

export default makeStyles(styles)
