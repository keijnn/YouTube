//import modules
import { ReactNode } from 'react'

//import widgets
import { Header } from '@/widgets/header'
import { SideBar } from '@/widgets/side-bar'

interface MainLayoutProps {
  children: ReactNode
}

export const MainLayout = ({ children }: MainLayoutProps) => (
  <>
    <Header />
    <div style={{ height: 'calc(100% - 3.5rem)' }} className="flex">
      <SideBar />
      {children}
    </div>
  </>
)
