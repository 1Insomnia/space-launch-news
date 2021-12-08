import { NextPage, NextPageContext } from 'next'
import { fetchAllArticles } from '../lib/fetchData'

// Components
import Heading from '../components/typography/Heading'
import PreviewList from '../components/preview/PreviewList'
import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import ReadMoreToggle from '../components/navigation/ReadMoreToggle'

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
  limitValue: number
}

const Articles: NextPage<IPage> = ({ articles, error, limitValue }: IPage) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/articles?limit=${limitValue + 5}`)
  }

  return (
    <section id="articles" className="py-10">
      <div className="container">
        <Heading as="h1" text="Latest Articles" className="text-center mb-10" />
        {!error && <PreviewList previews={articles} />}
      </div>
      <div className="text-center pt-10">
        <ReadMoreToggle handleClick={handleClick} />
      </div>
    </section>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { query } = context

  const limit = query.limit ? `?_limit=${query.limit}` : '?_limit=10'
  const limitValue = query.limit ? query.limit : 10

  const { articles, error } = await fetchAllArticles(limit)

  return {
    props: {
      articles: articles,
      error: error,
      limit: limit,
      limitValue: parseInt(limitValue)
    }
  }
}

export default Articles
