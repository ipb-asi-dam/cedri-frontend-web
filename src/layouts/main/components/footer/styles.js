
export default (theme) => ({
  footer: {
    background: theme.palette.common.neutral,
    padding: `${theme.spacing(3)}px 0`
  },
  firstLine: {
    alignItems: 'center',
    display: 'flex',
    flexWrap: 'wrap',
    justifyContent: 'space-around',
    [theme.breakpoints.down('sm')]: {
      '& > div': {
        marginBottom: theme.spacing(1)
      }
    }
  },
  secondLine: {
    display: 'flex',
    justifyContent: 'center',
    margin: `${theme.spacing(2)}px 0`,
    textAlign: 'center',
    '& a': {
      color: 'inherit',
      textDecoration: 'none',
      '&:hover': {
        textDecoration: 'underline'
      }
    },
    '& .contacts': {
      display: 'flex',
      justifyContent: 'center',
      '& a': {
        marginRight: theme.spacing(1)
      }
    },
    [theme.breakpoints.down('xs')]: {
      display: 'block',
      '& .contacts, & .social': {
        display: 'block',
        margin: '10px 0'
      }
    }
  },
  icon: {
    color: theme.palette.common.black,
    height: '32px',
    width: '32px',
    '&:hover': {
      color: theme.palette.primary.main
    },
    '& + a': {
      marginLeft: 10
    }
  }
})
