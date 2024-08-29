import type { LucideProps } from 'lucide-react'

export type IconProps = LucideProps & {
  name: IconNamesType
  className?: string
}

export const IconNames = ['instagram', 'linkedin', 'youtube', 'github'] as const

export type IconNamesType = (typeof IconNames)[number]
