import { allPosts } from 'contentlayer/generated'
import { PostListPage } from '../PostListPage'
import { BlogBreadcrumbs } from './BlogBreadcrumbs'

const filteredPosts = allPosts.reverse()

export const AllPostsPage = () => {
  return (
    <PostListPage
      posts={filteredPosts}
      title="All posts"
      Breadcrumbs={<BlogBreadcrumbs />}
    />
  )
}
