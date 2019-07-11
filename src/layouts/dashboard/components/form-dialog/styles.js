import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  appBar: {
    position: 'relative'
  },
  content: {
    [theme.breakpoints.between('xs', 'md')]: {
      padding: theme.spacing(3)
    },
    [theme.breakpoints.up('md')]: {
      padding: theme.spacing(2, 24)
    }
  },
  dialog: {
    backgroundColor: theme.palette.background.default
  },
  toolbar: {
    backgroundColor: theme.palette.background.paper
  },
  paperWrapper: {
    marginTop: theme.spacing(3),
    padding: theme.spacing(0, 4)
  },
  label: {
    textTransform: 'uppercase'
  }
})

export default makeStyles(styles)
