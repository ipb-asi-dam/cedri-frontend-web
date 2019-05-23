import { primary } from 'theme/colors'
import palette from 'theme/palette'

export default {
  root: {
    backgroundColor: palette.background.default,
    '&:hover': {
      backgroundColor: primary.light
    },
    '&$focused': {
      backgroundColor: primary.light
    }
  }
}
