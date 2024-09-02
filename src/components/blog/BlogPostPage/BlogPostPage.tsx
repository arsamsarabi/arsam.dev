import { useMDXComponent } from 'next-contentlayer/hooks'
import type { Post } from 'contentlayer/generated'
import { mdxComponents } from '#/components/MDX'
import { BlogBreadcrumbs } from './BlogBreadcrumbs'
import { PostHero } from './PostHero'
import { Sidebar } from './Sidebar'

export type BlogPostProps = {
  post: Post
}

export const BlogPostPage = ({ post }: BlogPostProps) => {
  const { body, date, title, cover, tags, readingTime, wordCount } = post

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

      <div className="py-4">
        <BlogBreadcrumbs postTitle={title} />
      </div>

      <div className="flex flex-col-reverse px-4 pb-4 sm:px-6 lg:flex-row lg:px-0">
        <Sidebar />
        <div className="max-w-3xl border-b-2 border-brand-primary-darkest lg:w-8/12 lg:border-none lg:pl-8">
          <MDXContent components={mdxComponents} />
        </div>
      </div>
    </div>
  )
}
