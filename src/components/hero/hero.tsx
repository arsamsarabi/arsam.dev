import { Header } from '#/components/Header'
import { HeroContent } from './HeroContent'
import { Socials } from './Socials'

export const Hero = () => {
  return (
    <section className="center-child h-full flex-col">
      <Header className="fixed left-0 right-0 top-0 z-50 md:bg-transparent" />

      <HeroContent />

      <div className="flex h-[40px] w-5/6 flex-row items-center justify-start pb-4 text-brand-primary-lightest">
        <Socials />
      </div>
    </section>
  )
}
