import { type Post } from 'contentlayer/generated'
import { BlogWithSidebar } from '../BlogWithSidebar'
import { MorePostsAreComing } from '../MorePostsAreComing'
import { PageTitle } from '../PageTitle'
import { PostsList } from '../PostsList'
import { PostsPagesSidebar } from '../PostsPagesSidebar'

type PostListPageProps = {
  posts: Array<Post>
  title: string
}

export const PostListPage = ({ posts, title }: PostListPageProps) => {
  return (
    <BlogWithSidebar
      Sidebar={<PostsPagesSidebar />}
      Header={<PageTitle>{title}</PageTitle>}
    >
      <MorePostsAreComing />
      <PostsList posts={posts} />
    </BlogWithSidebar>
  )
}
