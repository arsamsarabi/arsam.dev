import type { LucideProps } from 'lucide-react'

export type IconProps = LucideProps & {
  name: IconNamesType
  className?: string
}

export const IconNames = [
  'github',
  'instagram',
  'linkedin',
  'play',
  'youtube',
  'blog',
  'forward',
  'briefcase',
  'link',
  'broken-link',
] as const

export type IconNamesType = (typeof IconNames)[number]
