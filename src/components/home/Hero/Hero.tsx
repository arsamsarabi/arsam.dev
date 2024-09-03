import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'
import { HeroContent } from './HeroContent'

export const Hero = () => {
  return (
    <section className="center-child h-full flex-col">
      <Header className="max-w-min self-start" />

      <HeroContent />

      <Footer className="max-w-min self-start border-none lg:pl-4" />
    </section>
  )
}
