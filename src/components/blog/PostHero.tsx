import Color from 'color'
import Link from 'next/link'
import { PropsWithChildren } from 'react'
import { Post } from 'contentlayer/generated'
import { Pill } from '#/components/Pill'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { formatDate } from '#/utils/date'

export type PostHeroProps = Pick<
  Post,
  'date' | 'title' | 'cover' | 'tags' | 'readingTime' | 'wordCount'
>

export const PostHero = ({
  date,
  title,
  cover,
  tags,
  readingTime,
  wordCount,
}: PostHeroProps) => {
  return (
    <div
      style={{
        backgroundImage: `url(${cover})`,
      }}
      className="flex h-[250px] items-end overflow-hidden bg-cover bg-bottom bg-no-repeat lg:rounded-bl-md lg:rounded-br-md"
    >
      <div
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.85).string(),
        }}
        className="flex w-full flex-col gap-2 bg-opacity-75 px-4 py-2 text-brand-primary-lightest sm:px-6 sm:py-4 lg:gap-4 xl:gap-8"
      >
        <div className="flex flex-col content-center items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h1 className="text-2xl md:text-3xl xl:text-4xl">{title}</h1>
          <SmallText>{formatDate(date)}</SmallText>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <div className="flex flex-wrap gap-2">
            {tags.map((tag) => (
              <Link key={tag} href={`/blog/tags/${tag.replaceAll(' ', '-')}`}>
                <Pill variant="light" size="sm">
                  {tag}
                </Pill>
              </Link>
            ))}
          </div>
          <div className="flex gap-6">
            <SmallText>{readingTime.text}</SmallText>
            <SmallText>{wordCount} words</SmallText>
          </div>
        </div>
      </div>
    </div>
  )
}

function SmallText({ children }: PropsWithChildren) {
  return (
    <p className="relative top-[1px] to-brand-primary-light text-xs lg:text-sm xl:text-base">
      {children}
    </p>
  )
}
