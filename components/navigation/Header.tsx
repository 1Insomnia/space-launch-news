import { useState, useEffect } from 'react'
import { NextRouter } from 'next/router'
import { FiMenu, FiX } from 'react-icons/fi'

import { useForceMenuClose } from '../../hooks/useForceMenuClose'
// Components
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import NavListMobile from './NavListMobile'

interface IProps {
  router: NextRouter
}

const Header = ({ router }: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)

  return (
    <header
      className="bg-light-transparent text-dark dark:bg-dark-transparent dark:text-light absolute top-0 left-0 w-full z-1000 shadow-lg"
      style={{
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="container">
        <nav className="h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-4">
            <ThemeToggle />
            <button
              onClick={() => setIsMenuOpen(prev => !prev)}
              className="sm:hidden"
            >
              {isMenuOpen ? (
                <FiX className="w-6 h-6 text-dark dark:text-light" />
              ) : (
                <FiMenu className="w-6 h-6 text-dark dark:text-light" />
              )}
            </button>
          </div>
        </nav>
        <NavListMobile router={router} isMenuOpen={isMenuOpen} />
      </div>
    </header>
  )
}

export default Header
