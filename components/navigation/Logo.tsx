import { BiRocket } from 'react-icons/bi'

const Logo = () => {
  return (
    <div className="flex items-center gap-1">
      <span className="block">
        <BiRocket className="w-6 h-6 text-teal" />
      </span>
      <span className="block capitalize text-lg font-bold tracking-tight text-dark dark:text-light">
        Space Launch Portal
      </span>
    </div>
  )
}

export default Logo
