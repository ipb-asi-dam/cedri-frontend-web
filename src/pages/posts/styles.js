import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  menu: {
    maxHeight: 300
  },
  toolbar: {
    marginBottom: theme.spacing(3),
    '& button': {
      height: '100%'
    }
  },
  root: {
    color: theme.palette.primary
  },
  dialog: {
    padding: theme.spacing(4)
  }
})

export default makeStyles(styles)
