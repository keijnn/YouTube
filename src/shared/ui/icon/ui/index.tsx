import clsx from "clsx"
import { ReactNode } from "react"

interface IconProps {
    children: ReactNode
    className?: string
    onClick?: () => void
}

export const Icon = ({ children, onClick, className }: IconProps) => (
  <div
    onClick={onClick}
    className={clsx(
      'text-white cursor-pointer flex items-center justify-center',
      className
    )}
  >
    {children}
  </div>
)