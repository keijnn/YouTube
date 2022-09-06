//import modules
import { createRoute } from 'atomic-router'

//import widgets
import { Feed } from '@/widgets/feed'

const route = createRoute()

const Page = () => (
  <>
    <Feed />
    123
  </>
)

export const MainPage = {
  route,
  Page,
}
