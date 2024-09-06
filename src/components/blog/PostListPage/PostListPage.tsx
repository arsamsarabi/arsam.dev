'use client'

import { type Post } from 'contentlayer/generated'
import { useSendPageLoadedEvent } from '#/hooks/useSendPageLoadedEvent'
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
  useSendPageLoadedEvent({ page: 'All posts page' })

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
