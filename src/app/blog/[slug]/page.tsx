import type { Metadata, ResolvingMetadata } from 'next'
import { notFound } from 'next/navigation'
import { allPosts } from 'contentlayer/generated'
import { BlogPostPage } from '#/components/blog'

type Props = {
  params: { slug: string }
  searchParams: { [key: string]: string | string[] | undefined }
}

export async function generateStaticParams() {
  return allPosts.map((post) => ({
    slug: post._raw.flattenedPath,
  }))
}

export async function generateMetadata(
  { params, searchParams: _ }: Props,
  parent: ResolvingMetadata
): Promise<Metadata> {
  const slug = params.slug
  const post = allPosts.find((post) => post._raw.flattenedPath === slug)

  if (!post) return {}

  const previousImages = (await parent).openGraph?.images || []

  return {
    title: `${post?.title} | Arsam's blog`,
    description: post?.excerpt,
    openGraph: {
      images: [post?.cover, ...previousImages],
    },
  }
}

export default async function PostPage({ params }: Props) {
  const post = allPosts.find((post) => post._raw.flattenedPath === params.slug)

  if (!post) notFound()

  return <BlogPostPage post={post} />
}
