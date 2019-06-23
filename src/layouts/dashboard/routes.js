import { lazy } from 'react'

import DashboardIcon from '@material-ui/icons/DashboardOutlined'
import DescriptionIcon from '@material-ui/icons/DescriptionOutlined'
import GroupIcon from '@material-ui/icons/GroupOutlined'
import PersonIcon from '@material-ui/icons/PersonOutlined'

export default [
  {
    path: '/dashboard/',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: lazy(() => import('pages/dashboard')),
    onlyAdmin: false,
    exact: true
  },
  {
    path: '/dashboard/users',
    name: 'Users',
    icon: GroupIcon,
    component: lazy(() => import('pages/users')),
    onlyAdmin: true
  },
  {
    path: '/dashboard/posts',
    name: 'Posts',
    icon: DescriptionIcon,
    component: lazy(() => import('pages/posts')),
    onlyAdmin: false
  },
  {
    path: '/dashboard/account',
    name: 'Account',
    component: lazy(() => import('pages/account')),
    icon: PersonIcon,
    onlyAdmin: false
  }
]
