import { fade } from '@material-ui/core/styles/colorManipulator'

export default (theme) => ({
  container: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'center',
    minHeight: '100vh',
    padding: theme.spacing(5)
  },
  image: {
    height: '60%',
    width: '60%'
  },
  text: {
    alignItems: 'center',
    display: 'flex',
    flexDirection: 'column',
    '& > button': {
      borderColor: theme.palette.primary.main,
      color: theme.palette.primary.main,
      marginTop: theme.spacing(1),
      '&:hover': {
        backgroundColor: fade(theme.palette.primary.main, 0.15)
      }
    }
  }
})
