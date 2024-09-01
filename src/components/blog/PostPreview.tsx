import Color from 'color'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { AnimateInView } from '#/components/animated'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
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
}: PostPreviewProps) => {
  return (
    <AnimateInView
      from="bottom"
      className="bg-no-cover flex h-[400px] w-full items-end overflow-hidden rounded-lg bg-cover shadow-md shadow-brand-primary-darkest md:h-[300px] md:w-full lg:w-[48%]"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      <div
        className="space-y-4 p-4 md:space-y-2"
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.85).string(),
        }}
      >
        <Link href={`/blog/${slug}`} className="space-y-2">
          <p className="font-heading text-3xl text-brand-primary-lightest md:text-2xl lg:text-xl">
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
            {JSON.stringify(readingTime)} Minutes to read
          </p>
          <p className="text-sm text-brand-accent-lightest md:text-xs">
            {wordCount} Words
          </p>
        </div>
      </div>
    </AnimateInView>
  )
}
