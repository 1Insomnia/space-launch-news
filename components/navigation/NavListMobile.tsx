import { NextRouter } from 'next/router'
import NavLink from './NavLink'

interface IProps {
  isMenuOpen: boolean
  router: NextRouter
}

const NavListMobile = ({ isMenuOpen, router }: IProps) => {
  return isMenuOpen ? (
    <nav className="flex flex-col pt-10 text-xl gap-4 pb-4 h-screen-offset bg-teal sm:hidden">
      <NavLink
        text="home"
        href="/"
        path={router.asPath}
        className="text-light"
      />
      <NavLink
        text="articles"
        href="/articles"
        path={router.asPath}
        className="text-light"
      />
      <NavLink
        text="blogs"
        href="/blogs"
        path={router.asPath}
        className="text-light"
      />
    </nav>
  ) : null
}

export default NavListMobile
