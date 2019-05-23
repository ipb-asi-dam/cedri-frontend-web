import DashboardIcon from '@material-ui/icons/Dashboard'
import DescriptionIcon from '@material-ui/icons/Description'
// import CopyrightIcon from '@material-ui/icons/Copyright'
// import LocalPlayIcon from '@material-ui/icons/LocalPlay'
import GroupIcon from '@material-ui/icons/Group'
import NotificationsIcon from '@material-ui/icons/Notifications'
// import ForumIcon from '@material-ui/icons/Forum'
// import SchoolIcon from '@material-ui/icons/School'

import DashboardPage from 'pages/dashboard'
import NotificationsPage from 'pages/notifications'
// import IntelectualProperty from 'pages/intelectual-property'
import UsersPage from 'pages/users'
import PeoplePage from 'pages/people'
import PostsPage from 'pages/posts'
// import PublicationsPage from 'pages/publications'
// import CommunicationsPage from 'pages/communications'
// import ThesisPage from 'pages/thesis'
// import AwardsPage from 'pages/awards'

export const dashboardRoutes = [
  {
    path: '/',
    name: 'Dashboard',
    icon: DashboardIcon,
    component: DashboardPage,
    layout: '/dashboard',
    onlyAdmin: false
  },
  {
    path: '/notifications',
    name: 'Notifications',
    icon: NotificationsIcon,
    component: NotificationsPage,
    layout: '/dashboard',
    onlyAdmin: true
  },
  {
    path: '/people',
    name: 'People',
    icon: GroupIcon,
    component: PeoplePage,
    layout: '/dashboard',
    exact: true,
    onlyAdmin: true
  },
  {
    path: '/users',
    name: 'Users',
    icon: GroupIcon,
    component: UsersPage,
    layout: '/dashboard',
    exact: true,
    onlyAdmin: true
  }, /* {
    path: '/intelectual-property',
    name: 'Intelectual Property',
    icon: CopyrightIcon,
    component: IntelectualProperty,
    layout: '/dashboard',
    onlyAdmin: false
  },
  {
    path: '/thesis',
    name: 'Thesis',
    icon: SchoolIcon,
    component: ThesisPage,
    layout: '/dashboard',
    onlyAdmin: false
  },
  {
    path: '/awards',
    name: 'Awards',
    icon: LocalPlayIcon,
    component: AwardsPage,
    layout: '/dashboard',
    onlyAdmin: false
  },
  {
    path: '/publications',
    name: 'Publications',
    icon: DescriptionIcon,
    component: PublicationsPage,
    layout: '/dashboard',
    onlyAdmin: false
  },
  {
    path: '/communications',
    name: 'Communications',
    icon: ForumIcon,
    component: CommunicationsPage,
    layout: '/dashboard',
    onlyAdmin: true
  } */
  {
    path: '/posts',
    name: 'Posts',
    icon: DescriptionIcon,
    component: PostsPage,
    layout: '/dashboard',
    onlyAdmin: false
  }
]

export const innerRoutes = []
