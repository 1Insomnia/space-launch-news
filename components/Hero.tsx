import Heading from './typography/Heading'

const Hero = () => {
  return (
    <section className="py-10 h-screen-offset home-hero flex items-center justify-center bg-hero-pattern bg-center bg-cover bg-no-repeat">
      <Heading
        as="h1"
        text="Space Flight Portal"
        className="text-center mb-10 text-light"
      />
    </section>
  )
}

export default Hero
