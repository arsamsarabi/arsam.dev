import { allPosts } from 'contentlayer/generated'
import { BlogWithSidebar } from '../BlogWithSidebar'
import { MorePostsAreComing } from '../MorePostsAreComing'
import { PageTitle } from '../PageTitle'
import { PostsList } from '../PostsList'
import { AllPostsSidebar } from './AllPostsSidebar'

const filteredPosts = allPosts.reverse()

export const AllPostsPage = () => {
  return (
    <BlogWithSidebar
      Sidebar={<AllPostsSidebar />}
      Header={<PageTitle>All posts</PageTitle>}
    >
      <div className="mb-4">
        <MorePostsAreComing />
      </div>
      <PostsList posts={filteredPosts} />
    </BlogWithSidebar>
  )
}
