import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  app: {
    height: '100%',
    minHeight: '100vh'
  },
  flexColumn: {
    display: 'flex',
    flexDirection: 'column'
  },
  header: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    marginBottom: theme.spacing(3),
    padding: '72px 0',
    textAlign: 'center'
  },
  main: {
    backgroundColor: theme.palette.primary.light,
    flex: 1,
    paddingTop: 64,
    [theme.breakpoints.down('md')]: {
      paddingTop: 56
    },
    '& a': {
      color: theme.palette.primary.main,
      textDecoration: 'none'
    }
  },
  mainContent: {
    margin: '0 auto',
    maxWidth: '80%',
    padding: 20,
    textAlign: 'justify'
  }
})

export default makeStyles(styles)
