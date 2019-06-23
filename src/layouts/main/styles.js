export default (theme) => ({
  app: {
    display: 'flex',
    flexDirection: 'column',
    height: '100%',
    minHeight: '100vh'
  },
  header: {
    alignItems: 'center',
    backgroundColor: theme.palette.primary.main,
    color: theme.palette.common.white,
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'center',
    padding: '72px 0',
    textAlign: 'center'
  },
  main: {
    flex: 1,
    paddingTop: 64,
    [theme.breakpoints.down('md')]: {
      paddingTop: 56
    }
  },
  mainContent: {
    margin: '0 auto',
    maxWidth: '80%',
    padding: 20,
    textAlign: 'justify'
  }
})
