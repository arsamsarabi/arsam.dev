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
        <div className="relative h-auto w-[200px] rounded-lg">
          <Image
            className="absolute rounded object-contain"
            src={imageUrl}
            alt={title}
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
            fill
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
