import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  menu: {
    maxHeight: 300
  },
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(3)
  },
  dialog: {
    padding: theme.spacing(4)
  }
})

export default makeStyles(styles)
