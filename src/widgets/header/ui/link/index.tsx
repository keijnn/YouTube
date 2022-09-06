//import modules
import { RouteInstance } from 'atomic-router'
import { Link } from 'atomic-router-react'
import clsx from 'clsx'
import { ReactNode } from 'react'

interface NavigationLinkProps {
  children: ReactNode
  url: RouteInstance<{}>
  label?: string
  className?: string
}

export const NavigationLink = ({
  url,
  children,
  label,
  className,
}: NavigationLinkProps) => (
  <Link to={url} className={clsx(className)}>
    {label}
    {children}
  </Link>
)
