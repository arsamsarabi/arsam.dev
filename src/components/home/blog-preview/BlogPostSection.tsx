import { type Post, allPosts } from 'contentlayer/generated'
import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { PostPreview } from './PostPreview'
import { PostPreviewSkeleton } from './PostPreviewSkeleton'

const MAX_POSTS_TO_SHOW = 3

export const BlogPostSection = () => {
  const postsToShow = allPosts.slice(0, MAX_POSTS_TO_SHOW)

  // Hack until I have at least MAX_POSTS_TO_SHOW posts!
  while (postsToShow.length < MAX_POSTS_TO_SHOW) {
    postsToShow.push({ type: 'skeleton' as Post['type'] } as Post)
  }

  return (
    <HomeSection
      bgColour="bg-brand-primary-dark"
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
