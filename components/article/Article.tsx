import formatDate from '../../lib/formatDate'
import NextImage from 'next/image'

interface IProps {
  events: []
  featured: boolean
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

const Article = ({
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
    <div className="shadow-md rounded-lg overflow-hidden">
      <div
        className="h-64 bg-cover bg-center bg-no-repeat w-full"
        style={{ background: `url(${imageUrl})` }}
      ></div>
      <div className="p-4">
        <h4 className="font-semibold mb-4 text-lg">{title}</h4>
        <p className="leading-relaxed text-sm py-4">{summary}</p>
        <p className="text-sm">{formatDate(publishedAt)}</p>
        <div>{url}</div>
      </div>
    </div>
  )
}

export default Article
