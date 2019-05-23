export default (theme) => ({
  card: {
    width: 220
  },
  cardTitle: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
    whiteSpace: 'nowrap'
  },
  media: {
    height: 200
  },
  root: {
    maxWidth: 360,
    backgroundColor: theme.palette.background.paper,
    justifyContent: 'center',
    width: '100%'
  }
})
