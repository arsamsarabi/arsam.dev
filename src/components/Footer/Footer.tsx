'use client'

import { usePathname } from 'next/navigation'
import { Socials } from '#/components/Socials'

export const Footer = () => {
  const pathname = usePathname()
  const shouldShowFooter = pathname === '/blog'

  if (!shouldShowFooter) return null

  return (
    <footer className="flex h-12 w-full items-center justify-start px-8">
      <Socials />
    </footer>
  )
}
