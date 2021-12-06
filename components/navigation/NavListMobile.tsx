import { NextRouter } from 'next/router'
import NavLink from './NavLink'

interface IProps {
  isMenuOpen: boolean
  router: NextRouter
}

const NavListMobile = ({ isMenuOpen, router }: IProps) => {
  return isMenuOpen ? (
    <nav className="flex flex-col gap-4 pb-4 sm:hidden">
      <NavLink text="home" href="/" path={router.asPath} className="text-sm" />
      <NavLink
        text="contact"
        href="/contact"
        path={router.asPath}
        className="text-sm"
      />
    </nav>
  ) : null
}

export default NavListMobile
