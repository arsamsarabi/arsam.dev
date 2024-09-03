'use client'

import { Socials } from '#/components/Socials'
import { cn } from '#/utils/cn'

export type FooterProps = {
  className?: string
}

export const Footer = ({ className }: FooterProps) => {
  return (
    <footer
      className={cn(
        'mt-8 flex w-full items-center justify-start border-t-2 border-brand-primary-dark px-8 py-6 lg:px-0',
        className
      )}
    >
      <Socials />
    </footer>
  )
}
