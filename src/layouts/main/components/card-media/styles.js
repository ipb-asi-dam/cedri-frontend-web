import makeStyles from '@material-ui/core/styles/makeStyles'

const styles = (theme) => ({
  container: {
    paddingBottom: 4,
    paddingRight: 24,
    '& a': {
      textDecoration: 'none'
    }
  },
  card: {
    // height: 300,
    // width: 250,
    '&:hover': {
      cursor: 'pointer'
    },
    [theme.breakpoints.up('md')]: {
      '&:hover': {
        borderBottom: '2px solid rgba(0,0,0,0.35)',
        marginTop: -3
      }
    }
  },
  cardImage: {
    backgroundColor: 'lightgray',
    height: 200
  },
  titleContainer: {
    // height: 100,
    maxWidth: '100%',
    overflow: 'hidden',
    textAlign: 'left',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap',
    width: 240
  }
})

export default makeStyles(styles)
