import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  htmlContainer: {
    '& > p': {
      display: 'inline'
    }
  }
})

export default makeStyles(styles)
