import { Anchor } from '#/components/Anchor'
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

  return (
    <Button
      variant="outline"
      size="xs"
      colour={variant}
      RightIcon={<Icon name={icon} size={18} className={cn(color)} />}
    >
      <Anchor
        href={link}
        className={cn('text-sm md:text-xs', color)}
        external={external}
      >
        {text}
      </Anchor>
    </Button>
  )
}
