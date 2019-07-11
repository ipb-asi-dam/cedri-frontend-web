import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  root: {
    '& nav, & nav ul': {
      listStyle: 'none'
    }
  }
})

export default makeStyles(styles)
