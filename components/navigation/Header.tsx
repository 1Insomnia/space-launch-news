import { NextRouter } from 'next/router'
import { FiMenu } from 'react-icons/fi'
// Components
import NavLink from './NavLink'
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'

interface IProps {
  router: NextRouter
}

const Header = ({ router }: IProps) => {
  return (
    <header
      className="bg-light-transparent text-dark dark:bg-dark-transparent dark:text-light absolute top-0 left-0 w-full z-1000"
      style={{
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="container">
        <nav className="h-16 flex items-center justify-between">
          <Logo />
          <div>
            <ThemeToggle />
            <button>
              <FiMenu className="w-6 h-6 text-dark dark:text-light" />
            </button>
          </div>
        </nav>
      </div>
    </header>
  )
}

export default Header
{
  /* <NavLink
              text="test"
              path={router.asPath}
              href="/"
              className="text-lg"
            /> */
}
