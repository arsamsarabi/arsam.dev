import { type Post, allPosts } from 'contentlayer/generated'
import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { PostPreview } from './PostPreview'
import { PostPreviewSkeleton } from './PostPreviewSkeleton'

export const LatestBlogPost = () => {
  const postsToShow = allPosts.slice(0, 4)

  // Hack until I have at least 4 posts!
  while (postsToShow.length < 4) {
    postsToShow.push({ type: 'skeleton' as Post['type'] } as Post)
  }

  return (
    <HomeSection
      bgColour="bg-brand-primary"
      Header={<SectionHeader icon="blog" text="Latest blog posts" />}
      Body={
        <div className="flex w-full flex-1 flex-col content-center items-center gap-8 lg:gap-4">
          {postsToShow.map((p, i) => {
            if (p.type === 'Post') {
              return <PostPreview key={p.slug} {...p} />
            }
            return <PostPreviewSkeleton key={`${p.type}-${i}`} />
          })}
        </div>
      }
      Footer={
        <div className="ml-auto">
          <FooterAction icon="forward" text="Read more" link="/blog" />
        </div>
      }
    />
  )
}
