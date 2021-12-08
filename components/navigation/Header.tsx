import { useState } from 'react'
import { NextRouter } from 'next/router'

// Components
import Logo from './Logo'
import ThemeToggle from './ThemeToggle'
import NavListMobile from './NavListMobile'
import NavListDesktop from './NavListDesktop'
import NavToggle from './NavToggle'

interface IProps {
  router: NextRouter
}

const Header = ({ router }: IProps) => {
  const [isMenuOpen, setIsMenuOpen] = useState<boolean>(false)

  return (
    <header
      className="bg-light-transparent text-dark dark:bg-dark-transparent dark:text-light fixed top-0 left-0 w-full z-1000 shadow-lg"
      style={{
        backdropFilter: 'blur(10px)'
      }}
    >
      <div className="pl-8 sm:max-w-4xl mx-auto sm:pl-0">
        <div className="h-16 flex items-center justify-between">
          <Logo />
          <div className="flex items-center space-x-4">
            <NavListDesktop router={router} />
            <ThemeToggle />
            <NavToggle isMenuOpen={isMenuOpen} setIsMenuOpen={setIsMenuOpen} />
          </div>
        </div>
      </div>
      <NavListMobile router={router} isMenuOpen={isMenuOpen} />
    </header>
  )
}

export default Header
