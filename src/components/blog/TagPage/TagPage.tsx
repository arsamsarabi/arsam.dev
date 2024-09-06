'use client'

import type { Post } from 'contentlayer/generated'
import { useSendPageLoadedEvent } from '#/hooks/useSendPageLoadedEvent'
import { PostListPage } from '../PostListPage'

export type TagPageProps = {
  posts: Array<Post>
  tag: string
}

export const TagPage = ({ posts, tag }: TagPageProps) => {
  useSendPageLoadedEvent({ page: 'Tags page', tag })

  return <PostListPage posts={posts} title={`All posts for " ${tag} " tag`} />
}
