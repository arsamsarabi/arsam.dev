'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { Icon } from '#/components/Icon'
import { MY_SOCIAL_LINKS, Socials as SocialSites } from '#/constants/socials'
import { cn } from '#/utils/cn'
import type { PartialRecord } from '#/utils/types'

type ClassNamesElements = 'container' | 'anchor' | 'icon'

export type SocialsProps = {
  classNames?: PartialRecord<ClassNamesElements, string>
}

export const Socials = ({ classNames }: SocialsProps) => {
  return (
    <div
      className={cn(
        'flex items-center justify-center gap-4',
        classNames?.container
      )}
    >
      {(Object.keys(MY_SOCIAL_LINKS) as Array<SocialSites>).map((key) => {
        return (
          <a
            key={key}
            href={MY_SOCIAL_LINKS[key]}
            target="_blank"
            rel="noreferrer"
            className={cn(classNames?.anchor)}
            onClick={() =>
              sendGAEvent({
                event: 'Social link click',
                name: key,
              })
            }
          >
            <Icon
              name={key}
              className={cn('text-brand-primary-dark', classNames?.icon)}
            />
          </a>
        )
      })}
    </div>
  )
}
