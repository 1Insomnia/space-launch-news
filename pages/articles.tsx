import { NextPage, NextPageContext } from 'next'
import { fetchAllArticles } from '../lib/fetchData'
import NextLink from 'next/link'

// Components
import Heading from '../components/typography/Heading'
import PreviewList from '../components/preview/PreviewList'

interface IPage {
  articles: {
    featured: boolean
    events: []
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

const Articles: NextPage<IPage> = ({ articles, error }: IPage) => {
  return (
    <section id="articles" className="py-10">
      <div className="container">
        <Heading as="h1" text="Latest Articles" className="text-center mb-10" />
        {!error && <PreviewList previews={articles} />}
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
  const { articles, error } = await fetchAllArticles('?_limit=3')
  return {
    props: {
      articles: articles,
      error: error
    }
  }
}

export default Articles
