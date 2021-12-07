import Article from './Article'

interface IProps {
  articles: {
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
  }[]
}

const ArticleList = ({ articles }: IProps) => {
  return (
    <div>
      <h2 className="text-4xl font-bold tracking-tight mb-10">
        Latest Articles
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 xl:grid-cols-4 gap-4 lg:gap-8 items-start">
        {articles.map(article => (
          <Article {...article} key={article.id} />
        ))}
      </div>
    </div>
  )
}

export default ArticleList
