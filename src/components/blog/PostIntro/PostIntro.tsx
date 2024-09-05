import type { Post } from 'contentlayer/generated'
import { Anchor } from '#/components/Anchor'
import { IconAndLabel } from '#/components/IconAndLabel'
import { Pill } from '#/components/Pill'
import { AnimateInView } from '#/components/animated'
import { formatDate } from '#/utils/date'
import { makeYouTubeVideoWatchUrl } from '#/utils/youtube'
import { TagsList } from '../TagsList'
import { IntroTitle } from './IntroTitle'

export type PostIntroProps = {
  post: Post
}

export const PostIntro = ({ post }: PostIntroProps) => {
  const {
    date,
    title,
    excerpt,
    tags,
    readingTime,
    wordCount,
    video_id,
    slug,
    comingSoon,
    thumbnail,
  } = post
  return (
    <AnimateInView className="relative flex flex-col gap-2 rounded-md border-2 border-brand-primary bg-brand-accent-lightest">
      {comingSoon && (
        <Pill size="sm" variant="danger" className="absolute right-2 top-2">
          Coming Soon
        </Pill>
      )}

      <IntroTitle link={`/blog/${slug}`} title={title} thumbnail={thumbnail} />

      <div className="flex flex-col gap-4 px-4">
        <p>{excerpt}</p>

        {video_id && (
          <div className="text-brand-primary-lightest">
            <Anchor
              href={makeYouTubeVideoWatchUrl(video_id)}
              external
              className="pointer-events-none text-brand-danger"
            >
              <IconAndLabel label="YouTube video coming soon!" icon="youtube" />
            </Anchor>
          </div>
        )}

        <TagsList variant="primary" tags={tags} />
      </div>

      <div className="flex w-full items-center justify-between bg-brand-primary-dark px-4 py-2 text-brand-primary-lightest">
        <p className="text-xs">{formatDate(date)}</p>
        <p className="text-xs">{readingTime.text}</p>
        <p className="text-xs">{wordCount} words</p>
      </div>
    </AnimateInView>
  )
}
