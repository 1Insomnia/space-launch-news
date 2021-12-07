import { NextPage } from 'next'
import Heading from '../components/typography/Heading'

const Blogs: NextPage = () => {
  return (
    <section id="blogs" className="py-10">
      <div className="container">
        <Heading as="h1" text="Latest Blogs" className="text-center mb-10" />
      </div>
    </section>
  )
}

export default Blogs
