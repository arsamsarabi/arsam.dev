'use client'

import { sendGAEvent } from '@next/third-parties/google'
import { motion } from 'framer-motion'
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
        'relative flex items-center justify-center gap-2 px-2 py-1 transition-all hover:text-brand-primary-dark',
        {
          'pointer-events-none font-bold text-brand-primary': isActive,
        }
      )}
      onClick={() => sendGAEvent({ event: 'NavLink click', link })}
    >
      <Icon name={icon} />
      {text}
      {isActive && (
        <motion.div
          layoutId="underline"
          className="absolute bottom-[-1px] left-[50%] right-[50%] h-[6px] w-[6px] rounded-full bg-brand-primary"
        />
      )}
    </Link>
  )
}
