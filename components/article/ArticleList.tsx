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
    <div className="space-y-8">
      {articles.map(article => (
        <Article {...article} key={article.id} />
      ))}
    </div>
  )
}

export default ArticleList
