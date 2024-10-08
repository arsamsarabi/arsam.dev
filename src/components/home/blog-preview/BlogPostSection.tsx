import { allPosts } from 'contentlayer/generated'
import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { PostPreview } from './PostPreview'

const MAX_POSTS_TO_SHOW = 3

export const BlogPostSection = () => {
  const postsToShow = allPosts.slice(0, MAX_POSTS_TO_SHOW).reverse()

  return (
    <HomeSection
      bgColour="bg-brand-primary-dark"
      Header={<SectionHeader icon="blog" text="Latest blog posts" />}
      Body={
        <div className="grid w-full flex-1 grid-cols-1 content-center items-center justify-center gap-4 sm:grid-cols-2 md:grid-cols-1 lg:gap-4 xl:grid-cols-2">
          {postsToShow.map((post) => {
            return <PostPreview key={post.slug} {...post} />
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
