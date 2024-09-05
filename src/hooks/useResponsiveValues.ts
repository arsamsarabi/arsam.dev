'use client'

import { useMedia } from 'react-use'
import type { MediaQueryKeys, PartialRecord } from '#/utils/types'

type ValueType = string | number

export type UseResponsiveValuesArgs = {
  default: ValueType
} & PartialRecord<MediaQueryKeys, ValueType>

export const useResponsiveValues = (
  args: UseResponsiveValuesArgs
): ValueType => {
  let result: ValueType | undefined

  const mediaQueryMap: Record<MediaQueryKeys, boolean> = {
    '3xl': useMedia('(min-width: 2048px)', false),
    '2xl': useMedia('(min-width: 1536px)', false),
    xl: useMedia('(min-width: 1280px)', false),
    lg: useMedia('(min-width: 1024px)', false),
    md: useMedia('(min-width: 768px)', false),
    sm: useMedia('(min-width: 640px)', false),
  }

  Object.keys(mediaQueryMap).map((key) => {
    if (!result && mediaQueryMap[key as MediaQueryKeys]) {
      result = args[key as MediaQueryKeys]
    }
  })

  return result || args.default
}
