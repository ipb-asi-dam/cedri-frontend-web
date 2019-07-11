import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  root: {
    [theme.breakpoints.down('md')]: {
      '& img': {
        width: '100%'
      }
    }
  }
})

export default makeStyles(styles)
