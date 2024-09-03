import type { Post } from 'contentlayer/generated'
import { BlogWithSidebar } from '../BlogWithSidebar'
import { MorePostsAreComing } from '../MorePostsAreComing'
import { PageTitle } from '../PageTitle'
import { PostsList } from '../PostsList'
import { TagPageSidebar } from './TagPageSidebar'

export type TagPageProps = {
  posts: Array<Post>
  tag: string
}

export const TagPage = ({ posts, tag }: TagPageProps) => {
  return (
    <BlogWithSidebar
      Sidebar={<TagPageSidebar />}
      Header={<PageTitle>All posts for &quot; {tag} &quot; tag</PageTitle>}
    >
      <div className="mb-4">
        <MorePostsAreComing />
      </div>
      <PostsList posts={posts} />
    </BlogWithSidebar>
  )
}
