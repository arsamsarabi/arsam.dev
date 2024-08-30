import Color from 'color'
import Link from 'next/link'
import { Post } from '#/lib/types'

export type PostPreviewProps = Omit<Post, 'body'>

export const PostPreview = ({
  date,
  title,
  excerpt,
  wordCount,
  minutes,
  imageUrl,
  slug,
}: PostPreviewProps) => {
  return (
    <div
      className="bg-no-cover flex h-[300px] w-[48%] items-end overflow-hidden rounded-lg bg-cover shadow-lg shadow-brand-primary-darkest"
      style={{
        backgroundImage: `url(${imageUrl})`,
      }}
    >
      <div
        className="space-y-2 p-4"
        style={{
          backgroundColor: Color('#1f1b2f').alpha(0.85).string(),
        }}
      >
        <Link href={`/blog/${slug}`} className="space-y-2">
          <p className="font-heading text-xl text-brand-secondary-light">
            {title}
          </p>
          <p className="text-xs text-brand-accent-lightest">{date}</p>
          <p className="my-2 line-clamp-2 text-sm text-gray-200">{excerpt}</p>
        </Link>

        <div className="flex w-full items-center justify-between text-xs">
          <p className="text-xs text-brand-accent-lightest">
            {minutes} Minutes to read
          </p>
          <p className="text-xs text-brand-accent-lightest">
            {wordCount} Words
          </p>
        </div>
      </div>
    </div>
  )
}
