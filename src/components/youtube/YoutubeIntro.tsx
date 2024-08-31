import { YouTubeEmbed } from '@next/third-parties/google'
import { Icon } from '#/components/Icon'
import { LandingSection } from '#/components/LandingSection'
import { Button } from '#/components/ui/button'

export const YoutubeIntro = () => {
  return (
    <LandingSection
      Header={
        <>
          <Icon name="play" className="text-red-600" />
          <h2 className="text-lg text-brand-accent-lightest">
            Find me on YouTube
          </h2>
        </>
      }
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
        <>
          <a
            href="https://youtube.com/@CodeAlongWithArsam"
            target="_top"
            className="font-heading text-brand-accent-lightest"
          >
            youtube.com/@CodeAlongWithArsam
          </a>
          <div className="flex flex-row gap-4">
            <Button
              variant="outline"
              size="xs"
              colour="light"
              RightIcon={
                <Icon
                  name="youtube"
                  size={18}
                  className="text-brand-accent-lightest"
                />
              }
              className="ml-auto"
            >
              <a
                href="https://gitgub.com/arsamsarabi"
                className="text-xs text-brand-accent-lightest"
              >
                Subscribe
              </a>
            </Button>

            <Button
              variant="outline"
              size="xs"
              colour="light"
              RightIcon={
                <Icon
                  name="instagram"
                  size={18}
                  className="text-brand-accent-lightest"
                />
              }
              className="ml-auto"
            >
              <a
                href="https://gitgub.com/arsamsarabi"
                className="text-xs text-brand-accent-lightest"
              >
                Follow
              </a>
            </Button>
          </div>
        </>
      }
    />
  )
}
