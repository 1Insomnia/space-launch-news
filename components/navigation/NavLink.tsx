import NextLink from 'next/link'
import cn from 'classnames'

interface IProps {
  text: string
  href: string
  path: string
  className?: string
}

const NavLink = ({ text, href, path, className }: IProps) => {
  let active = path === href ? true : false

  return (
    <NextLink href={href}>
      <a className={cn(active ? 'font-bold' : '', 'nav-link', className)}>
        {text}
      </a>
    </NextLink>
  )
}

export default NavLink
