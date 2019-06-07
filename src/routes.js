import { lazy } from 'react'

import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined'
import GroupIcon from '@material-ui/icons/GroupOutlined'
import PersonIcon from '@material-ui/icons/PersonOutlined'

export const mainRoutes = [
  {
    path: '/',
    component: lazy(() => import('pages/main')),
    layout: ''
  },
  {
    path: '/about-us',
    component: lazy(() => import('pages/about-us')),
    layout: ''
  }
]

export const dashboardRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: lazy(() => import('pages/dashboard')),
    layout: '/dashboard',
    onlyAdmin: false
  },
  /* {
    path: '/notifications',
    name: 'Notifications',
    icon: NotificationsIcon,
    component: NotificationsPage,
    layout: '/dashboard',
    onlyAdmin: true
  },
  */
  {
    path: '/people',
    name: 'People',
    icon: GroupIcon,
    component: lazy(() => import('pages/people')),
    layout: '/dashboard',
    exact: true,
    onlyAdmin: true
  },
  {
    path: '/users',
    name: 'Users',
    icon: GroupIcon,
    component: lazy(() => import('pages/users')),
    layout: '/dashboard',
    exact: true,
    onlyAdmin: true
  },
  {
    path: '/posts',
    name: 'Posts',
    icon: DescriptionIcon,
    component: lazy(() => import('pages/posts')),
    layout: '/dashboard',
    onlyAdmin: false
  },
  {
    path: '/account',
    name: 'Account',
    component: lazy(() => import('pages/account')),
    icon: PersonIcon,
    layout: '/dashboard',
    onlyAdmin: false
  }
]

export const innerRoutes = []
