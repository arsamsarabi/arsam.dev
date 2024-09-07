'use client'

import { sendGAEvent } from '@next/third-parties/google'
import Image from 'next/image'
import { AnimateInView } from '#/components/animated'
import type { ProjectType } from '#/constants/projects'
import { DisplayCardDescription } from '../DisplayCard/DisplayCardDescription'
import { DisplayCardTitle } from '../DisplayCard/DisplayCardTitle'

export type ProjectCardProps = ProjectType

export const ProjectCard = ({
  badge,
  color,
  description,
  display,
  link,
  name,
  title,
}: ProjectCardProps) => {
  if (!display) return null

  return (
    <li key={name} className="flex h-[300px] w-full md:h-[280px] lg:h-[240px]">
      <a
        className="h-full w-full"
        href={link}
        target="_blank"
        rel="noreferrer"
        onClick={() =>
          sendGAEvent('event', 'Project link click', {
            title,
          })
        }
      >
        <AnimateInView
          from="bottom"
          className="flex h-full w-full flex-col overflow-hidden rounded-md border-2 border-brand-primary-lightest bg-brand-primary-lightest shadow-md shadow-brand-primary"
        >
          <div className="flex flex-1 flex-col justify-around gap-4 bg-brand-primary-dark p-4">
            <DisplayCardTitle>{title}</DisplayCardTitle>
            <DisplayCardDescription>{description}</DisplayCardDescription>
          </div>
          <div className="flex h-full flex-col items-start justify-end gap-4 p-4 md:gap-2">
            <p
              className="inline-flex items-center rounded-md px-4 py-1 text-lg font-semibold text-white focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2 lg:px-1.5 lg:text-sm xl:px-2.5 xl:py-0.5 xl:text-xs"
              style={{
                backgroundColor: color,
              }}
            >
              {badge}
            </p>
            <div className="relative h-[32px] w-[200px] lg:h-[24px] lg:w-[160px]">
              <Image
                src={`https://img.shields.io/npm/dm/${name}`}
                alt={name}
                fill
                priority
              />
            </div>
          </div>
        </AnimateInView>
      </a>
    </li>
  )
}
