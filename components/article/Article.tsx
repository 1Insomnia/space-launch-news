import formatDate from '../../lib/formatDate'

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
    </div>
  )
}

export default Article
