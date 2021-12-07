import Heading from './typography/Heading'

const Hero = () => {
  return (
    <section className="py-10">
      <div className="container">
        <Heading
          as="h1"
          text="Space Flight Portal"
          className="text-center mb-10"
        />
        <div className="space-y-8">
          <div>
            <h2 className="text-4xl font-semibold tracking-tight mb-2">
              Articles
            </h2>
            <p className="leading-relaxed">
              Get an overview of the latest Spaceflight news, from various
              sources!
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold tracking-tight mb-2">
              Blogs
            </h2>
            <p className="leading-relaxed">
              Blogs often provide a more detailed overview of launches and
              missions. A must-have for the serious spaceflight enthusiast
            </p>
          </div>
          <div>
            <h2 className="text-4xl font-semibold tracking-tight mb-2">
              Report
            </h2>
            <p className="leading-relaxed">
              Space stations and other missions data.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Hero
