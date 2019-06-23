import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('pages/main')),
    exact: true
  },
  {
    path: '/about-us',
    title: 'About Us',
    component: lazy(() => import('pages/about-us')),
    routes: [
      {
        path: '/about-us/mission',
        title: 'Mission',
        component: lazy(() => import('pages/about-us/components/mission')),
        exact: true
      },
      {
        path: '/about-us/structure',
        title: 'Structure',
        component: lazy(() => import('pages/about-us/components/structure')),
        exact: true
      },
      {
        path: '/about-us/extadvboard',
        title: 'External Advisory Board',
        component: lazy(() => import('pages/about-us/components/extadvboard')),
        exact: true
      },
      {
        path: '/about-us/laboratories',
        title: 'Laboratories',
        component: lazy(() => import('pages/about-us/components/laboratories')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lca',
        component: lazy(() => import('pages/about-us/components/laboratories/components/lca')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lcgav',
        component: lazy(() => import('pages/about-us/components/laboratories/components/lcgav')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lcar',
        component: lazy(() => import('pages/about-us/components/laboratories/components/lcar')),
        exact: true
      },
      {
        path: '/about-us/laboratories/le',
        component: lazy(() => import('pages/about-us/components/laboratories/components/le')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lic',
        component: lazy(() => import('pages/about-us/components/laboratories/components/lic')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lse',
        component: lazy(() => import('pages/about-us/components/laboratories/components/lse')),
        exact: true
      },
      {
        path: '/about-us/factsfigures',
        title: 'Facts & Figures',
        component: lazy(() => import('pages/about-us/components/factfigures')),
        exact: true
      },
      {
        path: '/about-us/workwithus',
        title: 'Work with us',
        component: lazy(() => import('pages/about-us/components/workwithus')),
        exact: true
      }
    ]
  },
  {
    path: '/r&d',
    title: 'Research & Innovation',
    component: lazy(() => import('pages/research-innovation')),
    routes: [
      {
        path: '/r&d/partnersnetworks',
        title: 'Partners & Networks',
        component: lazy(() => import('pages/research-innovation/partnersnetworks')),
        exact: true
      },
      {
        path: '/r&d/researchtopics',
        title: 'Research Topics',
        component: lazy(() => import('pages/research-innovation/researchtopics')),
        exact: true
      },
      {
        path: '/r&d/projects',
        title: 'Projects',
        component: lazy(() => import('pages/research-innovation/projects/international')),
        routes: [
          {
            path: '/r&d/projects_international',
            title: 'International',
            component: lazy(() => import('pages/research-innovation/projects/international')),
            exact: true
          },
          {
            path: '/r&d/projects_national',
            title: 'National',
            component: lazy(() => import('pages/research-innovation/projects/national')),
            exact: true
          },
          {
            path: '/r&d/projects_others',
            title: 'Others',
            component: lazy(() => import('pages/research-innovation/projects/others')),
            exact: true
          }
        ]
      }
    ]
  },
  {
    title: 'Communication',
    path: '/communication',
    component: lazy(() => import('pages/communication')),
    routes: []
  },
  {
    title: 'People',
    path: '/people',
    component: lazy(() => import('pages/people')),
    routes: []
  },
  {
    title: 'Outcomes',
    path: '/outcomes',
    component: lazy(() => import('pages/outcomes')),
    routes: []
  },
  {
    path: '/contacts',
    title: 'Contacts',
    component: lazy(() => import('pages/contacts'))
  }
]
