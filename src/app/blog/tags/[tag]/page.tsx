import { allPosts } from 'contentlayer/generated'
import { TagPage } from '#/components/blog'

type Props = {
  params: { tag: string }
}

export default async function Page({ params }: Props) {
  const posts = allPosts.filter((post) =>
    post.tags.includes(params.tag.replaceAll('-', ' '))
  )

  if (!posts?.length) {
    return (
      <div>
        <p>Nothing found</p>
      </div>
    )
  }

  return <TagPage posts={posts} />
}
