//import entities
import { Search } from '@/widgets/header/ui/search'

//import components
import { Logo } from './logo'

//import icons
import { BellIcon, HamburgerMenuIcon, PersonIcon, UploadIcon } from '@radix-ui/react-icons'
import MicrophoneIcon from '@/widgets/header/assets/icons/microphone.svg'
import { Icon } from '@/shared/ui/icon'

export const Header = () => (
  <div className="flex items-center justify-between h-14 px-4 bg-header-black">
    <div className="flex items-center h-full w-full">
      <div className="flex items-center justify-center rounded-full transition ease-out duration-300 active:bg-dark-gray w-10 h-10 border-header-black border-[1px]">
        <Icon>
          <HamburgerMenuIcon className="w-6 h-6" />
        </Icon>
      </div>
      <Logo />
    </div>
    <Search />
    <div className="flex h-full w-full min-w-[25%] ml-3 items-center justify-between">
      <div>
        <Icon className="rounded-full bg-feed-black w-10 h-9">
          <img className="w-5 h-5" src={MicrophoneIcon} alt="microphone" />
        </Icon>
      </div>
      <div className="flex items-center">
        <Icon className='mr-8'>
          <UploadIcon className="w-5 h-5" />
        </Icon>
        <Icon className='mr-8'>
          <BellIcon className="w-5 h-5" />
        </Icon>
        <Icon className='rounded-full bg-feed-black w-9 h-9'>
          <PersonIcon className="w-7 h-7" />
        </Icon>
      </div>
    </div>
  </div>
)
