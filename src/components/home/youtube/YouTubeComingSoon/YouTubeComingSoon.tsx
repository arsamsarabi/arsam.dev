import Color from 'color'
import { Anchor } from '#/components/Anchor'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { cn } from '#/utils/cn'
import { DisplayCardDescription } from '../../DisplayCard/DisplayCardDescription'
import { DisplayCardTitle } from '../../DisplayCard/DisplayCardTitle'

export const YouTubeComingSoon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'flex h-[400px] w-full flex-col justify-end bg-cover bg-center bg-no-repeat shadow shadow-brand-primary 3xl:h-[600px]',
        className
      )}
      style={{
        backgroundImage: 'url(/images/youtube_placeholder.jpg)',
      }}
    >
      <div
        className="flex max-h-[50%] min-h-fit flex-col items-start justify-start gap-2 px-6 py-2 3xl:gap-4 3xl:px-8 3xl:py-8"
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.75).string(),
        }}
      >
        <DisplayCardTitle>Coming real soon!</DisplayCardTitle>
        <DisplayCardDescription>
          I&apos;m adding the final touches to my very first YouTube video.
          It&apos;ll be published in the next few days.{' '}
          <Anchor
            href="https://youtube.com/@codealongwitharsam"
            className="text-brand-accent-light decoration-brand-accent-light"
            external
          >
            Subscribe to my channel
          </Anchor>{' '}
          so you don&apos;t miss its release!
        </DisplayCardDescription>
      </div>
    </div>
  )
}
