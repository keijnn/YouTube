//import modules
import { createHistoryRouter } from 'atomic-router'
import { Route, RouterProvider } from 'atomic-router-react'
import { createBrowserHistory } from 'history'

//import pages
import { MainPage } from './main'
import { VideoPage } from './video'

//import layouts
import { MainLayout } from '@/layouts/main-layout'

const routes = [
  { path: '/', route: MainPage.route },
  { path: '/watch:id', route: VideoPage.route },
]

const router = createHistoryRouter({ routes })

const history = createBrowserHistory()

router.setHistory(history)

export const Routing = () => (
  <RouterProvider router={router}>
    <MainLayout>
      <Route route={MainPage.route} view={MainPage.Page} />
      <Route route={VideoPage.route} view={VideoPage.Page} />
    </MainLayout>
  </RouterProvider>
)
