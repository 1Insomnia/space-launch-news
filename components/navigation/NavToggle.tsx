import cn from 'classnames'
import { Dispatch, SetStateAction } from 'react'
import { FiX, FiMenu } from 'react-icons/fi'

interface IProps {
  isMenuOpen: boolean
  setIsMenuOpen: Dispatch<SetStateAction<boolean>>
}

const NavToggle = ({ isMenuOpen, setIsMenuOpen }: IProps) => {
  return (
    <button
      onClick={() => setIsMenuOpen(!isMenuOpen)}
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
