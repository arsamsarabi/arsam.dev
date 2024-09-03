import type { Post } from 'contentlayer/generated'
import { Anchor } from '#/components/Anchor'
import { AppImage } from '#/components/AppImage'
import { IconAndLabel } from '#/components/IconAndLabel'
import { formatDate } from '#/utils/date'
import { makeYouTubeVideoWatchUrl } from '#/utils/youtube'
import { TagsList } from '../TagsList'

export type PostIntroProps = {
  post: Post
}

export const PostIntro = ({ post }: PostIntroProps) => {
  const {
    date,
    title,
    excerpt,
    cover,
    tags,
    readingTime,
    wordCount,
    video_id,
    slug,
  } = post
  return (
    <div className="flex flex-col gap-2 rounded-md border-2 border-brand-primary bg-brand-accent-lightest">
      <div className="flex w-full items-center justify-between bg-brand-primary-dark px-2 py-2 text-brand-primary-lightest">
        <p className="text-xs">{formatDate(date)}</p>
        <p className="text-xs">{readingTime.text}</p>
        <p className="text-xs">{wordCount} words</p>
      </div>

      <div className="px-2 py-2 sm:flex sm:flex-col sm:gap-4">
        <div className="flex flex-col gap-2 sm:gap-2">
          <Anchor
            href={`/blog/${slug}`}
            className="text-2xl font-semibold text-brand-primary-dark"
          >
            {title}
          </Anchor>
          <p>{excerpt}</p>
        </div>
        <div className="flex">
          <AppImage
            alt={title}
            src={cover}
            width="100%"
            height="auto"
            classNames={{
              container: 'hidden',
            }}
          />
          <div className="mt-2 w-full">
            <TagsList
              variant="primary"
              tags={tags}
              classNames={{
                root: 'justify-between sm:justify-start',
              }}
            />
          </div>
        </div>
      </div>

      {video_id && (
        <div className="bg-brand-primary-dark px-2 py-2 text-brand-primary-lightest">
          <Anchor href={makeYouTubeVideoWatchUrl(video_id)} external>
            <IconAndLabel label="Watch the video instead!" icon="youtube" />
          </Anchor>
        </div>
      )}
    </div>
  )
}
