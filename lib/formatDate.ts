import { format, parseISO } from 'date-fns'

const formatDate = (date: string) => {
  return format(parseISO(date), 'dd MMM, yyyy')
}

export default formatDate
