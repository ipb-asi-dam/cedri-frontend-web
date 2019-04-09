import Dashboard from '@material-ui/icons/Dashboard'
import Notifications from '@material-ui/icons/Notifications'

import DashboardPage from 'pages/dashboard'
import FormPage from 'pages/form'

const dashboardRoutes = [{
  id: 'Overview',
  children: [
    {
      path: '/dashboard',
      name: 'Dashboard',
      icon: Dashboard,
      component: DashboardPage,
      layout: '/admin'
    },
    {
      path: '/form',
      name: 'Form',
      icon: Notifications,
      component: FormPage,
      layout: '/admin'
    }
  ]
}]

export default dashboardRoutes
