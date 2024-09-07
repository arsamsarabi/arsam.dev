import { Footer } from '#/components/Footer'
import { Header } from '#/components/Header'
import { HomeSection } from '../HomeSection'
import { HeroContent } from './HeroContent'

export const Hero = () => {
  return (
    <HomeSection
      classNames={{
        wrapper: 'h-svh',
      }}
      bgColour="transparent"
      Header={<Header showNav={false} />}
      Body={<HeroContent />}
      Footer={<Footer hideBorder />}
    />
  )
}
