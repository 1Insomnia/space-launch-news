import cn from 'classnames'
import { FiX, FiMenu } from 'react-icons/fi'

const NavToggle = ({ isMenuOpen, setIsMenuOpen }) => {
  return (
    <button
      onClick={() => setIsMenuOpen(prev => !prev)}
      className={cn(
        isMenuOpen ? 'bg-teal' : '',
        'sm:hidden h-16 w-16 flex items-center justify-center'
      )}
    >
      {isMenuOpen ? (
        <FiX className="w-6 h-6 text-dark dark:text-light" />
      ) : (
        <FiMenu className="w-6 h-6 text-dark dark:text-light" />
      )}
    </button>
  )
}

export default NavToggle
