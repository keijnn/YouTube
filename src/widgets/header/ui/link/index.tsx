//import modules
import clsx from 'clsx'
import { Link } from 'react-router-dom'

interface NavigationProps {
  url: string
  label: string
  className?: string
}

export const Navigation = ({ url, label, className }: NavigationProps) => (
  <Link to={url} className={clsx(className)}>
    {label}
  </Link>
)
