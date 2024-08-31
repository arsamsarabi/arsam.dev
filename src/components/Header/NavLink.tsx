'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { Icon, IconNamesType } from '#/components/Icon'
import { cn } from '#/utils/cn'

export type NavLinkProps = {
  text: string
  link: string
  icon: IconNamesType
}

export const NavLink = ({ text, link, icon }: NavLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === link

  return (
    <Link
      href={link}
      className={cn('flex items-center justify-center gap-2 px-2 py-1', {
        'rounded-md border-b-4 border-brand-success text-brand-success':
          isActive,
      })}
    >
      <Icon name={icon} />
      {text}
    </Link>
  )
}
