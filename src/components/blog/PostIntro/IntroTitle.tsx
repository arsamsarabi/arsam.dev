'use client'

import { sendGAEvent } from '@next/third-parties/google'
import Color from 'color'
import Link from 'next/link'
import { BRAND_PRIMARY_DARKEST } from '#/constants/colors'
import { cn } from '#/utils/cn'

export type IntroTitleProps = {
  thumbnail: string
  title: string
  link: string
  comingSoon: boolean
}

export const IntroTitle = ({
  link,
  thumbnail,
  title,
  comingSoon,
}: IntroTitleProps) => {
  return (
    <Link
      className={cn({
        'pointer-events-none': comingSoon,
      })}
      href={link}
      onClick={() =>
        sendGAEvent({
          event: 'Post intro click',
          title,
        })
      }
    >
      <div
        className="flex h-52 flex-col justify-end gap-4 bg-cover"
        style={{
          backgroundImage: `url(${thumbnail})`,
        }}
      >
        <div
          style={{
            backgroundColor: Color(BRAND_PRIMARY_DARKEST).alpha(0.85).string(),
          }}
          className="p-4"
        >
          <p className="text-xl text-brand-primary-lightest">{title}</p>
        </div>
      </div>
    </Link>
  )
}
