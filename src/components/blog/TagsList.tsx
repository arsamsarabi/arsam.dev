'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { Post } from 'contentlayer/generated'
import { Anchor } from '#/components/Anchor'
import { Pill, type PillProps } from '#/components/Pill'
import { cn } from '#/utils/cn'
import { PartialRecord } from '#/utils/types'

type ClassNamesElements = 'root' | 'link' | 'pill'

export type TagsListProps = {
  tags: Post['tags']
  classNames?: PartialRecord<ClassNamesElements, string>
  variant?: PillProps['variant']
}

export const TagsList = ({
  tags,
  classNames,
  variant = 'light',
}: TagsListProps) => {
  return (
    <div className={cn('flex flex-wrap gap-2', classNames?.root)}>
      {tags.map((tag) => (
        <Anchor
          key={tag}
          href={`/blog/tags/${tag.replaceAll(' ', '-')}`}
          className={cn(classNames?.link)}
          onClick={() => sendGAEvent('event', 'Tag click', { value: { tag } })}
        >
          <Pill variant={variant} size="sm" className={cn(classNames?.pill)}>
            {tag}
          </Pill>
        </Anchor>
      ))}
    </div>
  )
}
