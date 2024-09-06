'use client'

import { useMDXComponent } from 'next-contentlayer2/hooks'
import type { Post } from 'contentlayer/generated'
import { mdxComponents } from '#/components/MDX'
import { FadeInView } from '#/components/animated'
import { useSendPageLoadedEvent } from '#/hooks/useSendPageLoadedEvent'
import { BlogWithSidebar } from '../BlogWithSidebar'
import { BlogBreadcrumbs } from './BlogBreadcrumbs'
import { BlogPostSidebar } from './BlogPostSidebar'
import { PostHero } from './PostHero'
import { ShareButton } from './ShareButton'

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

  useSendPageLoadedEvent({ page: 'Blog post page', title })

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

      <BlogWithSidebar
        Header={
          <div className="mt-4 flex w-full flex-col items-start justify-center gap-4 sm:flex-row sm:items-center sm:justify-between md:mt-6 md:gap-6 2xl:mt-8 2xl:gap-8">
            <BlogBreadcrumbs postTitle={title} />
            <ShareButton
              slug={slug}
              title={title}
              excerpt={excerpt}
              tags={tags}
            />
          </div>
        }
        Sidebar={<BlogPostSidebar youtubeVideoId={video_id} />}
      >
        <FadeInView>
          <MDXContent components={mdxComponents} />
        </FadeInView>
      </BlogWithSidebar>
    </div>
  )
}
