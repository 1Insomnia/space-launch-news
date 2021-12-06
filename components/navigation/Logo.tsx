import { BiPlanet } from 'react-icons/bi'

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="block">
        <BiPlanet className="w-6 h-6 text-teal" />
      </span>
      <span className="block capitalize text-lg font-bold tracking-tight text-dark dark:text-light">
        Planet Pos
      </span>
    </div>
  )
}

export default Logo
