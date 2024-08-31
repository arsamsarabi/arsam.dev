import Link from 'next/link'
import { Icon } from '#/components/Icon'
import { LandingSection } from '#/components/LandingSection'
import { Button } from '#/components/ui/button'
import { makeFakePosts } from '#/utils/mock'
import { PostPreview } from './PostPreview'

export const LatestBlogPost = () => {
  const posts = makeFakePosts()

  return (
    <LandingSection
      Header={
        <>
          <Icon name="blog" className="text-brand-accent-lightest" />
          <h2 className="text-lg text-brand-accent-lightest">
            Latest blog posts
          </h2>
        </>
      }
      Body={
        <div className="flex flex-1 flex-wrap content-center items-center gap-4">
          {posts.map((p) => (
            <PostPreview key={p.slug} {...p} />
          ))}
        </div>
      }
      Footer={
        <Button
          variant="outline"
          RightIcon={<Icon name="forward" />}
          size="xs"
          colour="light"
          className="ml-auto"
        >
          <Link href="/blog" className="text-xs">
            Read more
          </Link>
        </Button>
      }
    />
  )
}
