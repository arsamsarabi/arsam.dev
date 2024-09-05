// import { YouTubeEmbed } from '@next/third-parties/google'
import { AnimateInView } from '#/components/animated'
import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { MY_SOCIAL_LINKS } from '#/constants/socials'
import { YouTubeComingSoon } from './YouTubeComingSoon'

export const YoutubeSection = () => {
  return (
    <HomeSection
      bgColour="bg-brand-primary-darkest"
      Header={<SectionHeader icon="play" text="Find me on YouTube" />}
      Body={
        <AnimateInView from="top" className="w-full">
          {/* <YouTubeEmbed
            videoid="Q9lA4jKtzvM"
            params="controls=0"
            style="box-shadow: 0px 0px 6px 0px rgba(255,255,255,0.5);"
          /> */}
          <YouTubeComingSoon />
        </AnimateInView>
      }
      Footer={
        <div className="ml-auto flex items-center gap-4 md:gap-2 3xl:gap-4">
          <FooterAction
            icon="youtube"
            text="subscribe"
            link={MY_SOCIAL_LINKS.youtube}
            external
          />
          <FooterAction
            icon="instagram"
            text="Follow"
            link="https://instagram.com/codealongwitharsam"
            external
          />
        </div>
      }
    />
  )
}
