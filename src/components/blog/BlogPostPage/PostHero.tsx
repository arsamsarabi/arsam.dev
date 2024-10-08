import Color from 'color'
import { PropsWithChildren } from 'react'
import { Post } from 'contentlayer/generated'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { formatDate } from '#/utils/date'
import { TagsList } from '../TagsList'

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
      className="flex h-[250px] items-end overflow-hidden bg-cover bg-bottom bg-no-repeat md:h-[300px] lg:h-[320px] lg:rounded-bl-md lg:rounded-br-md xl:h-[360px] 2xl:h-[420px]"
    >
      <div
        style={{
          backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.85).string(),
        }}
        className="flex w-full flex-col gap-2 bg-opacity-75 px-8 py-4 text-brand-primary-lightest lg:gap-4 lg:py-8 xl:gap-8"
      >
        <div className="flex flex-col content-center items-start justify-between gap-2 sm:flex-row sm:items-center">
          <h1 className="text-2xl md:text-3xl xl:text-4xl">{title}</h1>
          <SmallText>{formatDate(date)}</SmallText>
        </div>
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <TagsList tags={tags} />
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
