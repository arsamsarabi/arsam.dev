'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { Icon } from '#/components/Icon'
import type { WorkExperience } from '#/constants/employment'
import { DisplayCardTitle } from '../DisplayCard/DisplayCardTitle'

export type EmploymentCardLinkProps = Pick<
  WorkExperience,
  'title' | 'link' | 'icon'
>

export const EmploymentCardLink = ({
  title,
  link,
  icon,
}: EmploymentCardLinkProps) => {
  return (
    <a
      href={link}
      target="_blank"
      rel="noreferrer"
      className="mb-2 w-full"
      onClick={() =>
        sendGAEvent('event', 'Employer link click', {
          employer: title,
        })
      }
    >
      <div className="flex w-full items-center justify-between gap-2">
        <DisplayCardTitle>{title}</DisplayCardTitle>
        <Icon name={icon} color="var(--brand-accent-lightest)" />
      </div>
    </a>
  )
}
