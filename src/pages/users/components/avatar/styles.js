export default (theme) => ({
  avatar: {
    backgroundColor: theme.palette.primary.main,
    display: 'inline-flex',
    fontSize: '14px',
    fontWeight: 500,
    height: '36px',
    width: '36px'
  },
  nameText: {
    marginLeft: theme.spacing(2),
    fontWeight: 500,
    cursor: 'pointer'
  },
  tableCellInner: {
    display: 'flex',
    alignItems: 'center'
  }
})
