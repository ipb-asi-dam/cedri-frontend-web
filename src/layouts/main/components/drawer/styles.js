export default (theme) => ({
  drawerPaper: {
    width: '271px',
    zIndex: 1200,
    padding: `${theme.spacing(4)}px ${theme.spacing(3)}px`
  },
  drawerItem: {
    color: theme.palette.text.secondary,
    fontWeight: 500,
    '&:hover': {
      backgroundColor: '#eee'
    }
  },
  itemActiveItem: {
    borderLeft: `4px solid ${theme.palette.primary.main}`,
    borderRadius: '4px',
    backgroundColor: theme.palette.primary.light,
    '& $drawerItemText': {
      color: theme.palette.text.primary
    }
  },
  drawerItemText: {
    fontSize: `${theme.spacing(2.5)}px`
  }
})
