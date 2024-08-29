import Link from 'next/link'
import { makeFakePosts } from '#/utils/mock'
import { PostPreview } from './PostPreview'

export const LatestBlogPost = () => {
  const posts = makeFakePosts()

  console.group(
    '%cLatestBlogPost',
    'background-color: #2d6667; color: #fff9ff; padding: 6px 24px; font-size: 18px; border-radius: 12px'
  )
  console.log(posts)
  console.groupEnd()

  return (
    <section className="center-child h-full flex-col">
      <div className="height-[40px] flex w-5/6 items-center justify-start pt-4 text-brand-primary-lightest">
        <h2 className="text-lg">Latest blog posts!</h2>
      </div>
      <div className="center-child w-5/6 flex-1 flex-col">
        {posts.map((p) => (
          <PostPreview key={p.slug} {...p} />
        ))}
      </div>

      <div className="height-[40px] flex w-5/6 flex-row items-center justify-between pb-4 text-brand-primary-lightest">
        <Link href="/blog" className="font-heading text-brand-primary-lightest">
          See more
        </Link>
      </div>
    </section>
  )
}
