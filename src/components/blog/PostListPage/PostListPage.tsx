'use client'

import type { ReactNode } from 'react'
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
  Breadcrumbs?: ReactNode
}

export const PostListPage = ({
  posts,
  title,
  Breadcrumbs,
}: PostListPageProps) => {
  useSendPageLoadedEvent({ page: 'All posts page' })

  return (
    <BlogWithSidebar
      Sidebar={<PostsPagesSidebar />}
      Header={
        <>
          <PageTitle>{title}</PageTitle>
          {Breadcrumbs}
        </>
      }
    >
      <MorePostsAreComing />
      <PostsList posts={posts} />
    </BlogWithSidebar>
  )
}
