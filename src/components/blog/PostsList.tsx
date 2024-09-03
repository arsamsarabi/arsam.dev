import { Post } from 'contentlayer/generated'
import { PostIntro } from './PostIntro'

export type PostsListProps = {
  posts: Array<Post>
}

export const PostsList = ({ posts }: PostsListProps) => {
  return (
    <div className="lg:grid lg:grid-cols-2 lg:gap-4">
      {posts.map((p) => (
        <PostIntro key={p.slug} post={p} />
      ))}
    </div>
  )
}
