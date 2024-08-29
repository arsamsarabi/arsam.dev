import { YouTubeEmbed } from '@next/third-parties/google'
import { Icon } from './Icon'

export const YoutubeIntro = () => {
  return (
    <section className="center-child h-full flex-col">
      <div className="height-[40px] flex w-5/6 items-center justify-start pt-4 text-brand-primary-lightest">
        <h2 className="text-lg">Find me on YouTube!</h2>
      </div>
      <div className="center-child w-5/6 flex-1 flex-col">
        <div className="h-[300px] w-5/6">
          <YouTubeEmbed
            videoid="Q9lA4jKtzvM"
            height={300}
            params="controls=0"
          />
        </div>
      </div>

      <div className="height-[40px] flex w-5/6 flex-row items-center justify-between pb-4 text-brand-primary-lightest">
        <a
          href="https://youtube.com/@CodeAlongWithArsam"
          target="_top"
          className="font-heading text-brand-primary-lightest"
        >
          youtube.com/@CodeAlongWithArsam
        </a>
        <div className="flex flex-row gap-4">
          <Icon
            name="youtube"
            size={22}
            className="text-brand-primary-lightest"
          />
          <Icon
            name="instagram"
            size={22}
            className="text-brand-primary-lightest"
          />
        </div>
      </div>
    </section>
  )
}
