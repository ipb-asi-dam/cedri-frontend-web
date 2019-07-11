import { lazy } from 'react'

export default [
  {
    path: '/',
    component: lazy(() => import('pages/home')),
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
        component: lazy(() => import('pages/about-us/mission')),
        exact: true
      },
      {
        path: '/about-us/structure',
        title: 'Structure',
        component: lazy(() => import('pages/about-us/structure')),
        exact: true
      },
      {
        path: '/about-us/extadvboard',
        title: 'External Advisory Board',
        component: lazy(() => import('pages/about-us/extadvboard')),
        exact: true
      },
      {
        path: '/about-us/laboratories',
        title: 'Laboratories',
        component: lazy(() => import('pages/about-us/laboratories')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lca',
        component: lazy(() => import('pages/about-us/laboratories/lca')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lcgav',
        component: lazy(() => import('pages/about-us/laboratories/lcgav')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lcar',
        component: lazy(() => import('pages/about-us/laboratories/lcar')),
        exact: true
      },
      {
        path: '/about-us/laboratories/le',
        component: lazy(() => import('pages/about-us/laboratories/le')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lic',
        component: lazy(() => import('pages/about-us/laboratories/lic')),
        exact: true
      },
      {
        path: '/about-us/laboratories/lse',
        component: lazy(() => import('pages/about-us/laboratories/lse')),
        exact: true
      },
      {
        path: '/about-us/factsfigures',
        title: 'Facts & Figures',
        component: lazy(() => import('pages/about-us/factfigures')),
        exact: true
      },
      {
        path: '/about-us/workwithus',
        title: 'Work with us',
        component: lazy(() => import('pages/about-us/workwithus')),
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
        path: '/r&d/researchtopics/iecps',
        component: lazy(() => import('pages/research-innovation/researchtopics/iecps')),
        exact: true
      },
      {
        path: '/r&d/researchtopics/isda',
        component: lazy(() => import('pages/research-innovation/researchtopics/isda')),
        exact: true
      },
      {
        path: '/r&d/researchtopics/icrs',
        component: lazy(() => import('pages/research-innovation/researchtopics/icrs')),
        exact: true
      },
      {
        path: '/r&d/researchtopics/msods',
        component: lazy(() => import('pages/research-innovation/researchtopics/msods')),
        exact: true
      },
      {
        title: 'Projects',
        path: '/r&d/projects',
        component: lazy(() => import('pages/research-innovation/projects')),
        routes: [
          {
            path: '/r&d/projects/international',
            title: 'International',
            component: lazy(() => import('pages/research-innovation/projects/international')),
            exact: true
          },
          {
            path: '/r&d/projects/national',
            title: 'National',
            component: lazy(() => import('pages/research-innovation/projects/national')),
            exact: true
          },
          {
            path: '/r&d/projects/others',
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
    routes: [
      {
        path: '/communication/news',
        title: 'News',
        component: lazy(() => import('pages/communication/news')),
        exact: true
      },
      {
        path: '/communication/events',
        title: 'Events',
        component: lazy(() => import('pages/communication/events')),
        exact: true
      },
      {
        path: '/communication/media',
        title: 'Media',
        component: lazy(() => import('pages/communication/media')),
        exact: true
      }
    ]
  },
  {
    title: 'People',
    path: '/people',
    component: lazy(() => import('pages/people'))
  },
  {
    title: 'Outcomes',
    path: '/outcomes',
    component: lazy(() => import('pages/outcomes')),
    routes: [
      {
        path: '/outcomes/publications/journal',
        title: 'Publications',
        component: lazy(() => import('pages/outcomes/publications')),
        routes: [
          {
            path: '/outcomes/publications/book',
            title: 'Book',
            component: lazy(() => import('pages/outcomes/publications/book')),
            exact: true
          },
          {
            path: '/outcomes/publications/book-chapter',
            title: 'Book Chapter',
            component: lazy(() => import('pages/outcomes/publications/book-chapter')),
            exact: true
          },
          {
            path: '/outcomes/publications/editorial',
            title: 'Editorial',
            component: lazy(() => import('pages/outcomes/publications/editorial')),
            exact: true
          },
          {
            path: '/outcomes/publications/journal',
            title: 'Journal',
            component: lazy(() => import('pages/outcomes/publications/journal')),
            exact: true
          },
          {
            path: '/outcomes/publications/proceeding',
            title: 'Proceeding',
            component: lazy(() => import('pages/outcomes/publications/proceeding')),
            exact: true
          }
        ]
      },
      {
        path: '/outcomes/intellectual-property',
        title: 'Intellectual Property',
        component: lazy(() => import('pages/outcomes/publications')),
        routes: [
          {
            path: '/outcomes/intellectual-property/patents',
            title: 'Patents',
            component: lazy(() => import('pages/outcomes/intellectual-property/patents')),
            exact: true
          },
          {
            path: '/outcomes/intellectual-property/software',
            title: 'Software',
            component: lazy(() => import('pages/outcomes/intellectual-property/software')),
            exact: true
          }
        ]
      },
      {
        title: 'Theses',
        path: '/outcomes/theses',
        component: lazy(() => import('pages/outcomes/theses/phd')),
        routes: [
          {
            title: 'PhD',
            path: '/outcomes/theses/phd',
            component: lazy(() => import('pages/outcomes/theses/phd')),
            exact: true
          },
          {
            title: 'Msc',
            path: '/outcomes/theses/msc',
            component: lazy(() => import('pages/outcomes/theses/msc')),
            exact: true
          }
        ]
      },
      {
        path: '/outcomes/awards',
        title: 'Awards',
        component: lazy(() => import('pages/outcomes/awards')),
        exact: true
      }
    ]
  },
  {
    path: '/contacts',
    title: 'Contacts',
    component: lazy(() => import('pages/contacts'))
  }
]
