'use client'

import { Socials } from '#/components/Socials'
import { cn } from '#/utils/cn'
import { PartialRecord } from '#/utils/types'

type ClassNamesElements = 'root' | 'inner'

export type FooterProps = {
  classNames?: PartialRecord<ClassNamesElements, string>
  hideBorder?: boolean
}

export const Footer = ({ classNames, hideBorder = false }: FooterProps) => {
  return (
    <footer
      className={cn(
        'flex w-full flex-col items-center justify-start gap-4',
        classNames?.root
      )}
    >
      {hideBorder ? null : (
        <div className="h-[2px] w-full bg-brand-primary-dark" />
      )}
      <div
        className={cn(
          'flex w-full items-center justify-start',
          classNames?.inner
        )}
      >
        <Socials />
      </div>
    </footer>
  )
}
