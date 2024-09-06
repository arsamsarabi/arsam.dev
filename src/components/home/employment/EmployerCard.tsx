'use client'

import { Icon } from '#/components/Icon'
import { WorkExperience } from '#/constants/employment'
import { DisplayCardDescription } from '../DisplayCard/DisplayCardDescription'
import { DisplayCardTitle } from '../DisplayCard/DisplayCardTitle'

export type EmployerCardProps = WorkExperience

export const EmployerCard = ({
  logo: { Comp, h = 'auto', w = '150px' },
  title,
  role,
  duration,
  icon,
  link,
}: EmployerCardProps) => {
  return (
    <div className="flex h-full w-full flex-col items-center justify-center overflow-hidden">
      <div className="center-child flex-1">
        <div
          className="relative"
          style={{
            height: h,
            width: w,
          }}
        >
          {Comp}
        </div>
      </div>
      <div className="flex h-[160px] w-full flex-col items-start justify-start space-y-1 rounded-bl-lg rounded-br-lg bg-brand-primary-dark p-4 3xl:h-[180px]">
        <a href={link} target="_blank" rel="noreferrer" className="mb-2 w-full">
          <div className="flex w-full items-center justify-between gap-2">
            <DisplayCardTitle>{title}</DisplayCardTitle>
            <Icon name={icon} color="var(--brand-accent-lightest)" />
          </div>
        </a>
        <DisplayCardDescription className="sm:text-sm">
          {role}
        </DisplayCardDescription>
        <DisplayCardDescription className="!mt-auto sm:text-sm">
          {duration}
        </DisplayCardDescription>
      </div>
    </div>
  )
}
