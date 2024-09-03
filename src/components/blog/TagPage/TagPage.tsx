import type { Post } from 'contentlayer/generated'
import { BlogContentWrapper } from '../BlogContentWrapper'
import { PageTitle } from '../PageTitle'
import { PostsList } from '../PostsList'

export type TagPageProps = {
  posts: Array<Post>
  tag: string
}

export const TagPage = ({ posts, tag }: TagPageProps) => {
  return (
    <BlogContentWrapper>
      <PageTitle>All posts for tag &quot; {tag} &quot;</PageTitle>
      <PostsList posts={posts} />
    </BlogContentWrapper>
  )
}
