export default (theme) => ({
  button: {
    marginTop: theme.spacing(3),
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
    alignSelf: 'flex-end',
    color: '#0767db',
    fontSize: theme.spacing(1.8),
    marginTop: theme.spacing(1),
    textDecoration: 'none'
  }
})
