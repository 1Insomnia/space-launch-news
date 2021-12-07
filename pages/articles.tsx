import { NextPageContext } from 'next'
import { fetchAllArticles } from '../lib/fetchData'

// Components
import ArticleList from '../components/article/ArticleList'

interface IPage {
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
  error: string
}

const Articles = ({ articles, error }: IPage) => {
  console.log([articles, error])

  return (
    <section id="articles" className="py-10">
      <div className="container">
        <h1 className="text-5xl tracking-tighter font-bold leading-normal text-center mb-10">
          Latest Articles
        </h1>
        <ArticleList articles={articles} />
      </div>
    </section>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { articles, error } = await fetchAllArticles()
  return {
    props: {
      articles: articles,
      error: error
    }
  }
}

export default Articles
