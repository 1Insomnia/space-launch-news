import { FiSun, FiMoon } from 'react-icons/fi'
import { useTheme } from 'next-themes'

const ThemeToggle = () => {
  const { theme, setTheme } = useTheme()

  const handleClick = () => {
    theme === 'light' ? setTheme('dark') : setTheme('light')
  }

  return (
    <button className="" onClick={handleClick}>
      {theme === 'light' ? (
        <FiMoon className="text-dark dark:text-light w-6 h-6" />
      ) : (
        <FiSun className="text-dark dark:text-light w-6 h-6" />
      )}
    </button>
  )
}

export default ThemeToggle
