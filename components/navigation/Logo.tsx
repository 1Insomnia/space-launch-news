import { BiPlanet } from 'react-icons/bi'

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="block">
        <BiPlanet className="w-4 h-4 text-dark dark:text-light" />
      </span>
      <span className="block capitalize text-lg font-bold tracking-tight text-dark dark:text-light">
        Planet Pos
      </span>
    </div>
  )
}

export default Logo
