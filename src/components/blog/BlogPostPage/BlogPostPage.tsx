import { useMDXComponent } from 'next-contentlayer/hooks'
import type { Post } from 'contentlayer/generated'
import { mdxComponents } from '#/components/MDX'
import { BlogContentWrapper } from '../BlogContentWrapper'
import { BlogBreadcrumbs } from './BlogBreadcrumbs'
import { PostHero } from './PostHero'
import { ShareButton } from './ShareButton'
import { Sidebar } from './Sidebar'

export type BlogPostProps = {
  post: Post
}

export const BlogPostPage = ({ post }: BlogPostProps) => {
  const {
    slug,
    body,
    date,
    title,
    cover,
    tags,
    readingTime,
    wordCount,
    video_id,
    excerpt,
  } = post

  const MDXContent = useMDXComponent(body.code)

  return (
    <div className="flex flex-col">
      <PostHero
        date={date}
        title={title}
        cover={cover}
        tags={tags}
        readingTime={readingTime}
        wordCount={wordCount}
      />

      <BlogContentWrapper>
        <div className="flex items-center justify-between py-4">
          <BlogBreadcrumbs postTitle={title} />
          <ShareButton
            slug={slug}
            title={title}
            excerpt={excerpt}
            tags={tags}
          />
        </div>

        <div className="flex flex-col-reverse lg:flex-row">
          <Sidebar youtubeVideoId={video_id} />
          <div className="max-w-3xl border-b-2 border-brand-primary-darkest lg:w-8/12 lg:border-none lg:pl-8">
            <MDXContent components={mdxComponents} />
          </div>
        </div>
      </BlogContentWrapper>
    </div>
  )
}
