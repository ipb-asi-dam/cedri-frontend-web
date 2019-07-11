import React from 'react'
import PropTypes from 'prop-types'

import NavLink from 'components/nav-link'

const InnerSidebar = (routes) => (
  routes.map(({
    routes: nestedRoutes = [],
    ...route
  }) => nestedRoutes.length > 0
    ? (
      <li key={route.title}>
        <NavLink
          to={nestedRoutes[0].title
            ? nestedRoutes[0].path
            : route.path
          }
        >
          {route.title}
        </NavLink>
        <ul style={{ listStyle: 'none' }}>
          {InnerSidebar(nestedRoutes)}
        </ul>
      </li>
    )
    : route.title && (
      <li key={route.path}>
        <NavLink to={route.path}>
          {route.title}
        </NavLink>
      </li>
    )
  )
)

InnerSidebar.propTypes = {
  routes: PropTypes.array.isRequired
}

export default InnerSidebar
