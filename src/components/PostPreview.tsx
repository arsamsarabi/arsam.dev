import Image from 'next/image'
import Link from 'next/link'
import { Post } from '#/lib/types'

export type PostPreviewProps = Omit<Post, 'body'>

export const PostPreview = ({
  date,
  title,
  excerpt,
  wordCount,
  minutes,
  imageUrl,
  slug,
}: PostPreviewProps) => {
  return (
    <Link href={`/blog/${slug}`}>
      <div>
        <div>
          <Image src={imageUrl} width={200} height={160} alt={title} />
        </div>
        <div>
          <p>{title}</p>
          <p>{excerpt}</p>
          <p>{date}</p>
          <div>
            <p>{minutes} Minutes to read</p>
            <p>{wordCount} Words</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
