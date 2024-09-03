import Color from 'color'
import { Anchor } from '#/components/Anchor'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { cn } from '#/utils/cn'

export const YouTubeComingSoon = ({ className }: { className?: string }) => {
  return (
    <div
      className={cn(
        'flex h-[400px] w-full flex-col justify-end bg-cover bg-center bg-no-repeat',
        className
      )}
      style={{
        backgroundImage: 'url(/images/youtube_placeholder.jpg)',
      }}
    >
      <div
        className="flex flex-col gap-2 px-6 py-2"
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.75).string(),
        }}
      >
        <h2 className="text-2xl text-brand-primary-lightest xl:text-3xl 2xl:text-4xl">
          Coming real soon!
        </h2>
        <p className="text-sm text-brand-primary-lightest xl:text-base 2xl:text-lg">
          I&apos;m adding the final touches to my very first YouTube video.
          It&apos;ll be published in the next few days.{' '}
          <Anchor
            href="https://instagram.com/codealongwitharsam"
            className="text-brand-accent-light decoration-brand-accent-light"
            external
          >
            Subscribe to my channel
          </Anchor>{' '}
          so you don&apos;t miss its release!
        </p>
      </div>
    </div>
  )
}
