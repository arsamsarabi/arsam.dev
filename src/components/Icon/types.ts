import type { LucideProps } from 'lucide-react'

export type IconProps = LucideProps & {
  name: IconNamesType
  className?: string
}

export const IconNames = [
  'blog',
  'briefcase',
  'broken-link',
  'code',
  'forward',
  'github',
  'instagram',
  'link',
  'linkedin',
  'play',
  'youtube',
] as const

export type IconNamesType = (typeof IconNames)[number]
