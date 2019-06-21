import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  button: {
    marginTop: theme.spacing(4),
    textTransform: 'uppercase',
    width: '60%'
  },
  card: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'center',
    overflow: 'hidden',
    padding: '3.2rem'
  },
  container: {
    alignItems: 'center',
    backgroundColor: '#4369ab',
    display: 'flex',
    flexDirection: 'column',
    height: '100vh',
    justifyContent: 'center'
  },
  flex: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    width: '20rem'
  },
  link: {
    color: '#0767db',
    fontSize: theme.spacing(1.5),
    marginTop: theme.spacing(1),
    textDecoration: 'none',
    '&.forget-password': {
      alignSelf: 'flex-end',
      fontSize: theme.spacing(1.8)
    }
  }
})

export default makeStyles(styles)
