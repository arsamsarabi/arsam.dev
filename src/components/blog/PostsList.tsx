import { Post } from 'contentlayer/generated'
import { PostIntro } from './PostIntro'

export type PostsListProps = {
  posts: Array<Post>
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:gap-6">
      {posts.map((p) => (
        <PostIntro key={p.slug} post={p} />
      ))}
    </div>
  )
}
