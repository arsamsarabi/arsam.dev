import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'
import { HeroContent } from './HeroContent'

export const Hero = () => {
  return (
    <section className="center-child h-full flex-col">
      <Header className="fixed left-0 right-0 top-0 md:bg-transparent" />

      <HeroContent />

      <Footer />
    </section>
  )
}
