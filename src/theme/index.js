import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import overrides from './overrides'
import palette from './palette'
import typography from './typography'

export default createMuiTheme({
  palette,
  overrides,
  typography: {
    ...typography,
    useNextVariants: true
  },
  zIndex: {
    appBar: 1200,
    drawer: 1100
  }
})
