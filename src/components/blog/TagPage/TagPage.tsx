import type { Post } from 'contentlayer/generated'
import { PostListPage } from '../PostListPage'

export type TagPageProps = {
  posts: Array<Post>
  tag: string
}

export const TagPage = ({ posts, tag }: TagPageProps) => {
  return <PostListPage posts={posts} title={`All posts for " ${tag} " tag`} />
}
