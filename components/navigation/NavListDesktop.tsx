import { NextRouter } from 'next/router'
import NavLink from './NavLink'

interface IProps {
  router: NextRouter
}

const NavListDesktop = ({ router }: IProps) => {
  return (
    <nav className="hidden sm:flex sm:items-center space-x-4">
      <NavLink
        text="home"
        href="/"
        path={router.asPath}
        className="nav-link-desktop"
      />
      <NavLink
        text="articles"
        href="/articles"
        path={router.asPath}
        className="nav-link-desktop"
      />
      <NavLink
        text="blogs"
        href="/blogs"
        path={router.asPath}
        className="nav-link-desktop"
      />
    </nav>
  )
}

export default NavListDesktop
