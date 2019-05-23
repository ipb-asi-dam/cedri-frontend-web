import createMuiTheme from '@material-ui/core/styles/createMuiTheme'

import overrides from 'theme/overrides'
import palette from 'theme/palette'
import typography from 'theme/typography'

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
