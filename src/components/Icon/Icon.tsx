import { ICONS } from './icons'
import { IconProps } from './types'

export const Icon = ({
  color,
  name,
  size = 18,
  strokeWidth = 1.4,
  className,
}: IconProps) => {
  const Icon = ICONS[name]

  return (
    <Icon
      color={color}
      strokeWidth={strokeWidth}
      size={size}
      className={className}
    />
  )
}
