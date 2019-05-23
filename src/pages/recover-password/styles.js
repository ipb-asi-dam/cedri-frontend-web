export default (theme) => ({
  button: {
    marginTop: theme.spacing(2.5),
    textTransform: 'uppercase'
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
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-around',
    width: '20rem'
  },
  link: {
    alignSelf: 'center',
    color: '#0767db',
    fontSize: theme.spacing(1.8),
    paddingTop: theme.spacing(1.8),
    textDecoration: 'none'
  }
})
