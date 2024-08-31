import { Icon, IconNamesType } from '#/components/Icon'
import { cn } from '#/utils/cn'

export type SectionHeaderProps = {
  icon: IconNamesType
  text: string
  variant?: 'light' | 'dark'
}

export const SectionHeader = ({
  icon,
  text,
  variant = 'light',
}: SectionHeaderProps) => {
  const color =
    variant === 'light'
      ? 'text-brand-accent-lightest'
      : 'text-brand-primary-dark'

  return (
    <>
      <Icon name={icon} className={cn(color)} />
      <h2 className={cn(color, 'text-lg')}>{text}</h2>
    </>
  )
}
