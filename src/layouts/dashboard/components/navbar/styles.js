export default theme => ({
  root: {
    borderBottom: `1px solid ${theme.palette.border}`,
    backgroundColor: theme.palette.common.white,
    display: 'flex',
    alignItems: 'center',
    height: '64px',
    zIndex: theme.zIndex.appBar
  },
  toolbar: {
    minHeight: 'auto',
    width: '100%'
  },
  title: {
    marginLeft: theme.spacing(1)
  },
  menuButton: {
    marginLeft: '-4px'
  },
  homeButton: {
    marginLeft: 'auto',
    '& a': {
      color: 'inherit',
      textAlign: 'center',
      '& svg': {
        verticalAlign: 'middle'
      }
    }
  },
  signOutButton: {
    marginLeft: theme.spacing(1)
  }
})
