import Dashboard from '@material-ui/icons/Dashboard'
import Description from '@material-ui/icons/Description'
import Group from '@material-ui/icons/Group'

import DashboardPage from 'pages/dashboard'
import PeoplePage from 'pages/people'
import PeopleDetailPage from 'pages/people-detail'
import PublicationsPage from 'pages/publications'
import BookForm from 'pages/forms/publications/book'
import BookChapterForm from 'pages/forms/publications/book-chapter'
import EditorialForm from 'pages/forms/publications/editorial'
import ProceedingForm from 'pages/forms/publications/proceeding'
import JournalForm from 'pages/forms/publications/journal'
import PatentForm from 'pages/forms/intelectual-property/patent'
import SoftwareForm from 'pages/forms/intelectual-property/software'
import ThesesForm from 'pages/forms/theses'
import AwardsForm from 'pages/forms/award'
import EventForm from 'pages/forms/communication/event'
import NewsForm from 'pages/forms/communication/news'
import MediaForm from 'pages/forms/communication/media'

export const dashboardRoutes = [
  {
    id: 'Overview',
    children: [
      {
        path: '/',
        name: 'Dashboard',
        icon: Dashboard,
        component: DashboardPage,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/people',
        name: 'People',
        icon: Group,
        component: PeoplePage,
        layout: '/dashboard',
        exact: true,
        onlyAdmin: true
      },
      {
        path: '/software',
        name: 'Software',
        icon: Description,
        component: SoftwareForm,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/theses',
        name: 'Theses',
        icon: Description,
        component: ThesesForm,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/awards',
        name: 'Awards',
        icon: Description,
        component: AwardsForm,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/patents',
        name: 'Patents',
        icon: Description,
        component: PatentForm,
        layout: '/dashboard',
        onlyAdmin: false
      }
    ]
  },
  {
    id: 'Publications',
    children: [
      {
        path: '/publications',
        name: 'Publications',
        icon: Description,
        component: PublicationsPage,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/journals',
        name: 'Journals',
        icon: Description,
        component: JournalForm,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/books',
        name: 'Books',
        icon: Description,
        component: BookForm,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/book-chapter',
        name: 'Book Chapter',
        icon: Description,
        component: BookChapterForm,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/editorial',
        name: 'Editorial',
        icon: Description,
        component: EditorialForm,
        layout: '/dashboard',
        onlyAdmin: false
      },
      {
        path: '/proceeding',
        name: 'Proceeding',
        icon: Description,
        component: ProceedingForm,
        layout: '/dashboard',
        onlyAdmin: false
      }
    ]
  },
  {
    id: 'Communication',
    children: [
      {
        path: '/events',
        name: 'Events',
        icon: Description,
        component: EventForm,
        layout: '/dashboard',
        onlyAdmin: true
      },
      {
        path: '/news',
        name: 'News',
        icon: Description,
        component: NewsForm,
        layout: '/dashboard',
        onlyAdmin: true
      },
      {
        path: '/media',
        name: 'Media',
        icon: Description,
        component: MediaForm,
        layout: '/dashboard',
        onlyAdmin: true
      }
    ]
  }
]

export const innerRoutes = [{
  children: [{
    path: '/people/:id',
    component: PeopleDetailPage,
    layout: '/dashboard',
    onlyAdmin: true
  }]
}]
