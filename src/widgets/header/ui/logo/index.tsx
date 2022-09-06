//import pages
import { MainPage } from '@/pages/main'

//import routes
import { NavigationLink } from '../link'

//import icons
import YouTube from '@/widgets/header/assets/images/youtube.png'

export const Logo = () => (
  <NavigationLink className="h-full" url={MainPage.route}>
    <div className="flex items-center h-full cursor-pointer">
      <img className="w-9 h-8 ml-3" src={YouTube} alt="main page" />
      <div className="flex py-1 h-full text-white">
        <h1 className="self-center tracking-tighter text-xl">YouTube</h1>
        <p className="text-[#7D7D7D] ml-1 text-[0.7rem]">ENG</p>
      </div>
    </div>
  </NavigationLink>
)
