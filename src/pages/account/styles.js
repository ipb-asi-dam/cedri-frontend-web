import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  root: {

  },
  avatar: {
    borderRadius: '50%',
    height: '100px',
    width: '100px'
  },
  avatarBtn: {
    opacity: 0,
    cursor: 'pointer',
    position: 'absolute',
    '&:hover': {
      border: '1px solid grey',
      zIndex: 100
    }
  },
  formBtn: {
    display: 'flex',
    justifyContent: 'center',
    padding: `10px ${theme.spacing(3)}px`,
    width: '100%'
  }
})

export default makeStyles(styles)
