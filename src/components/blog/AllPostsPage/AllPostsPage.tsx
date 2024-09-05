import { allPosts } from 'contentlayer/generated'
import { PostListPage } from '../PostListPage'

const filteredPosts = allPosts.reverse()

export const AllPostsPage = () => {
  return <PostListPage posts={filteredPosts} title="All posts" />
}
