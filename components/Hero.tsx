import Heading from './typography/Heading'

const Hero = () => {
  return (
    <section className="py-10 h-screen-offset home-hero flex items-center justify-center">
      <div className="">
        <Heading
          as="h1"
          text="Space Flight Portal"
          className="text-center mb-10 text-light"
        />
      </div>
    </section>
  )
}

export default Hero
