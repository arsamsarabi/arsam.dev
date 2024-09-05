'use client'

import { RefAttributes, SVGAttributes } from 'react'
import {
  type UseResponsiveValuesArgs,
  useResponsiveValues,
} from '#/hooks/useResponsiveValues'
import { ICONS } from './icons'
import { IconNamesType } from './types'

export type IconProps = RefAttributes<SVGSVGElement> &
  SVGAttributes<SVGAElement> & {
    name: IconNamesType
    className?: string
    responsiveSizes?: UseResponsiveValuesArgs
  }

export const Icon = ({
  color,
  name,
  responsiveSizes,
  strokeWidth = 1.4,
  className,
}: IconProps) => {
  const DEFAULT_SIZES = {
    default: 18,
    '3xl': 32,
    '2xl': 28,
    xl: 26,
    lg: 22,
    md: 20,
    sm: 18,
  }

  const responsiveSize = useResponsiveValues({
    ...DEFAULT_SIZES,
    ...responsiveSizes,
  })

  const Icon = ICONS[name]

  return (
    <Icon
      color={color}
      strokeWidth={strokeWidth}
      size={responsiveSize}
      className={className}
    />
  )
}
