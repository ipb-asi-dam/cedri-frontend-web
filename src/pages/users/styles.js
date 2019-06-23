import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  toolbar: {
    display: 'flex',
    justifyContent: 'flex-end',
    marginBottom: theme.spacing(3)
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
  }
})

export default makeStyles(styles)
