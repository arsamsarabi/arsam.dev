import Link from 'next/link'
import { Post } from 'contentlayer/generated'
import { Pill } from '#/components/Pill'

export type TagsListProps = Pick<Post, 'tags'>

export const TagsList = ({ tags }: TagsListProps) => {
  return (
    <div className="flex flex-wrap gap-2">
      {tags.map((tag) => (
        <Link key={tag} href={`/blog/tags/${tag.replaceAll(' ', '-')}`}>
          <Pill variant="light" size="sm">
            {tag}
          </Pill>
        </Link>
      ))}
    </div>
  )
}
