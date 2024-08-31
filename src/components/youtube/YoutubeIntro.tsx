import { YouTubeEmbed } from '@next/third-parties/google'
import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { MY_SOCIAL_LINKS } from '#/constants/socials'

export const YoutubeIntro = () => {
  return (
    <HomeSection
      bgColour="bg-brand-primary-darkest"
      Header={<SectionHeader icon="play" text="Find me on YouTube" />}
      Body={
        <div className="w-full">
          <YouTubeEmbed
            videoid="Q9lA4jKtzvM"
            params="controls=0"
            style="box-shadow: 0px 0px 12px 0px rgba(255,255,255,0.5);"
          />
        </div>
      }
      Footer={
        <div className="ml-auto space-x-4 md:space-x-2">
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
