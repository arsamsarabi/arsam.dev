import { useMDXComponent } from 'next-contentlayer/hooks'
import type { Post } from 'contentlayer/generated'
import { mdxComponents } from '#/components/MDX'
import { FadeInView } from '#/components/animated'
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
          <>
            <BlogBreadcrumbs postTitle={title} />
            <ShareButton
              slug={slug}
              title={title}
              excerpt={excerpt}
              tags={tags}
            />
          </>
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
