import { FooterAction, HomeSection, SectionHeader } from '#/components/home'
import { makeFakePosts } from '#/utils/mock'
import { PostPreview } from './PostPreview'

export const LatestBlogPost = () => {
  const posts = makeFakePosts()

  return (
    <HomeSection
      Header={<SectionHeader icon="blog" text="Latest blog posts" />}
      Body={
        <div className="flex flex-1 flex-wrap content-center items-center gap-4">
          {posts.map((p) => (
            <PostPreview key={p.slug} {...p} />
          ))}
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
