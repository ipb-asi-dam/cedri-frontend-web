import React, { createContext, useCallback, useState } from 'react'
import PropTypes from 'prop-types'

import MuiSnackbar from '@material-ui/core/Snackbar'
import IconButton from '@material-ui/core/IconButton'

import Icon from 'components/icon'
import { ic_close as CloseIcon } from 'react-icons-kit/md/ic_close'

export const SnackbarContext = createContext()

const SNACK_TIMEOUT_MS = 5000

function Snackbar ({ children }) {
  const [notification, setState] = useState(null)

  const closeToast = useCallback(() => setState(null), [])

  const showNotification = useCallback((content) => {
    setState((
      <MuiSnackbar
        action={(
          <IconButton
            aria-label='Close'
            color='inherit'
            onClick={closeToast}
          >
            <Icon icon={CloseIcon} />
          </IconButton>
        )}
        anchorOrigin={{
          vertical: 'bottom',
          horizontal: 'right'
        }}
        message={content}
        onClose={closeToast}
        open
      />
    ))
    setTimeout(closeToast, SNACK_TIMEOUT_MS)
  }, [closeToast])

  return (
    <SnackbarContext.Provider value={{
      notification,
      showNotification
    }}>
      {children}
    </SnackbarContext.Provider>
  )
}

Snackbar.propTypes = {
  children: PropTypes.node.isRequired
}

export default Snackbar
