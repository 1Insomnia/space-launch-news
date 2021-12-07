import formatDate from '../../lib/formatDate'
import { motion } from 'framer-motion'

interface IProps {
  events: []
  featured?: boolean
  id: number
  imageUrl: string
  launches: []
  newsSite: string
  publishedAt: string
  summary: string
  title: string
  updatedAt: string
  url: string
}

const Preview = ({
  events,
  featured,
  id,
  imageUrl,
  launches,
  newsSite,
  publishedAt,
  summary,
  title,
  updatedAt,
  url
}: IProps) => {
  return (
    <motion.div
      className="shadow-md rounded-lg overflow-hidden sm:flex"
      whileHover={{ y: 10 }}
    >
      <div className="p-4 flex flex-col justify-between w-full sm:w-2/3">
        <div>
          <h3 className="font-semibold text-2xl tracking-tight mb-4">
            {title}
          </h3>
          <p className="leading-relaxed text-sm py-2">{summary}</p>
        </div>
        <div className="flex items-center justify-between">
          <p className="text-sm">{formatDate(publishedAt)}</p>
          <a
            href={url}
            target="_blank"
            rel="noreferrer"
            className="text-teal underline"
          >
            source
          </a>
        </div>
      </div>
      <div
        className="h-64 w-1/3 hidden sm:block"
        style={{ background: `url(${imageUrl}) center center/cover no-repeat` }}
      ></div>
    </motion.div>
  )
}

export default Preview
