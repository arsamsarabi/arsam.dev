import Link from 'next/link'
import { makeFakePosts } from '#/utils/mock'
import { Icon } from './Icon'
import { PostPreview } from './PostPreview'
import { Button } from './ui/button'

export const LatestBlogPost = () => {
  const posts = makeFakePosts()

  return (
    <section className="flex h-full flex-col items-center justify-start">
      <div className="height-[40px] flex w-5/6 items-center justify-start gap-2 pt-4 text-brand-primary-lightest">
        <Icon name="blog" className="text-brand-secondary-light" />
        <h2 className="text-lg">Latest blog posts</h2>
      </div>

      <div className="flex w-5/6 flex-1 flex-wrap content-center items-center gap-4">
        {posts.map((p) => (
          <PostPreview key={p.slug} {...p} />
        ))}
      </div>

      <div className="height-[40px] flex w-5/6 flex-row items-center justify-end pb-4">
        <Button
          variant="outline"
          RightIcon={<Icon name="forward" />}
          size="xs"
          colour="light"
        >
          <Link href="/blog" className="text-xs">
            See more
          </Link>
        </Button>
      </div>
    </section>
  )
}
