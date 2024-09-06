'use client'

import { Socials } from '#/components/Socials'
import { cn } from '#/utils/cn'

export type FooterProps = {
  className?: string
  hideBorder?: boolean
}

export const Footer = ({ className, hideBorder = false }: FooterProps) => {
  return (
    <footer
      className={cn(
        'flex w-full flex-col items-center justify-start gap-4',
        className
      )}
    >
      {hideBorder ? null : (
        <div className="h-[2px] w-full bg-brand-primary-dark" />
      )}
      <div className="flex w-full items-center">
        <Socials />
      </div>
    </footer>
  )
}
