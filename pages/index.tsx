import type { NextPage, NextPageContext } from 'next'
import ArticleList from '../components/article/ArticleList'
import fetchData from '../lib/fetchData'

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
  error: string
}

const Home: NextPage = ({ articles, blogs, error }: IProps) => {
  console.log(blogs)
  return (
    <section id="articles" className="py-16">
      <div className="container">
        <ArticleList articles={articles} />
      </div>
    </section>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { data: articles, error: errorArticles } = await fetchData(
    'articles?_limit=12'
  )
  const { data: blogs, error: errorBlogs } = await fetchData('blogs?_limit=12')
  return {
    props: {
      articles: articles,
      blogs: blogs,
      error: [errorArticles, errorBlogs]
    }
  }
}

export default Home
