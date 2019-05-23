export default (theme) => ({
  container: {
    display: 'flex',
    justifyContent: 'flex-end'
  },
  button: {
    marginTop: theme.spacing(3),
    marginBottom: theme.spacing(2),
    textTransform: 'uppercase',
    '& + &': {
      marginLeft: 10
    }
  }
})
