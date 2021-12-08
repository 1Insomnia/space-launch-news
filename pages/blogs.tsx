import { NextPage, NextPageContext } from 'next'
import { fetchAllBlogs } from '../lib/fetchData'
import { useRouter } from 'next/router'
// Components
import Heading from '../components/typography/Heading'
import PreviewList from '../components/preview/PreviewList'
import ReadMoreToggle from '../components/navigation/ReadMoreToggle'

interface IPage {
  blogs: {
    id: number
    title: string
    url: string
    imageUrl: string
    newsSite: string
    summary: string
    publishedAt: string
    updatedAt: string
    launches: []
    events: []
  }[]
  error: string
  limitValue: number
}

const Blogs: NextPage<IPage> = ({ blogs, error, limitValue }) => {
  const router = useRouter()

  const handleClick = () => {
    router.push(`/blogs?limit=${limitValue + 5}`)
  }

  return (
    <section id="blogs" className="py-10">
      <div className="container">
        <Heading as="h1" text="Latest Blogs" className="text-center mb-10" />
        {!error && <PreviewList previews={blogs} />}
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

  const { blogs, error } = await fetchAllBlogs(limit)

  return {
    props: {
      blogs: blogs,
      error: error,
      limit: limit,
      limitValue: parseInt(limitValue)
    }
  }
}

export default Blogs
