'use client'

import { sendGAEvent } from '@next/third-parties/google'
import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { cn } from '#/utils/cn'
import { formatDate } from '#/utils/date'
import { DisplayCardDescription } from '../DisplayCard/DisplayCardDescription'
import { DisplayCardDetail } from '../DisplayCard/DisplayCardDetail'
import { DisplayCardTitle } from '../DisplayCard/DisplayCardTitle'

export type PostPreviewLinkProps = Pick<
  Post,
  'slug' | 'comingSoon' | 'title' | 'excerpt' | 'date'
>

export const PostPreviewLink = ({
  slug,
  comingSoon,
  title,
  date,
  excerpt,
}: PostPreviewLinkProps) => {
  return (
    <Link
      href={`/blog/${slug}`}
      className={cn(
        'mb-2 flex flex-1 flex-col items-start justify-start gap-2',
        {
          'pointer-events-none': comingSoon,
        }
      )}
      onClick={() =>
        sendGAEvent('event', 'Post preview click', {
          value: { post: title },
        })
      }
    >
      <DisplayCardTitle>{title}</DisplayCardTitle>
      <DisplayCardDetail>{formatDate(date)}</DisplayCardDetail>
      <DisplayCardDescription>{excerpt}</DisplayCardDescription>
    </Link>
  )
}
