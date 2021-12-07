import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'
import { useIsMounted } from '../../hooks/useIsMounted'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()
  const { isMounted } = useIsMounted()

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button className="" onClick={handleClick}>
      {theme === 'light' && isMounted ? (
        <FiMoon className="text-dark dark:text-light w-6 h-6 hover:text-teal" />
      ) : (
        <FiSun className="text-dark dark:text-light w-6 h-6 hover:text-teal" />
      )}
    </button>
  )
}

export default ThemeToggle
