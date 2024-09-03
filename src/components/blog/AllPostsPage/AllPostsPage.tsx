import { allPosts } from 'contentlayer/generated'
import { BlogContentWrapper } from '../BlogContentWrapper'
import { PageTitle } from '../PageTitle'
import { PostsList } from '../PostsList'

export const AllPostsPage = () => {
  return (
    <BlogContentWrapper>
      <PageTitle>All posts</PageTitle>
      <PostsList posts={allPosts} />
    </BlogContentWrapper>
  )
}
