import clsx from 'clsx'

interface SideBarProps {
  className?: string
}

export const SideBar = ({ className }: SideBarProps) => (
  <div
    className={clsx('w-[4.5rem] bg-side-bar-black', className)}
  ></div>
)
