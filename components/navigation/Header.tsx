import { useState } from 'react'
import { NextRouter } from 'next/router'
import cn from 'classnames'
import { FiMenu, FiX } from 'react-icons/fi'

// Components
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import NavListMobile from './NavListMobile'
import NavListDesktop from './NavListDesktop'

interface IProps {
  router: NextRouter
}

const Header = ({ router }: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="bg-light-transparent text-dark dark:bg-dark-transparent dark:text-light fixed top-0 left-0 w-full z-1000 shadow-lg"
      style={{
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="pl-8 sm:container sm:pl-0">
        <div className="h-16 flex items-center justify-between">
          <Logo />
          <NavListDesktop router={router} />
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className={cn(
                isMenuOpen ? 'bg-teal' : 'bg-light-transparent',
                'sm:hidden h-16 w-16 flex items-center justify-center'
              )}
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-dark dark:text-light" />
              ) : (
                <FiMenu className="w-6 h-6 text-dark dark:text-light" />
              )}
            </button>
          </div>
        </div>
      </div>
      <NavListMobile router={router} isMenuOpen={isMenuOpen} />
    </header>
  )
}

export default Header
