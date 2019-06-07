import React, { forwardRef } from 'react'
import { NavLink } from 'react-router-dom'

export default forwardRef((props, ref) => <NavLink innerRef={ref} {...props} />)
