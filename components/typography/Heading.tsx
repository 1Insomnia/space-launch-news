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
      class: 'display-1'
    },
    {
      level: 'h2',
      class: 'display-2'
    },
    {
      level: 'h3',
      class: 'display-3'
    },
    {
      level: 'h4',
      class: 'display-4'
    },
    {
      level: 'h5',
      class: 'display-5'
    },
    {
      level: 'h6',
      class: 'display-6'
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
