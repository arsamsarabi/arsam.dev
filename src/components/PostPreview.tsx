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
      <div className="flex gap-4">
        <div className="h-[200px] w-[200px]">
          <Image
            className="rounded"
            src={imageUrl}
            width={200}
            height={160}
            alt={title}
          />
        </div>
        <div className="flex flex-col items-start justify-start">
          <div className="flex w-full items-center justify-between">
            <p className="font-heading text-2xl">{title}</p>
            <p className="">{date}</p>
          </div>
          <p className="my-2 text-sm">{excerpt}</p>

          <div className="flex w-full items-center justify-between">
            <p>{minutes} Minutes to read</p>
            <p>{wordCount} Words</p>
          </div>
        </div>
      </div>
    </Link>
  )
}
