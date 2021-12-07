import { NextPage, NextPageContext } from 'next'
import { fetchAllBlogs } from '../lib/fetchData'
// Components
import Heading from '../components/typography/Heading'
import PreviewList from '../components/preview/PreviewList'

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
}

const Blogs: NextPage<IPage> = ({ blogs, error }) => {
  return (
    <section id="blogs" className="py-10">
      <div className="container">
        <Heading as="h1" text="Latest Blogs" className="text-center mb-10" />
        {!error && <PreviewList previews={blogs} />}
      </div>
    </section>
  )
}

export const getServerSideProps = async (context: NextPageContext) => {
  const { blogs, error } = await fetchAllBlogs()
  return {
    props: {
      blogs: blogs,
      error: error
    }
  }
}

export default Blogs
