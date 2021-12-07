import { NextPageContext } from 'next'
import { fetchAllArticles } from '../lib/fetchData'
import NextLink from 'next/link'

// Components
import Heading from '../components/typography/Heading'
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
  return (
    <section id="articles" className="py-10">
      <div className="container">
        <Heading as="h1" text="Latest Articles" className="text-center mb-10" />
        <ArticleList articles={articles} />
      </div>
      <div className="text-center pt-10">
        <NextLink href="#">
          <a className="inline-block px-4 py-2 border border-accents-9 rounded">
            Read More
          </a>
        </NextLink>
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
