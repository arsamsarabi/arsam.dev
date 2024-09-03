import Color from 'color'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { Pill } from '#/components/Pill'
import { AnimateInView } from '#/components/animated'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { cn } from '#/utils/cn'
import { formatDate } from '#/utils/date'

export type PostPreviewProps = Omit<Post, 'body'>

export const PostPreview = ({
  date,
  title,
  excerpt,
  wordCount,
  readingTime,
  cover,
  slug,
  comingSoon,
}: PostPreviewProps) => {
  return (
    <AnimateInView
      from="bottom"
      className="bg-no-cover flex h-[400px] w-full items-end overflow-hidden rounded-lg bg-cover shadow-md shadow-brand-primary-darkest sm:h-[300px]"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div
        className="w-full space-y-4 p-4 md:space-y-2"
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.95).string(),
        }}
      >
        <Link
          href={`/blog/${slug}`}
          className={cn('space-y-2', {
            'pointer-events-none': comingSoon,
          })}
        >
          {comingSoon && <Pill variant="danger">Coming Soon</Pill>}
          <p className="font-heading text-3xl text-brand-primary-lightest md:text-2xl lg:text-xl xl:text-2xl">
            {title}
          </p>
          <p className="text-xs text-brand-accent-lightest md:text-xs">
            {formatDate(date)}
          </p>
          <p className="my-2 line-clamp-2 text-gray-200 md:text-sm">
            {excerpt}
          </p>
        </Link>

        <div className="flex w-full items-center justify-between border-t border-brand-primary-light pt-2">
          <p className="text-sm text-brand-accent-lightest md:text-xs">
            {readingTime.text}
          </p>
          <p className="text-sm text-brand-accent-lightest md:text-xs">
            {wordCount} Words
          </p>
        </div>
      </div>
    </AnimateInView>
  )
}
