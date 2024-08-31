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
      className={cn(
        'flex items-center justify-center gap-2 px-2 py-1 transition-all hover:text-brand-primary-dark',
        {
          'pointer-events-none rounded border-b-2 border-brand-primary font-bold text-brand-primary':
            isActive,
        }
      )}
    >
      <Icon name={icon} />
      {text}
    </Link>
  )
}
