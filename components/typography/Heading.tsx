import cn from 'classnames'

interface IProps {
  as: string
  text: string
  className?: string
}

const Heading = ({ as, text, className }: IProps) => {
  const heading = as.toLowerCase().trim()
  const headings = [
    {
      level: 'h1',
      class: 'text-5xl tracking-tighter font-bold leading-normal'
    },
    {
      level: 'h2',
      class: 'text-4xl tracking-tighter font-bold leading-normal'
    },
    {
      level: 'h3',
      class: 'text-3xl tracking-tighter font-bold leading-normal'
    },
    {
      level: 'h4',
      class: 'text-2xl tracking-tighter font-bold leading-normal'
    }
  ]

  const element = headings.find(el => el.level === heading) || {
    level: 'p',
    class: ''
  }

  const Element = element.level
  const classDefault = element.class

  return <Element className={cn(classDefault, className)}>{text}</Element>
}

export default Heading
