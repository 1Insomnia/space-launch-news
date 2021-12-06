import { NextRouter } from 'next/router'
import { ReactNode } from 'react'
import Header from '../navigation/Header'

interface IProps {
  children: ReactNode
  router: NextRouter
}

const Main = ({ children, router }: IProps) => {
  return (
    <div className="min-h-screen bg-light text-dark dark:bg-dark dark:text-light">
      <Header router={router} />
      <main className="pt-16">{children}</main>
    </div>
  )
}

export default Main
