import Color from 'color'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { Pill } from '#/components/Pill'
import { AnimateInView } from '#/components/animated'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { cn } from '#/utils/cn'
import { formatDate } from '#/utils/date'
import { DisplayCardDescription } from '../DisplayCard/DisplayCardDescription'
import { DisplayCardDetail } from '../DisplayCard/DisplayCardDetail'
import { DisplayCardTitle } from '../DisplayCard/DisplayCardTitle'

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
      className="bg-no-cover relative flex h-[400px] w-full items-end overflow-hidden rounded-lg bg-cover shadow-md shadow-brand-primary-darkest sm:h-[300px] 3xl:h-[480px]"
      style={{
        backgroundImage: `url(${cover})`,
      }}
    >
      {comingSoon && (
        <Pill className="absolute right-4 top-4" variant="danger">
          Coming Soon
        </Pill>
      )}
      <div
        className="flex min-h-[50%] w-full flex-col items-start justify-between p-4"
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.95).string(),
        }}
      >
        <Link
          href={`/blog/${slug}`}
          className={cn(
            'mb-2 flex flex-1 flex-col items-start justify-start gap-2',
            {
              'pointer-events-none': comingSoon,
            }
          )}
        >
          <DisplayCardTitle>{title}</DisplayCardTitle>
          <DisplayCardDetail>{formatDate(date)}</DisplayCardDetail>
          <DisplayCardDescription>{excerpt}</DisplayCardDescription>
        </Link>

        <div className="mt-auto flex w-full items-center justify-between border-t border-brand-primary-light pt-2">
          <DisplayCardDetail>{readingTime.text}</DisplayCardDetail>
          <DisplayCardDetail>{wordCount} Words</DisplayCardDetail>
        </div>
      </div>
    </AnimateInView>
  )
}
