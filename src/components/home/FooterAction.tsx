import Link from 'next/link'
import { Icon, IconNamesType } from '#/components/Icon'
import { Button } from '#/components/ui/button'
import { cn } from '#/utils/cn'

export type FooterActionProps = {
  variant?: 'light' | 'dark'
  icon: IconNamesType
  text: string
  link: string
  external?: boolean
}

export const FooterAction = ({
  external = false,
  icon,
  link,
  text,
  variant = 'light',
}: FooterActionProps) => {
  const color =
    variant === 'light'
      ? 'text-brand-accent-lightest'
      : 'text-brand-primary-dark'

  const linkAttr = external
    ? {
        target: '_blank',
        rel: 'noreferrer',
      }
    : {}

  const LinkComp = external ? 'a' : Link

  return (
    <Button
      variant="outline"
      size="xs"
      colour={variant}
      RightIcon={<Icon name={icon} size={18} className={cn(color)} />}
    >
      <LinkComp href={link} className={cn('text-xs', color)} {...linkAttr}>
        {text}
      </LinkComp>
    </Button>
  )
}
